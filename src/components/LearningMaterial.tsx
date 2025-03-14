
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Bookmark, CheckCircle, Book, Youtube } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useUserProgress } from '../context/UserProgressContext';
import { toast } from 'sonner';

interface LearningMaterialProps {
  subjectId: string;
  material: {
    level: 'beginner' | 'intermediate' | 'advanced';
    title: string;
    content: string;
    videoUrl?: string;
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
    toast.success('Learning material completed! Great job!', {
      position: 'top-center',
      duration: 3000,
    });
  };

  // Get the appropriate level color
  const getLevelColor = () => {
    switch(material.level) {
      case 'beginner':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          border: 'border-green-200'
        };
      case 'intermediate':
        return {
          bg: 'bg-yellow-100',
          text: 'text-yellow-600',
          border: 'border-yellow-200'
        };
      case 'advanced':
        return {
          bg: 'bg-red-100',
          text: 'text-red-600',
          border: 'border-red-200'
        };
    }
  };

  const levelColor = getLevelColor();

  // Extract YouTube video ID from URL if present
  const getYoutubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    
    // Match different YouTube URL formats
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[7].length === 11) 
      ? `https://www.youtube.com/embed/${match[7]}?rel=0` 
      : null;
  };
  
  const youtubeEmbedUrl = getYoutubeEmbedUrl(material.videoUrl);

  return (
    <motion.div 
      className={`w-full edu-card overflow-hidden mb-4 border ${isExpanded ? levelColor.border : 'border-transparent'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className={`flex items-center justify-between p-4 cursor-pointer ${isExpanded ? `${levelColor.bg} bg-opacity-30` : ''}`}
        onClick={handleToggle}
      >
        <div className="flex items-center">
          <div className={`p-2 rounded-lg mr-3 ${levelColor.bg} ${levelColor.text}`}>
            {isExpanded ? <Book className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="font-bold text-lg">{material.title}</h3>
            <p className="text-sm text-gray-600 capitalize">{material.level} level</p>
          </div>
        </div>
        
        <div className="flex items-center">
          {material.videoUrl && (
            <Youtube className="w-5 h-5 text-red-500 mr-2" />
          )}
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
          <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
            <div className="react-markdown">
              <ReactMarkdown>
                {material.content}
              </ReactMarkdown>
            </div>
          </div>
          
          {youtubeEmbedUrl && (
            <div className="mt-6 mb-6">
              <h4 className="text-lg font-medium mb-2">Helpful Video</h4>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={youtubeEmbedUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  title={`Video about ${material.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          
          <div className="mt-6 flex justify-end">
            {!isCompleted ? (
              <button
                onClick={handleMarkCompleted}
                className="edu-button-secondary text-sm hover:scale-105 transition-transform"
              >
                Mark as Completed
              </button>
            ) : (
              <span className="text-sm text-green-600 flex items-center bg-green-50 py-2 px-3 rounded-md">
                <CheckCircle className="w-4 h-4 mr-1" />
                Well done! You've completed this section.
              </span>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LearningMaterial;
