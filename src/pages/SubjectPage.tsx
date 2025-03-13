
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Book, CheckCircle } from 'lucide-react';

import MainLayout from '../components/MainLayout';
import ProgressBar from '../components/ProgressBar';
import { getSubjectById, getSubjectIcon } from '../data/subjectData';
import { getQuizzesBySubject } from '../data/quizData';
import { useUserProgress } from '../context/UserProgressContext';

const SubjectPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const { subjects } = useUserProgress();
  const [subject, setSubject] = useState(getSubjectById(subjectId || ''));
  const [quizzes, setQuizzes] = useState(getQuizzesBySubject(subjectId || ''));
  
  useEffect(() => {
    // Update data when subjectId changes
    setSubject(getSubjectById(subjectId || ''));
    setQuizzes(getQuizzesBySubject(subjectId || ''));
  }, [subjectId]);
  
  if (!subject) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-2xl font-bold mb-4">Subject not found</h2>
          <Link to="/" className="edu-button">
            Return Home
          </Link>
        </div>
      </MainLayout>
    );
  }
  
  const subjectProgress = subjects[subject.id];
  const Icon = getSubjectIcon(subject.icon);
  
  return (
    <MainLayout>
      <div className="mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-edu-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 rounded-2xl ${subject.bgColor} mb-8`}
      >
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-xl bg-white mr-4">
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1">{subject.name}</h1>
            <p className="text-gray-700">{subject.description}</p>
          </div>
        </div>
        
        <ProgressBar 
          progress={subjectProgress.completed} 
          total={subjectProgress.total} 
          label="Subject Progress" 
        />
      </motion.div>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subject.topics.map((topic, index) => (
            <div 
              key={index} 
              className="edu-card flex items-center p-4"
            >
              <div className="p-2 rounded-lg bg-edu-blue/10 mr-3">
                <Book className="w-5 h-5 text-edu-blue" />
              </div>
              <span className="font-medium">{topic}</span>
            </div>
          ))}
        </div>
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">Quizzes & Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="edu-card"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{quiz.title}</h3>
                <div className={`badge ${
                  quiz.level === 'easy' 
                    ? 'bg-green-100 text-green-800' 
                    : quiz.level === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                }`}>
                  {quiz.level.charAt(0).toUpperCase() + quiz.level.slice(1)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{quiz.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {quiz.questions.length} questions
                </div>
                <Link
                  to={`/quiz/${subject.id}/${quiz.id}`}
                  className="edu-button-secondary text-sm py-2 px-4"
                >
                  Start Quiz
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </MainLayout>
  );
};

export default SubjectPage;
