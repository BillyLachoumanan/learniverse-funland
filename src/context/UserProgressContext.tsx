
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define types for our context
type Subject = {
  id: string;
  name: string;
  completed: number;
  total: number;
};

type Badge = {
  id: string;
  name: string;
  icon: string;
  description: string;
  earned: boolean;
  earnedAt?: Date;
};

type UserProgressContextType = {
  points: number;
  level: number;
  badges: Badge[];
  subjects: Record<string, Subject>;
  addPoints: (amount: number) => void;
  completeActivity: (subjectId: string, activityId: string) => void;
  earnBadge: (badgeId: string) => void;
  resetProgress: () => void;
};

// Initial badges list
const initialBadges: Badge[] = [
  {
    id: 'first-login',
    name: 'First Day',
    icon: 'star',
    description: 'You logged in for the first time!',
    earned: false,
  },
  {
    id: 'math-whiz',
    name: 'Math Whiz',
    icon: 'trophy',
    description: 'Complete 5 math activities',
    earned: false,
  },
  {
    id: 'language-lover',
    name: 'Language Lover',
    icon: 'book',
    description: 'Complete 5 language activities',
    earned: false,
  },
  {
    id: 'science-explorer',
    name: 'Science Explorer',
    icon: 'flask',
    description: 'Complete 5 science activities',
    earned: false,
  },
  {
    id: 'perfect-score',
    name: 'Perfect Score',
    icon: 'check-circle',
    description: 'Get 100% on any quiz',
    earned: false,
  },
];

// Initial subjects
const initialSubjects: Record<string, Subject> = {
  'mathematics': {
    id: 'mathematics',
    name: 'Mathematics',
    completed: 0,
    total: 15,
  },
  'english': {
    id: 'english',
    name: 'English',
    completed: 0,
    total: 12,
  },
  'french': {
    id: 'french',
    name: 'French',
    completed: 0,
    total: 12,
  },
  'science': {
    id: 'science',
    name: 'Science',
    completed: 0,
    total: 10,
  },
  'history': {
    id: 'history',
    name: 'History',
    completed: 0,
    total: 8,
  },
  'geography': {
    id: 'geography',
    name: 'Geography',
    completed: 0,
    total: 8,
  },
};

// Calculate level from points
const calculateLevel = (points: number): number => {
  return Math.floor(points / 100) + 1;
};

// Create context
const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage or use defaults
  const [points, setPoints] = useState<number>(() => {
    const savedPoints = localStorage.getItem('user-points');
    return savedPoints ? parseInt(savedPoints, 10) : 0;
  });
  
  const [level, setLevel] = useState<number>(() => calculateLevel(points));
  
  const [badges, setBadges] = useState<Badge[]>(() => {
    const savedBadges = localStorage.getItem('user-badges');
    return savedBadges ? JSON.parse(savedBadges) : initialBadges;
  });
  
  const [subjects, setSubjects] = useState<Record<string, Subject>>(() => {
    const savedSubjects = localStorage.getItem('user-subjects');
    return savedSubjects ? JSON.parse(savedSubjects) : initialSubjects;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('user-points', points.toString());
    localStorage.setItem('user-badges', JSON.stringify(badges));
    localStorage.setItem('user-subjects', JSON.stringify(subjects));
    
    // Update level whenever points change
    setLevel(calculateLevel(points));
  }, [points, badges, subjects]);

  // Award first-login badge on initial load
  useEffect(() => {
    const firstLoginBadge = badges.find(badge => badge.id === 'first-login');
    if (firstLoginBadge && !firstLoginBadge.earned) {
      earnBadge('first-login');
    }
  }, []);

  // Add points and check for level up
  const addPoints = (amount: number) => {
    const newPoints = points + amount;
    setPoints(newPoints);
    
    // Check if leveled up
    const newLevel = calculateLevel(newPoints);
    if (newLevel > level) {
      // Show level up notification (to be implemented)
      console.log(`Leveled up to ${newLevel}!`);
    }
  };

  // Mark an activity as completed
  const completeActivity = (subjectId: string, activityId: string) => {
    if (subjects[subjectId]) {
      const updatedSubject = {
        ...subjects[subjectId],
        completed: subjects[subjectId].completed + 1
      };
      
      setSubjects({
        ...subjects,
        [subjectId]: updatedSubject
      });
      
      // Add points for completing an activity
      addPoints(10);
      
      // Check for badge conditions
      checkBadgeConditions(subjectId);
    }
  };

  // Earn a badge
  const earnBadge = (badgeId: string) => {
    setBadges(prevBadges => 
      prevBadges.map(badge => 
        badge.id === badgeId 
          ? { ...badge, earned: true, earnedAt: new Date() } 
          : badge
      )
    );
    
    // Add points for earning a badge
    addPoints(50);
  };

  // Check if any badge conditions are met
  const checkBadgeConditions = (subjectId: string) => {
    // Check subject-specific badges
    if (subjectId === 'mathematics' && subjects['mathematics'].completed >= 5) {
      const mathWhizBadge = badges.find(badge => badge.id === 'math-whiz');
      if (mathWhizBadge && !mathWhizBadge.earned) {
        earnBadge('math-whiz');
      }
    }
    
    if ((subjectId === 'english' || subjectId === 'french') && 
        (subjects['english'].completed + subjects['french'].completed >= 5)) {
      const languageBadge = badges.find(badge => badge.id === 'language-lover');
      if (languageBadge && !languageBadge.earned) {
        earnBadge('language-lover');
      }
    }
    
    if (subjectId === 'science' && subjects['science'].completed >= 5) {
      const scienceBadge = badges.find(badge => badge.id === 'science-explorer');
      if (scienceBadge && !scienceBadge.earned) {
        earnBadge('science-explorer');
      }
    }
  };

  // Reset all progress (for testing)
  const resetProgress = () => {
    setPoints(0);
    setBadges(initialBadges);
    setSubjects(initialSubjects);
  };

  return (
    <UserProgressContext.Provider 
      value={{ 
        points, 
        level, 
        badges, 
        subjects, 
        addPoints, 
        completeActivity, 
        earnBadge,
        resetProgress
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};

// Custom hook for using the context
export const useUserProgress = () => {
  const context = useContext(UserProgressContext);
  if (context === undefined) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
};
