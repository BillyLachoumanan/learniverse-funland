
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Book, CheckCircle, UserRound, GraduationCap, Bookmark } from 'lucide-react';

import MainLayout from '../components/MainLayout';
import ProgressBar from '../components/ProgressBar';
import LearningMaterial from '../components/LearningMaterial';
import { getSubjectById, getSubjectIcon } from '../data/subjectData';
import { getQuizzesBySubject } from '../data/quizData';
import { useUserProgress } from '../context/UserProgressContext';

const SubjectPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const { subjects, completedMaterials } = useUserProgress();
  const [subject, setSubject] = useState(getSubjectById(subjectId || ''));
  const [quizzes, setQuizzes] = useState(getQuizzesBySubject(subjectId || ''));
  const [selectedAgeLevel, setSelectedAgeLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [showSection, setShowSection] = useState<'materials' | 'quizzes'>('materials');
  
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
  
  // Filter learning materials based on selected age level
  const filteredMaterials = subject.learningMaterials
    ? subject.learningMaterials.filter(material => material.level === selectedAgeLevel)
    : [];
  
  // Count completed materials for the current subject
  const completedMaterialsCount = completedMaterials.filter(
    material => material.subjectId === subject.id
  ).length;
  
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
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Choose Your Age Level</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {subject.ageLevels.map((ageLevel) => (
            <div 
              key={ageLevel.level}
              onClick={() => setSelectedAgeLevel(ageLevel.level)}
              className={`edu-card p-4 cursor-pointer transition-all ${
                selectedAgeLevel === ageLevel.level 
                  ? 'border-2 border-edu-blue shadow-lg transform -translate-y-1' 
                  : 'hover:shadow-md'
              }`}
            >
              <div className="flex items-center mb-2">
                <div className={`p-2 rounded-lg ${
                  ageLevel.level === 'beginner' 
                    ? 'bg-green-100 text-green-600' 
                    : ageLevel.level === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-red-100 text-red-600'
                } mr-3`}>
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg capitalize">{ageLevel.level}</span>
                <span className="ml-auto text-sm bg-gray-100 px-2 py-1 rounded-full">Ages {ageLevel.ageRange}</span>
              </div>
              <p className="text-gray-600 text-sm">{ageLevel.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Topics</h2>
        {subject.topics && subject.topics.length > 0 ? (
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
        ) : (
          <div className="edu-card p-6 text-center">
            <p className="text-gray-600">No topics available for this subject yet.</p>
          </div>
        )}
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {selectedAgeLevel.charAt(0).toUpperCase() + selectedAgeLevel.slice(1)} Level
          </h2>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                showSection === 'materials' 
                  ? 'bg-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setShowSection('materials')}
            >
              Learning Materials
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                showSection === 'quizzes' 
                  ? 'bg-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setShowSection('quizzes')}
            >
              Quizzes
            </button>
          </div>
        </div>
        
        {showSection === 'materials' ? (
          <>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md mb-6">
              <p className="text-blue-700">
                Complete the learning materials before taking the quizzes to enhance your understanding. 
                Each completed material gives you points!
              </p>
            </div>
            
            {filteredMaterials.length > 0 ? (
              <div className="space-y-4">
                {filteredMaterials.map((material, index) => (
                  <LearningMaterial 
                    key={index} 
                    subjectId={subject.id} 
                    material={material} 
                  />
                ))}
              </div>
            ) : (
              <div className="edu-card p-6 text-center">
                <p className="text-gray-600">No learning materials available for this level yet. Check back soon!</p>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-md mb-6">
              <p className="text-green-700">
                Now that you've learned the concepts, test your knowledge with these quizzes.
                Successfully completing quizzes earns you points and badges!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quizzes
                .filter(quiz => {
                  // Filter quizzes based on the selected age level
                  if (selectedAgeLevel === 'beginner' && quiz.level === 'easy') return true;
                  if (selectedAgeLevel === 'intermediate' && quiz.level === 'medium') return true;
                  if (selectedAgeLevel === 'advanced' && quiz.level === 'hard') return true;
                  return false;
                })
                .map((quiz, index) => (
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
                
              {quizzes.filter(quiz => {
                if (selectedAgeLevel === 'beginner' && quiz.level === 'easy') return true;
                if (selectedAgeLevel === 'intermediate' && quiz.level === 'medium') return true;
                if (selectedAgeLevel === 'advanced' && quiz.level === 'hard') return true;
                return false;
              }).length === 0 && (
                <div className="col-span-full edu-card p-6 text-center">
                  <p className="text-gray-600">No quizzes available for this level yet. Check back soon!</p>
                </div>
              )}
            </div>
          </>
        )}
      </motion.section>
    </MainLayout>
  );
};

export default SubjectPage;
