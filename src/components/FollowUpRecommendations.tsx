
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useUserProgress } from '../context/UserProgressContext';
import { Book, Brain, Sparkles } from 'lucide-react';

const FollowUpRecommendations = () => {
  const { studentInfo, subjects } = useUserProgress();
  
  if (!studentInfo?.name || !studentInfo?.age) {
    return null;
  }
  
  // Get age group based on student age
  const getAgeGroup = (age: number) => {
    if (age >= 5 && age <= 7) return 'beginner';
    if (age >= 8 && age <= 10) return 'intermediate';
    return 'advanced';
  };
  
  const ageGroup = getAgeGroup(studentInfo.age);
  
  // Calculate weakest subject based on progress
  const weakestSubject = Object.entries(subjects).reduce((lowest, [id, subject]) => {
    const completionRate = subject.completed / subject.total;
    if (!lowest || completionRate < lowest.rate) {
      return { id, name: subject.name, rate: completionRate };
    }
    return lowest;
  }, null as { id: string, name: string, rate: number } | null);
  
  // Suggestions based on age
  const ageSuggestions = {
    beginner: [
      "Try interactive learning games to build foundational skills",
      "Practice counting and basic addition with household items",
      "Read picture books together and discuss the story"
    ],
    intermediate: [
      "Work on multiplication tables through fun challenges",
      "Practice writing short stories about interesting topics",
      "Learn about nature through outdoor exploration and observations"
    ],
    advanced: [
      "Explore online coding courses designed for young learners",
      "Start a project-based learning activity on a topic of interest",
      "Practice critical thinking with logic puzzles and brain teasers"
    ]
  };
  
  // Get appropriate icons based on suggestions
  const getIcon = (index: number) => {
    const icons = [
      <Book className="w-5 h-5 text-edu-blue" key="book" />,
      <Brain className="w-5 h-5 text-edu-purple" key="brain" />,
      <Sparkles className="w-5 h-5 text-edu-yellow" key="sparkles" />
    ];
    return icons[index % icons.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-edu-blue">
            Personalized Learning Plan for {studentInfo.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Based on {studentInfo.name}'s age ({studentInfo.age} years old) and learning progress, 
            we recommend focusing on the following:
          </p>
          
          {weakestSubject && (
            <div className="mt-4 p-3 bg-edu-yellow/10 rounded-lg">
              <h4 className="font-medium text-edu-blue">Focus Area:</h4>
              <p>{weakestSubject.name} - This subject needs some extra attention!</p>
            </div>
          )}
          
          <div className="mt-6">
            <h4 className="font-medium text-edu-blue mb-3">Suggested Activities:</h4>
            <ul className="space-y-2">
              {ageSuggestions[ageGroup].map((suggestion, index) => (
                <li key={index} className="flex items-start gap-3 p-2">
                  <div className="p-2 rounded-full bg-edu-blue/10 shrink-0">
                    {getIcon(index)}
                  </div>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FollowUpRecommendations;
