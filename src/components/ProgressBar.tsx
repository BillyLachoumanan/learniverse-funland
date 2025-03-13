
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  total: number;
  label?: string;
  showPercentage?: boolean;
  height?: string;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  total,
  label,
  showPercentage = true,
  height = 'h-3',
  color = 'bg-edu-blue',
}) => {
  const percentage = Math.round((progress / total) * 100);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-600">{label}</span>
          {showPercentage && (
            <span className="text-sm font-medium text-gray-600">
              {progress}/{total} ({percentage}%)
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${height}`}>
        <motion.div
          className={`${height} ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
