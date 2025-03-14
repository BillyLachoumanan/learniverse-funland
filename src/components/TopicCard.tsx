
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';
import { toast } from 'sonner';

interface TopicExplanation {
  title: string;
  content: string;
  videoUrl?: string;
}

interface TopicCardProps {
  subjectId: string;
  topic: string;
  explanation?: TopicExplanation;
}

const TopicCard: React.FC<TopicCardProps> = ({ 
  subjectId,
  topic,
  explanation 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { markTopicReviewed, isTopicReviewed } = useUserProgress();
  const isCompleted = isTopicReviewed(subjectId, topic);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  
  const handleMarkReviewed = () => {
    markTopicReviewed(subjectId, topic);
    toast.success('Topic reviewed! Keep learning!', {
      position: 'top-center',
      duration: 3000,
    });
  };

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
  
  const youtubeEmbedUrl = explanation?.videoUrl ? getYoutubeEmbedUrl(explanation.videoUrl) : null;

  // Don't render the card if there's no explanation
  if (!explanation) {
    return null;
  }

  return (
    <motion.div 
      className="w-full edu-card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div 
        className={`flex items-center justify-between p-4 cursor-pointer ${isExpanded ? 'bg-edu-blue/10' : ''}`}
        onClick={handleToggle}
      >
        <div className="flex items-center">
          <div className="p-2 rounded-lg bg-edu-blue/10 mr-3">
            <Book className="w-5 h-5 text-edu-blue" />
          </div>
          <span className="font-medium">{topic}</span>
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
      
      {isExpanded && explanation && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-gray-100 p-4"
        >
          <h3 className="text-xl font-bold mb-3">{explanation.title}</h3>
          <div className="prose prose-sm md:prose-base max-w-none mb-4">
            {explanation.content}
          </div>
          
          {youtubeEmbedUrl && (
            <div className="mt-4 mb-6">
              <h4 className="text-lg font-medium mb-2">Helpful Video</h4>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={youtubeEmbedUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  title={`Video about ${topic}`}
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
                onClick={handleMarkReviewed}
                className="edu-button-secondary text-sm hover:scale-105 transition-transform"
              >
                Mark as Reviewed
              </button>
            ) : (
              <span className="text-sm text-green-600 flex items-center bg-green-50 py-2 px-3 rounded-md">
                <CheckCircle className="w-4 h-4 mr-1" />
                Great job reviewing this topic!
              </span>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TopicCard;
