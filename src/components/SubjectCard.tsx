
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUserProgress } from '../context/UserProgressContext';

interface SubjectCardProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ id, name, icon, color, delay = 0 }) => {
  const { subjects } = useUserProgress();
  const subject = subjects[id];
  
  // Calculate progress percentage
  const progressPercentage = subject ? Math.round((subject.completed / subject.total) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <Link to={`/subject/${id}`} className="block">
        <div className={`subject-card overflow-hidden ${color}`}>
          <div className="flex items-center justify-between p-5">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-2">{name}</h3>
              <div className="flex items-center mt-1">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-edu-blue"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-600 font-medium">
                  {progressPercentage}%
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-xl ${color} text-white`}>
              {icon}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SubjectCard;
