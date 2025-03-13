
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/MainLayout';
import { useUserProgress } from '../context/UserProgressContext';
import RewardAnimation from '../components/RewardAnimation';
import { Gamepad2 } from 'lucide-react';

const MiniGames = () => {
  const { addPoints } = useUserProgress();
  const [showReward, setShowReward] = useState(false);
  const [rewardPoints, setRewardPoints] = useState(0);
  const [rewardMessage, setRewardMessage] = useState('');
  
  // Simple Math Game state
  const [mathProblem, setMathProblem] = useState<{num1: number; num2: number; operation: '+' | '-' | '×'}>(() => generateMathProblem());
  const [mathAnswer, setMathAnswer] = useState('');
  const [mathResult, setMathResult] = useState<'correct' | 'incorrect' | null>(null);
  
  // Word Scramble Game state
  const words = ['apple', 'banana', 'orange', 'grape', 'mango', 'pineapple', 'strawberry'];
  const [currentWord, setCurrentWord] = useState<string>(() => scrambleWord(words[Math.floor(Math.random() * words.length)]));
  const [originalWord, setOriginalWord] = useState<string>(() => unscrambleWord(currentWord));
  const [wordAnswer, setWordAnswer] = useState('');
  const [wordResult, setWordResult] = useState<'correct' | 'incorrect' | null>(null);
  
  // Generate a random math problem
  function generateMathProblem() {
    const operations: ('+' | '-' | '×')[] = ['+', '-', '×'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2;
    
    if (operation === '+') {
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 20) + 1;
    } else if (operation === '-') {
      num1 = Math.floor(Math.random() * 20) + 10;
      num2 = Math.floor(Math.random() * num1) + 1;
    } else { // multiplication
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
    }
    
    return { num1, num2, operation };
  }
  
  // Calculate the correct answer for the math problem
  function calculateAnswer(problem: {num1: number; num2: number; operation: '+' | '-' | '×'}) {
    switch (problem.operation) {
      case '+':
        return problem.num1 + problem.num2;
      case '-':
        return problem.num1 - problem.num2;
      case '×':
        return problem.num1 * problem.num2;
      default:
        return 0;
    }
  }
  
  // Scramble a word
  function scrambleWord(word: string) {
    const arr = word.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }
  
  // Unscramble a word
  function unscrambleWord(scrambled: string) {
    // Find the original word from our list
    return words.find(word => {
      return word.split('').sort().join('') === scrambled.split('').sort().join('');
    }) || '';
  }
  
  // Check math answer
  function checkMathAnswer() {
    const correctAnswer = calculateAnswer(mathProblem);
    const userAnswer = parseInt(mathAnswer);
    
    if (userAnswer === correctAnswer) {
      setMathResult('correct');
      setRewardPoints(10);
      setRewardMessage('Great job solving the math problem!');
      setShowReward(true);
      addPoints(10);
      
      // Generate a new problem after a delay
      setTimeout(() => {
        setMathProblem(generateMathProblem());
        setMathAnswer('');
        setMathResult(null);
      }, 1500);
    } else {
      setMathResult('incorrect');
      
      // Clear result after a delay
      setTimeout(() => {
        setMathResult(null);
      }, 1500);
    }
  }
  
  // Check word answer
  function checkWordAnswer() {
    if (wordAnswer.toLowerCase() === originalWord.toLowerCase()) {
      setWordResult('correct');
      setRewardPoints(15);
      setRewardMessage('You unscrambled the word correctly!');
      setShowReward(true);
      addPoints(15);
      
      // Generate a new word after a delay
      setTimeout(() => {
        const newOriginalWord = words[Math.floor(Math.random() * words.length)];
        setOriginalWord(newOriginalWord);
        setCurrentWord(scrambleWord(newOriginalWord));
        setWordAnswer('');
        setWordResult(null);
      }, 1500);
    } else {
      setWordResult('incorrect');
      
      // Clear result after a delay
      setTimeout(() => {
        setWordResult(null);
      }, 1500);
    }
  }
  
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-edu-orange/20 mb-4">
          <Gamepad2 className="w-8 h-8 text-edu-orange" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Mini Games
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Have fun while learning with these educational games!
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Math Game */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="edu-card"
        >
          <h2 className="text-2xl font-bold mb-6">Math Challenge</h2>
          <div className="mb-8">
            <p className="text-lg mb-6">Solve the math problem:</p>
            <div className="text-4xl font-bold mb-6">
              {mathProblem.num1} {mathProblem.operation} {mathProblem.num2} = ?
            </div>
            
            <div className="flex space-x-4">
              <input
                type="number"
                value={mathAnswer}
                onChange={(e) => setMathAnswer(e.target.value)}
                className="edu-input text-xl text-center w-24"
                placeholder="?"
              />
              <button
                onClick={checkMathAnswer}
                disabled={!mathAnswer}
                className="edu-button flex-1"
              >
                Check Answer
              </button>
            </div>
            
            {mathResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg ${
                  mathResult === 'correct' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {mathResult === 'correct' 
                  ? 'Correct! Great job!' 
                  : 'Not quite right. Try again!'}
              </motion.div>
            )}
          </div>
          
          <p className="text-sm text-gray-500">
            Solve math problems to earn points and improve your math skills!
          </p>
        </motion.div>
        
        {/* Word Scramble Game */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="edu-card"
        >
          <h2 className="text-2xl font-bold mb-6">Word Scramble</h2>
          <div className="mb-8">
            <p className="text-lg mb-6">Unscramble the word:</p>
            <div className="flex justify-center mb-6">
              {currentWord.split('').map((letter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-12 h-12 flex items-center justify-center bg-edu-purple/10 rounded-lg m-1 text-2xl font-bold"
                >
                  {letter}
                </motion.div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <input
                type="text"
                value={wordAnswer}
                onChange={(e) => setWordAnswer(e.target.value)}
                className="edu-input text-xl w-full"
                placeholder="Your answer"
              />
              <button
                onClick={checkWordAnswer}
                disabled={!wordAnswer}
                className="edu-button flex-shrink-0"
              >
                Check
              </button>
            </div>
            
            {wordResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg ${
                  wordResult === 'correct' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {wordResult === 'correct' 
                  ? 'Correct! You unscrambled the word!' 
                  : 'Not right. Try rearranging the letters differently!'}
              </motion.div>
            )}
          </div>
          
          <p className="text-sm text-gray-500">
            Unscramble words to improve your vocabulary and spelling skills!
          </p>
        </motion.div>
      </div>
      
      <RewardAnimation 
        isVisible={showReward}
        points={rewardPoints}
        message={rewardMessage}
        onClose={() => setShowReward(false)}
      />
    </MainLayout>
  );
};

export default MiniGames;
