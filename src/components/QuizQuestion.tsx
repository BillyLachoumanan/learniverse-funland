
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

export interface QuizQuestionData {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizQuestionProps {
  question: QuizQuestionData;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  showFeedback: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  onNext,
  showFeedback,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Reset states when question changes
  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
    setShowExplanation(false);
  }, [question]);

  const handleOptionSelect = (optionIndex: number) => {
    if (selectedOption !== null || !showFeedback) return; // Prevent changing answer after submission
    
    setSelectedOption(optionIndex);
    const correct = optionIndex === question.correctAnswer;
    setIsCorrect(correct);
    onAnswer(correct);
    
    // Show explanation after a delay
    if (question.explanation) {
      setTimeout(() => setShowExplanation(true), 1000);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-edu-card p-6 md:p-8"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-6">{question.question}</h3>
        
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: selectedOption === null ? 1.02 : 1 }}
              whileTap={{ scale: selectedOption === null ? 0.98 : 1 }}
              onClick={() => handleOptionSelect(index)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedOption === null
                  ? 'border-edu-blue/20 hover:border-edu-blue'
                  : selectedOption === index
                  ? isCorrect
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : index === question.correctAnswer && isCorrect === false
                  ? 'border-green-500 bg-green-50'
                  : 'border-edu-blue/20 opacity-70'
              }`}
              disabled={selectedOption !== null}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedOption !== null && (
                  <>
                    {index === question.correctAnswer && (
                      <Check className="w-5 h-5 text-green-500" />
                    )}
                    {selectedOption === index && index !== question.correctAnswer && (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {showExplanation && question.explanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 bg-edu-blue/10 rounded-xl"
            >
              <h4 className="font-bold text-edu-blue mb-2">Explanation:</h4>
              <p>{question.explanation}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {selectedOption !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex justify-center"
          >
            <button
              onClick={onNext}
              className="edu-button"
            >
              Continue
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default QuizQuestion;
