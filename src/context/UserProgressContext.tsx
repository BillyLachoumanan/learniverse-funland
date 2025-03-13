
import React, { createContext, useContext, useState, useEffect } from 'react';

// Subject progress tracking
interface SubjectProgress {
  completed: number;
  total: number;
}

interface SubjectsProgress {
  [key: string]: SubjectProgress;
}

// Quiz completion tracking
interface CompletedQuiz {
  subjectId: string;
  quizId: string;
  timestamp: number;
  score?: number;
}

// Learning materials tracking
interface CompletedMaterial {
  subjectId: string;
  materialTitle: string;
  timestamp: number;
}

// Badges
interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt?: number;
}

export interface UserProgressContextType {
  subjects: SubjectsProgress;
  completedQuizzes: CompletedQuiz[];
  completedMaterials: CompletedMaterial[];
  badges: Badge[];
  points: number;
  completeActivity: (subjectId: string, quizId: string, score?: number) => void;
  markMaterialCompleted: (subjectId: string, materialTitle: string) => void;
  isLearningMaterialCompleted: (subjectId: string, materialTitle: string) => boolean;
  resetProgress: () => void;
  earnBadge: (badgeId: string) => boolean;
  hasBadge: (badgeId: string) => boolean;
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

const defaultSubjects: SubjectsProgress = {
  'mathematics': { completed: 0, total: 5 },
  'english': { completed: 0, total: 5 },
  'french': { completed: 0, total: 5 },
  'science': { completed: 0, total: 5 },
  'history': { completed: 0, total: 4 },
  'geography': { completed: 0, total: 4 },
};

const availableBadges: Badge[] = [
  {
    id: 'first-quiz',
    name: 'First Quiz',
    description: 'Completed your first quiz',
    icon: 'Trophy',
  },
  {
    id: 'perfect-score',
    name: 'Perfect Score',
    description: 'Got 100% on a quiz',
    icon: 'Award',
  },
  {
    id: 'subject-master',
    name: 'Subject Master',
    description: 'Completed all activities in a subject',
    icon: 'Medal',
  },
  {
    id: 'study-streak',
    name: 'Study Streak',
    description: 'Completed activities 3 days in a row',
    icon: 'Flame',
  },
  {
    id: 'first-material',
    name: 'Learning Pioneer',
    description: 'Completed your first learning material',
    icon: 'BookOpen', 
  },
  {
    id: 'avid-learner',
    name: 'Avid Learner',
    description: 'Completed 10 learning materials',
    icon: 'GraduationCap',
  }
];

export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load from localStorage or use defaults
  const [subjects, setSubjects] = useState<SubjectsProgress>(() => {
    const saved = localStorage.getItem('subjects');
    return saved ? JSON.parse(saved) : defaultSubjects;
  });
  
