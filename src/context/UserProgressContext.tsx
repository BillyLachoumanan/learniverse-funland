import React, { createContext, useContext, useState, useEffect } from 'react';
import { subjects } from '../data/subjectData';

// Define progress for each subject
export interface SubjectProgress {
  completed: number;
  total: number;
  name: string;
}

// Define badge interface
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: Date;
}

// Define student information interface
export interface StudentInfo {
  name: string;
  age: number;
}

// Define the user progress context type
export interface UserProgressContextType {
  subjects: Record<string, SubjectProgress>;
  completedMaterials: { subjectId: string; materialTitle: string }[];
  reviewedTopics: { subjectId: string; topicName: string }[];
  markMaterialCompleted: (subjectId: string, materialTitle: string) => void;
  isLearningMaterialCompleted: (subjectId: string, materialTitle: string) => boolean;
  markTopicReviewed: (subjectId: string, topicName: string) => void;
  isTopicReviewed: (subjectId: string, topicName: string) => boolean;
  
  points: number;
  level: number;
  badges: Badge[];
  addPoints: (points: number) => void;
  resetProgress: () => void;
  completeActivity: (subjectId: string, activityId: string) => void;
  earnBadge: (badgeId: string) => void;
  
  studentInfo: StudentInfo | null;
  updateStudentInfo: (info: StudentInfo) => void;
}

// Create the context with default values
const UserProgressContext = createContext<UserProgressContextType>({
  subjects: {},
  completedMaterials: [],
  reviewedTopics: [],
  markMaterialCompleted: () => {},
  isLearningMaterialCompleted: () => false,
  markTopicReviewed: () => {},
  isTopicReviewed: () => false,
  
  points: 0,
  level: 1,
  badges: [],
  addPoints: () => {},
  resetProgress: () => {},
  completeActivity: () => {},
  earnBadge: () => {},
  
  studentInfo: null,
  updateStudentInfo: () => {},
});

// Hook to use the user progress context
export const useUserProgress = () => useContext(UserProgressContext);

// Define initial badges
const initialBadges: Badge[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first learning material',
    icon: '🌱',
    earned: false
  },
  {
    id: 'quick-learner',
    name: 'Quick Learner',
    description: 'Complete 5 learning materials',
    icon: '🚀',
    earned: false
  },
  {
    id: 'perfect-score',
    name: 'Perfect Score',
    description: 'Get all answers correct in a quiz',
    icon: '🏆',
    earned: false
  },
  {
    id: 'mathematics-master',
    name: 'Mathematics Master',
    description: 'Complete all Mathematics learning materials',
    icon: '🔢',
    earned: false
  },
  {
    id: 'science-explorer',
    name: 'Science Explorer',
    description: 'Complete all Science learning materials',
    icon: '🔬',
    earned: false
  }
];

// Calculate level based on points
const calculateLevel = (points: number): number => {
  return Math.floor(points / 100) + 1;
};

