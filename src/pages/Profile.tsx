
import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/MainLayout';
import { useUserProgress } from '../context/UserProgressContext';
import BadgeItem from '../components/BadgeItem';
import ProgressBar from '../components/ProgressBar';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { points, level, badges, subjects, resetProgress } = useUserProgress();
  const navigate = useNavigate();
  
  // Calculate total progress across all subjects
  const totalCompleted = Object.values(subjects).reduce((sum, subject) => sum + subject.completed, 0);
  const totalActivities = Object.values(subjects).reduce((sum, subject) => sum + subject.total, 0);
  
  // Filter badges by earned status
  const earnedBadges = badges.filter(badge => badge.earned);
  const unearnedBadges = badges.filter(badge => !badge.earned);

  return (
    <MainLayout>
      <div className="mb-6 flex items-center">
        <Button 
          variant="ghost" 
          className="mr-2" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold text-edu-blue">My Profile</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column - Stats */}
        <div className="md:col-span-4 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-edu-card p-6"
          >
            <h2 className="text-xl font-bold mb-4 text-edu-blue">My Progress</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Level</span>
                <span className="text-2xl font-bold text-edu-purple">{level}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Points</span>
                <span className="text-xl font-bold text-edu-blue">{points}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Badges</span>
                <span className="text-xl font-bold text-edu-yellow">{earnedBadges.length}/{badges.length}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <ProgressBar 
                progress={totalCompleted} 
                total={totalActivities} 
                label="Overall Progress" 
                color="bg-edu-gradient"
              />
            </div>
            
            <div className="space-y-3">
              {Object.values(subjects).map((subject) => (
                <ProgressBar 
                  key={subject.id}
                  progress={subject.completed} 
                  total={subject.total} 
                  label={subject.name} 
                  height="h-2"
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-edu-card p-6"
          >
            <h2 className="text-xl font-bold mb-4 text-edu-blue">Settings</h2>
            <Button 
              variant="destructive" 
              className="w-full"
              onClick={() => {
                if (window.confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
                  resetProgress();
                }
              }}
            >
              Reset Progress
            </Button>
          </motion.div>
        </div>
        
        {/* Right Column - Badges */}
        <div className="md:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-edu-card p-6"
          >
            <h2 className="text-xl font-bold mb-4 text-edu-blue">My Badges</h2>
            
            {earnedBadges.length > 0 && (
              <>
                <h3 className="font-medium text-gray-600 mb-3">Earned Badges</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {earnedBadges.map((badge) => (
                    <BadgeItem key={badge.id} {...badge} />
                  ))}
                </div>
              </>
            )}
            
            {unearnedBadges.length > 0 && (
              <>
                <h3 className="font-medium text-gray-600 mb-3">Badges to Earn</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {unearnedBadges.map((badge) => (
                    <BadgeItem key={badge.id} {...badge} />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
