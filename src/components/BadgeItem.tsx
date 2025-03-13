
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Trophy, BookOpen, Flask, CheckCircle } from 'lucide-react';

interface BadgeItemProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  earned: boolean;
  earnedAt?: Date;
}

const BadgeItem: React.FC<BadgeItemProps> = ({ 
  id, 
  name, 
  icon, 
  description, 
  earned, 
  earnedAt 
}) => {
  // Get the appropriate icon
  const renderIcon = () => {
    switch (icon) {
      case 'star':
        return <Star className="w-6 h-6" />;
      case 'trophy':
        return <Trophy className="w-6 h-6" />;
      case 'book':
        return <BookOpen className="w-6 h-6" />;
      case 'flask':
        return <Flask className="w-6 h-6" />;
      case 'check-circle':
        return <CheckCircle className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`relative p-4 rounded-xl ${
        earned 
          ? 'bg-white shadow-edu-card border border-edu-yellow/50' 
          : 'bg-gray-100 opacity-70'
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className={`p-3 rounded-full ${
          earned ? 'bg-edu-yellow text-white' : 'bg-gray-200 text-gray-400'
        }`}>
          {renderIcon()}
        </div>
        <div>
          <div className="flex items-center">
            <h3 className="font-bold">{name}</h3>
            {earned && (
              <div className="ml-2 bg-green-100 rounded-full p-1">
                <Check className="w-3 h-3 text-green-600" />
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          {earned && earnedAt && (
            <p className="text-xs text-gray-400 mt-2">
              Earned on {new Date(earnedAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BadgeItem;