// Provider component
export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize points
  const [points, setPoints] = useState<number>(0);
  
  // Initialize badges
  const [badges, setBadges] = useState<Badge[]>(initialBadges);
  
  // Initialize subject progress
  const [subjectProgress, setSubjectProgress] = useState<Record<string, SubjectProgress>>(() => {
    const initialProgress: Record<string, SubjectProgress> = {};
    subjects.forEach(subject => {
      initialProgress[subject.id] = {
        completed: 0,
        total: subject.learningMaterials.length + subject.topics.length,
        name: subject.name,
      };
    });
    return initialProgress;
  });

  // Track completed learning materials
  const [completedMaterials, setCompletedMaterials] = useState<{ subjectId: string; materialTitle: string }[]>([]);
  
  // Track reviewed topics
  const [reviewedTopics, setReviewedTopics] = useState<{ subjectId: string; topicName: string }[]>([]);
  
  // Initialize student information
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  
  // Calculate level based on points
  const level = calculateLevel(points);
  
  // Add points to user's total
  const addPoints = (newPoints: number) => {
    setPoints(prevPoints => {
      const updatedPoints = prevPoints + newPoints;
      
      // Check for level-up achievements
      const prevLevel = calculateLevel(prevPoints);
      const newLevel = calculateLevel(updatedPoints);
      
      if (newLevel > prevLevel) {
        // Level up logic could go here
      }
      
      return updatedPoints;
    });
  };

  // Reset all progress
  const resetProgress = () => {
    // Reset points
    setPoints(0);
    
    // Reset badges
    setBadges(initialBadges);
    
    // Reset subject progress
    const resetSubjectProgress: Record<string, SubjectProgress> = {};
    subjects.forEach(subject => {
      resetSubjectProgress[subject.id] = {
        completed: 0,
        total: subject.learningMaterials.length + subject.topics.length,
        name: subject.name,
      };
    });
    setSubjectProgress(resetSubjectProgress);
    
    // Reset completed materials
    setCompletedMaterials([]);
    
    // Reset reviewed topics
    setReviewedTopics([]);
    
    // Clear localStorage
    localStorage.removeItem('userPoints');
    localStorage.removeItem('userBadges');
    localStorage.removeItem('subjectProgress');
    localStorage.removeItem('completedMaterials');
    localStorage.removeItem('reviewedTopics');
    localStorage.removeItem('studentInfo');
  };

  // Mark a learning material as completed
  const markMaterialCompleted = (subjectId: string, materialTitle: string) => {
    // Check if already completed
    if (isLearningMaterialCompleted(subjectId, materialTitle)) {
      return;
    }

    // Add to completed materials
    setCompletedMaterials(prev => [...prev, { subjectId, materialTitle }]);
    
    // Update subject progress
    setSubjectProgress(prev => {
      const subject = { ...prev[subjectId] };
      subject.completed = subject.completed + 1;
      return { ...prev, [subjectId]: subject };
    });
    
    // Add points for completing material
    addPoints(20);
    
    // Check if this is the first completed material
    if (completedMaterials.length === 0) {
      earnBadge('first-steps');
    }
    
    // Check if we've completed 5 materials
    if (completedMaterials.length === 4) {
      earnBadge('quick-learner');
    }
    
    // Check for subject-specific badges
    const currentSubject = subjects.find(s => s.id === subjectId);
    if (currentSubject) {
      const completedForThisSubject = completedMaterials.filter(m => m.subjectId === subjectId).length + 1;
      if (completedForThisSubject === currentSubject.learningMaterials.length) {
        // All materials for this subject completed
        if (subjectId === 'mathematics') {
          earnBadge('mathematics-master');
        } else if (subjectId === 'science') {
          earnBadge('science-explorer');
        }
      }
    }
  };

  // Complete a general activity (quiz, exercise, etc.)
  const completeActivity = (subjectId: string, activityId: string) => {
    // Add points for completing an activity
    addPoints(10);
  };

  // Earn a badge
  const earnBadge = (badgeId: string) => {
    setBadges(prevBadges => 
      prevBadges.map(badge => 
        badge.id === badgeId && !badge.earned
          ? { ...badge, earned: true, earnedAt: new Date() }
          : badge
      )
    );
    
    // Add points for earning a badge
    addPoints(50);
  };

  // Check if a learning material is completed
  const isLearningMaterialCompleted = (subjectId: string, materialTitle: string): boolean => {
    return completedMaterials.some(
      material => material.subjectId === subjectId && material.materialTitle === materialTitle
    );
  };
  
  // Mark a topic as reviewed
  const markTopicReviewed = (subjectId: string, topicName: string) => {
    // Check if already reviewed
    if (isTopicReviewed(subjectId, topicName)) {
      return;
    }

    // Add to reviewed topics
    setReviewedTopics(prev => [...prev, { subjectId, topicName }]);
    
    // Update subject progress
    setSubjectProgress(prev => {
      const subject = { ...prev[subjectId] };
      subject.completed = subject.completed + 1;
      return { ...prev, [subjectId]: subject };
    });
    
    // Add points for reviewing a topic
    addPoints(15);
  };

  // Check if a topic is reviewed
  const isTopicReviewed = (subjectId: string, topicName: string): boolean => {
    return reviewedTopics.some(
      topic => topic.subjectId === subjectId && topic.topicName === topicName
    );
  };

  // Update student information
  const updateStudentInfo = (info: StudentInfo) => {
    setStudentInfo(info);
  };

  // Load progress from localStorage
  useEffect(() => {
    const savedPoints = localStorage.getItem('userPoints');
    const savedBadges = localStorage.getItem('userBadges');
    const savedProgress = localStorage.getItem('subjectProgress');
    const savedMaterials = localStorage.getItem('completedMaterials');
    const savedTopics = localStorage.getItem('reviewedTopics');
    const savedStudentInfo = localStorage.getItem('studentInfo');
    
    if (savedPoints) {
      setPoints(JSON.parse(savedPoints));
    }
    
    if (savedBadges) {
      setBadges(JSON.parse(savedBadges));
    }
    
    if (savedProgress) {
      setSubjectProgress(JSON.parse(savedProgress));
    }
    
    if (savedMaterials) {
      setCompletedMaterials(JSON.parse(savedMaterials));
    }
    
    if (savedTopics) {
      setReviewedTopics(JSON.parse(savedTopics));
    }
    
    if (savedStudentInfo) {
      setStudentInfo(JSON.parse(savedStudentInfo));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('userPoints', JSON.stringify(points));
    localStorage.setItem('userBadges', JSON.stringify(badges));
    localStorage.setItem('subjectProgress', JSON.stringify(subjectProgress));
    localStorage.setItem('completedMaterials', JSON.stringify(completedMaterials));
    localStorage.setItem('reviewedTopics', JSON.stringify(reviewedTopics));
    if (studentInfo) {
      localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
    }
  }, [points, badges, subjectProgress, completedMaterials, reviewedTopics, studentInfo]);

  return (
    <UserProgressContext.Provider
      value={{
        subjects: subjectProgress,
        completedMaterials,
        reviewedTopics,
        markMaterialCompleted,
        isLearningMaterialCompleted,
        markTopicReviewed,
        isTopicReviewed,
        points,
        level,
        badges,
        addPoints,
        resetProgress,
        completeActivity,
        earnBadge,
        studentInfo,
        updateStudentInfo,
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};
