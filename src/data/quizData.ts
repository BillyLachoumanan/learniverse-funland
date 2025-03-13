
import { QuizQuestionData } from '../components/QuizQuestion';

export interface Quiz {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  level: 'easy' | 'medium' | 'hard';
  questions: QuizQuestionData[];
}

export const quizzes: Quiz[] = [
  {
    id: 'math-basic-operations',
    subjectId: 'mathematics',
    title: 'Basic Math Operations',
    description: 'Practice addition, subtraction, multiplication, and division',
    level: 'easy',
    questions: [
      {
        id: 'math1',
        question: 'What is 5 + 7?',
        options: ['11', '12', '13', '14'],
        correctAnswer: 1,
        explanation: '5 + 7 = 12. Count 7 steps from 5: 6, 7, 8, 9, 10, 11, 12.'
      },
      {
        id: 'math2',
        question: 'What is 15 - 6?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 2,
        explanation: '15 - 6 = 9. Count 6 steps backward from 15: 14, 13, 12, 11, 10, 9.'
      },
      {
        id: 'math3',
        question: 'What is 4 × 3?',
        options: ['7', '10', '12', '15'],
        correctAnswer: 2,
        explanation: '4 × 3 = 12. This means 4 groups of 3: 3 + 3 + 3 + 3 = 12.'
      },
      {
        id: 'math4',
        question: 'What is 20 ÷ 5?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1,
        explanation: '20 ÷ 5 = 4. This means we can make 4 groups of 5 from 20: 5 + 5 + 5 + 5 = 20.'
      },
      {
        id: 'math5',
        question: 'What is the value of 9 + 8 - 5?',
        options: ['10', '11', '12', '13'],
        correctAnswer: 2,
        explanation: '9 + 8 - 5 = 17 - 5 = 12. First add 9 and 8 to get 17, then subtract 5.'
      }
    ]
  },
  {
    id: 'english-basic-vocabulary',
    subjectId: 'english',
    title: 'Basic English Vocabulary',
    description: 'Learn and practice basic English words',
    level: 'easy',
    questions: [
      {
        id: 'eng1',
        question: 'Which word means "a large body of water"?',
        options: ['Mountain', 'Ocean', 'Desert', 'Forest'],
        correctAnswer: 1,
        explanation: 'An ocean is a large body of water that covers most of the Earth.'
      },
      {
        id: 'eng2',
        question: 'Which word is the opposite of "cold"?',
        options: ['Wet', 'Dry', 'Hot', 'Big'],
        correctAnswer: 2,
        explanation: 'Hot is the opposite of cold. It describes high temperature.'
      },
      {
        id: 'eng3',
        question: 'What do you call a person who teaches in a school?',
        options: ['Doctor', 'Teacher', 'Pilot', 'Farmer'],
        correctAnswer: 1,
        explanation: 'A teacher is a person who teaches in a school.'
      },
      {
        id: 'eng4',
        question: 'Which word describes something that happened in the past?',
        options: ['Yesterday', 'Tomorrow', 'Next week', 'Soon'],
        correctAnswer: 0,
        explanation: 'Yesterday refers to the day before today, which is in the past.'
      },
      {
        id: 'eng5',
        question: 'What do you call the meal we eat in the morning?',
        options: ['Lunch', 'Dinner', 'Breakfast', 'Supper'],
        correctAnswer: 2,
        explanation: 'Breakfast is the first meal of the day, eaten in the morning.'
      }
    ]
  },
  {
    id: 'french-basic-vocabulary',
    subjectId: 'french',
    title: 'Basic French Vocabulary',
    description: 'Learn and practice basic French words',
    level: 'easy',
    questions: [
      {
        id: 'fr1',
        question: 'How do you say "hello" in French?',
        options: ['Au revoir', 'Bonjour', 'Merci', 'S\'il vous plaît'],
        correctAnswer: 1,
        explanation: '"Bonjour" means "hello" or "good day" in French.'
      },
      {
        id: 'fr2',
        question: 'What is the French word for "water"?',
        options: ['Pain', 'Lait', 'Eau', 'Jus'],
        correctAnswer: 2,
        explanation: '"Eau" is the French word for "water".'
      },
      {
        id: 'fr3',
        question: 'How do you count to three in French?',
        options: ['Un, deux, trois', 'Un, deux, quatre', 'Un, trois, quatre', 'Deux, trois, quatre'],
        correctAnswer: 0,
        explanation: 'The numbers 1-3 in French are: un (1), deux (2), trois (3).'
      },
      {
        id: 'fr4',
        question: 'What does "merci" mean in English?',
        options: ['Hello', 'Goodbye', 'Please', 'Thank you'],
        correctAnswer: 3,
        explanation: '"Merci" means "thank you" in English.'
      },
      {
        id: 'fr5',
        question: 'What is the French word for "school"?',
        options: ['Maison', 'École', 'Hôpital', 'Restaurant'],
        correctAnswer: 1,
        explanation: '"École" is the French word for "school".'
      }
    ]
  },
  {
    id: 'science-living-things',
    subjectId: 'science',
    title: 'Living Things',
    description: 'Learn about plants, animals, and their characteristics',
    level: 'easy',
    questions: [
      {
        id: 'sci1',
        question: 'Which is NOT a living thing?',
        options: ['Tree', 'Rock', 'Fish', 'Bird'],
        correctAnswer: 1,
        explanation: 'Rocks are non-living things. They do not grow, reproduce, or need food and water.'
      },
      {
        id: 'sci2',
        question: 'What do plants need to make their food?',
        options: ['Water only', 'Sunlight only', 'Sunlight and water', 'Nothing, they eat soil'],
        correctAnswer: 2,
        explanation: 'Plants need both sunlight and water to make their food through photosynthesis.'
      },
      {
        id: 'sci3',
        question: 'Which animal lays eggs?',
        options: ['Dog', 'Cat', 'Chicken', 'Cow'],
        correctAnswer: 2,
        explanation: 'Chickens are birds, and they lay eggs. Dogs, cats, and cows give birth to live young.'
      },
      {
        id: 'sci4',
        question: 'How do fish breathe?',
        options: ['Through lungs', 'Through gills', 'Through skin', 'They don\'t breathe'],
        correctAnswer: 1,
        explanation: 'Fish breathe through gills, which extract oxygen from water.'
      },
      {
        id: 'sci5',
        question: 'What is the life cycle stage when a caterpillar transforms?',
        options: ['Egg', 'Larva', 'Pupa', 'Adult'],
        correctAnswer: 2,
        explanation: 'The pupa stage is when a caterpillar transforms into a butterfly or moth.'
      }
    ]
  }
];

export const getQuizzesBySubject = (subjectId: string): Quiz[] => {
  return quizzes.filter(quiz => quiz.subjectId === subjectId);
};

export const getQuizById = (quizId: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === quizId);
};
