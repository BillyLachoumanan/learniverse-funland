
import React, { createContext, useContext, useState, useEffect } from 'react';
import { subjects } from '../data/subjectData';

// Define progress for each subject
export interface SubjectProgress {
  completed: number;
  total: number;
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
});

// Hook to use the user progress context
export const useUserProgress = () => useContext(UserProgressContext);

// Provider component
export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize subject progress
  const [subjectProgress, setSubjectProgress] = useState<Record<string, SubjectProgress>>(() => {
    const initialProgress: Record<string, SubjectProgress> = {};
    subjects.forEach(subject => {
      initialProgress[subject.id] = {
        completed: 0,
        total: subject.learningMaterials.length + subject.topics.length,
      };
    });
    return initialProgress;
  });

  // Track completed learning materials
  const [completedMaterials, setCompletedMaterials] = useState<{ subjectId: string; materialTitle: string }[]>([]);
  
  // Track reviewed topics
  const [reviewedTopics, setReviewedTopics] = useState<{ subjectId: string; topicName: string }[]>([]);

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
  };

  // Check if a topic is reviewed
  const isTopicReviewed = (subjectId: string, topicName: string): boolean => {
    return reviewedTopics.some(
      topic => topic.subjectId === subjectId && topic.topicName === topicName
    );
  };

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('subjectProgress');
    const savedMaterials = localStorage.getItem('completedMaterials');
    const savedTopics = localStorage.getItem('reviewedTopics');
    
    if (savedProgress) {
      setSubjectProgress(JSON.parse(savedProgress));
    }
    
    if (savedMaterials) {
      setCompletedMaterials(JSON.parse(savedMaterials));
    }
    
    if (savedTopics) {
      setReviewedTopics(JSON.parse(savedTopics));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('subjectProgress', JSON.stringify(subjectProgress));
    localStorage.setItem('completedMaterials', JSON.stringify(completedMaterials));
    localStorage.setItem('reviewedTopics', JSON.stringify(reviewedTopics));
  }, [subjectProgress, completedMaterials, reviewedTopics]);

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
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};
