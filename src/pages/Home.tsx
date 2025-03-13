
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/MainLayout';
import SubjectCard from '../components/SubjectCard';
import { subjects, getSubjectIcon } from '../data/subjectData';
import { useUserProgress } from '../context/UserProgressContext';
import BadgeItem from '../components/BadgeItem';

const Home = () => {
  const { points, level, badges } = useUserProgress();
  const [showGreeting, setShowGreeting] = useState(true);
  
  // Get earned badges only
  const earnedBadges = badges.filter(badge => badge.earned);

  // Hide greeting after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {showGreeting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mb-4 py-2 px-4 bg-edu-yellow/20 rounded-full"
            >
              <span className="text-sm font-medium">Welcome back!</span>
            </motion.div>
          )}
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Learn with fun in Mauritius
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mb-6">
            Explore subjects, complete quizzes, and earn rewards on your learning journey
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center space-x-2 mb-6"
          >
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-edu-blue/20">
              <span className="font-medium">Level {level}</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-edu-yellow/20">
              <span className="font-medium">{points} Points</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-edu-purple/20">
              <span className="font-medium">{earnedBadges.length} Badges</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Subjects Grid */}
      <section className="mb-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold mb-6"
        >
          Explore Subjects
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => {
            const Icon = getSubjectIcon(subject.icon);
            
            return (
              <SubjectCard
                key={subject.id}
                id={subject.id}
                name={subject.name}
                icon={<Icon className="w-6 h-6" />}
                color={subject.bgColor}
                delay={index}
              />
            );
          })}
        </div>
      </section>
      
      {/* Recently Earned Badges */}
      {earnedBadges.length > 0 && (
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-6"
          >
            Recent Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {earnedBadges.slice(0, 3).map(badge => (
              <BadgeItem
                key={badge.id}
                id={badge.id}
                name={badge.name}
                icon={badge.icon}
                description={badge.description}
                earned={badge.earned}
                earnedAt={badge.earnedAt}
              />
            ))}
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default Home;
