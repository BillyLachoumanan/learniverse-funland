
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Bookmark, CheckCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useUserProgress } from '../context/UserProgressContext';

interface LearningMaterialProps {
  subjectId: string;
  material: {
    level: 'beginner' | 'intermediate' | 'advanced';
    title: string;
    content: string;
  };
}

const LearningMaterial: React.FC<LearningMaterialProps> = ({ 
  subjectId,
  material 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { markMaterialCompleted, isLearningMaterialCompleted } = useUserProgress();
  const isCompleted = isLearningMaterialCompleted(subjectId, material.title);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  
  const handleMarkCompleted = () => {
    markMaterialCompleted(subjectId, material.title);
  };

  return (
    <motion.div 
      className="w-full edu-card overflow-hidden mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex items-center">
          <div className={`p-2 rounded-lg mr-3 ${
            material.level === 'beginner' 
              ? 'bg-green-100 text-green-600' 
              : material.level === 'intermediate'
                ? 'bg-yellow-100 text-yellow-600'
                : 'bg-red-100 text-red-600'
          }`}>
            <Bookmark className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{material.title}</h3>
            <p className="text-sm text-gray-600 capitalize">{material.level} level</p>
          </div>
        </div>
        
        <div className="flex items-center">
          {isCompleted && (
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
          )}
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>
      
      {isExpanded && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-gray-100 p-4"
        >
          <div className="prose prose-sm md:prose-base max-w-none">
            <ReactMarkdown>
              {material.content}
            </ReactMarkdown>
          </div>
          
          <div className="mt-6 flex justify-end">
            {!isCompleted ? (
              <button
                onClick={handleMarkCompleted}
                className="edu-button-secondary text-sm"
              >
                Mark as Completed
              </button>
            ) : (
              <span className="text-sm text-green-600 flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                Completed
              </span>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LearningMaterial;