  const [completedQuizzes, setCompletedQuizzes] = useState<CompletedQuiz[]>(() => {
    const saved = localStorage.getItem('completedQuizzes');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [completedMaterials, setCompletedMaterials] = useState<CompletedMaterial[]>(() => {
    const saved = localStorage.getItem('completedMaterials');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [badges, setBadges] = useState<Badge[]>(() => {
    const saved = localStorage.getItem('badges');
    return saved ? JSON.parse(saved) : availableBadges.map(badge => ({...badge}));
  });
  
  const [points, setPoints] = useState<number>(() => {
    const saved = localStorage.getItem('points');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects]);
  
  useEffect(() => {
    localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes));
  }, [completedQuizzes]);
  
  useEffect(() => {
    localStorage.setItem('completedMaterials', JSON.stringify(completedMaterials));
  }, [completedMaterials]);
  
  useEffect(() => {
    localStorage.setItem('badges', JSON.stringify(badges));
  }, [badges]);
  
  useEffect(() => {
    localStorage.setItem('points', points.toString());
  }, [points]);
  
  // Mark a quiz as completed
  const completeActivity = (subjectId: string, quizId: string, score?: number) => {
    // Check if already completed
    const alreadyCompleted = completedQuizzes.some(
      quiz => quiz.subjectId === subjectId && quiz.quizId === quizId
    );
    
    // If not completed, add to completedQuizzes
    if (!alreadyCompleted) {
      const newQuiz: CompletedQuiz = {
        subjectId,
        quizId,
        timestamp: Date.now(),
        score
      };
      
      setCompletedQuizzes([...completedQuizzes, newQuiz]);
      
      // Update subject progress
      setSubjects(prev => ({
        ...prev,
        [subjectId]: {
          ...prev[subjectId],
          completed: prev[subjectId].completed + 1
        }
      }));
      
      // Award points
      setPoints(prev => prev + 10);
      
      // Check for badges
      if (completedQuizzes.length === 0) {
        earnBadge('first-quiz');
      }
      
      // Check if all activities in the subject are completed
      if (subjects[subjectId].completed + 1 === subjects[subjectId].total) {
        earnBadge('subject-master');
      }
    }
  };
  
  // Mark a learning material as completed
  const markMaterialCompleted = (subjectId: string, materialTitle: string) => {
    // Check if already completed
    const alreadyCompleted = completedMaterials.some(
      material => material.subjectId === subjectId && material.materialTitle === materialTitle
    );
    
    // If not completed, add to completedMaterials
    if (!alreadyCompleted) {
      const newMaterial: CompletedMaterial = {
        subjectId,
        materialTitle,
        timestamp: Date.now()
      };
      
      setCompletedMaterials([...completedMaterials, newMaterial]);
      
      // Award points
      setPoints(prev => prev + 5);
      
      // Check for badges
      if (completedMaterials.length === 0) {
        earnBadge('first-material');
      }
      
      if (completedMaterials.length + 1 >= 10) {
        earnBadge('avid-learner');
      }
    }
  };
  
  // Check if a learning material is completed
  const isLearningMaterialCompleted = (subjectId: string, materialTitle: string): boolean => {
    return completedMaterials.some(
      material => material.subjectId === subjectId && material.materialTitle === materialTitle
    );
  };
  
  // Reset all progress
  const resetProgress = () => {
    setSubjects(defaultSubjects);
    setCompletedQuizzes([]);
    setCompletedMaterials([]);
    setBadges(availableBadges.map(badge => ({...badge})));
    setPoints(0);
    
    // Clear localStorage
    localStorage.removeItem('subjects');
    localStorage.removeItem('completedQuizzes');
    localStorage.removeItem('completedMaterials');
    localStorage.removeItem('badges');
    localStorage.removeItem('points');
  };
  
  // Award a badge if not already earned
  const earnBadge = (badgeId: string): boolean => {
    const badgeIndex = badges.findIndex(badge => badge.id === badgeId);
    
    if (badgeIndex >= 0 && !badges[badgeIndex].earnedAt) {
      const updatedBadges = [...badges];
      updatedBadges[badgeIndex] = {
        ...updatedBadges[badgeIndex],
        earnedAt: Date.now()
      };
      
      setBadges(updatedBadges);
      setPoints(prev => prev + 20); // Bonus points for earning a badge
      return true;
    }
    
    return false;
  };
  
  // Check if user has a specific badge
  const hasBadge = (badgeId: string): boolean => {
    return badges.some(badge => badge.id === badgeId && badge.earnedAt !== undefined);
  };
  
  return (
    <UserProgressContext.Provider
      value={{
        subjects,
        completedQuizzes,
        completedMaterials,
        badges,
        points,
        completeActivity,
        markMaterialCompleted,
        isLearningMaterialCompleted,
        resetProgress,
        earnBadge,
        hasBadge
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = (): UserProgressContextType => {
  const context = useContext(UserProgressContext);
  if (context === undefined) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
};
