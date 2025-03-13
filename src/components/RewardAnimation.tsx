
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface RewardAnimationProps {
  isVisible: boolean;
  points: number;
  message: string;
  onClose: () => void;
}

const RewardAnimation: React.FC<RewardAnimationProps> = ({
  isVisible,
  points,
  message,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // Auto-close after 3 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-edu-yellow rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-4xl">🎉</span>
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
              <p className="text-gray-600 mb-4">{message}</p>
              
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: [0.5, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-edu-blue/10 rounded-full py-2 px-6 inline-block mb-4"
              >
                <span className="text-edu-blue font-bold">+{points} points</span>
              </motion.div>
              
              <button 
                onClick={onClose}
                className="edu-button w-full"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RewardAnimation;
