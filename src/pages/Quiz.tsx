
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

import MainLayout from '../components/MainLayout';
import QuizQuestion from '../components/QuizQuestion';
import ProgressBar from '../components/ProgressBar';
import RewardAnimation from '../components/RewardAnimation';
import { getQuizById } from '../data/quizData';
import { getSubjectById } from '../data/subjectData';
import { useUserProgress } from '../context/UserProgressContext';

const Quiz = () => {
  const { subjectId, quizId } = useParams<{ subjectId: string; quizId: string }>();
  const navigate = useNavigate();
  const { completeActivity, earnBadge } = useUserProgress();
  
  const [quiz, setQuiz] = useState(getQuizById(quizId || ''));
  const [subject, setSubject] = useState(getSubjectById(subjectId || ''));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showReward, setShowReward] = useState(false);
  
  useEffect(() => {
    // Update data when parameters change
    setQuiz(getQuizById(quizId || ''));
    setSubject(getSubjectById(subjectId || ''));
  }, [subjectId, quizId]);
  
  if (!quiz || !subject) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-2xl font-bold mb-4">Quiz not found</h2>
          <Link to="/" className="edu-button">
            Return Home
          </Link>
        </div>
      </MainLayout>
    );
  }
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  
  const handleAnswer = (isCorrect: boolean) => {
    // Add the answer to our answers array
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    
    // Check if it's a perfect score after answering all questions
    if (newAnswers.length === totalQuestions && 
        newAnswers.every(answer => answer)) {
      // Award perfect score badge
      earnBadge('perfect-score');
    }
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      setQuizCompleted(true);
      
      // Mark activity as completed in user progress
      completeActivity(subject.id, quiz.id);
      
      // Show reward animation
      setShowReward(true);
    }
  };
  
  const correctAnswers = answers.filter(answer => answer).length;
  const score = totalQuestions > 0 
    ? Math.round((correctAnswers / totalQuestions) * 100) 
    : 0;
  
  return (
    <MainLayout>
      {!quizCompleted ? (
        <>
          <div className="mb-6">
            <Link 
              to={`/subject/${subject.id}`} 
              className="inline-flex items-center text-gray-600 hover:text-edu-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Back to {subject.name}</span>
            </Link>
          </div>
          
          <div className="mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-bold mb-2"
            >
              {quiz.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-4"
            >
              {quiz.description}
            </motion.p>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="mb-4 md:mb-0 md:mr-4 w-full md:w-2/3">
                <ProgressBar
                  progress={currentQuestionIndex + 1}
                  total={totalQuestions}
                  label="Quiz Progress"
                />
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                  disabled={currentQuestionIndex === 0 || answers.length <= currentQuestionIndex}
                  className={`p-2 rounded-full ${
                    currentQuestionIndex === 0 || answers.length <= currentQuestionIndex
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-edu-blue/10 text-edu-blue hover:bg-edu-blue/20'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={answers.length <= currentQuestionIndex}
                  className={`p-2 rounded-full ${
                    answers.length <= currentQuestionIndex
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-edu-blue/10 text-edu-blue hover:bg-edu-blue/20'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <QuizQuestion
            question={currentQuestion}
            onAnswer={handleAnswer}
            onNext={handleNext}
            showFeedback={true}
          />
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-edu-card p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Quiz Completed!</h2>
          
          <div className="flex flex-col items-center mb-8">
            <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-4 ${
              score >= 80 
                ? 'bg-green-100' 
                : score >= 50 
                  ? 'bg-yellow-100' 
                  : 'bg-red-100'
            }`}>
              <span className="text-4xl font-bold">{score}%</span>
            </div>
            
            <p className="text-lg mb-2">
              You got <span className="font-bold">{correctAnswers}</span> out of <span className="font-bold">{totalQuestions}</span> questions correct!
            </p>
            
            <p className="text-gray-600">
              {score >= 80 
                ? 'Excellent work! You\'ve mastered this topic.' 
                : score >= 50 
                  ? 'Good job! Keep practicing to improve further.' 
                  : 'Keep practicing! You\'ll get better with more attempts.'}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate(`/subject/${subject.id}`)}
              className="edu-button-secondary"
            >
              Return to Subject
            </button>
            
            <button
              onClick={() => {
                setCurrentQuestionIndex(0);
                setAnswers([]);
                setQuizCompleted(false);
              }}
              className="edu-button"
            >
              Try Again
            </button>
          </div>
        </motion.div>
      )}
      
      <RewardAnimation
        isVisible={showReward}
        points={quiz.questions.length * 10}
        message={`You completed "${quiz.title}"!`}
        onClose={() => setShowReward(false)}
      />
    </MainLayout>
  );
};

export default Quiz;
