
import { BookOpen, Calculator, Atom, Languages, Globe, Clock } from 'lucide-react';

export interface SubjectData {
  id: string;
  name: string;
  description: string;
  icon: string;
  bgColor: string;
  topics: string[];
}

export const subjects: SubjectData[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Learn numbers, basic operations, shapes, and problem-solving',
    icon: 'Calculator',
    bgColor: 'bg-edu-blue/10',
    topics: ['Numbers & Counting', 'Addition & Subtraction', 'Multiplication & Division', 'Geometry & Shapes', 'Measurements', 'Fractions']
  },
  {
    id: 'english',
    name: 'English',
    description: 'Develop reading, writing, grammar, and vocabulary skills',
    icon: 'BookOpen',
    bgColor: 'bg-edu-green/10',
    topics: ['Alphabet & Phonics', 'Reading Comprehension', 'Grammar Rules', 'Vocabulary Building', 'Writing Skills', 'Spelling']
  },
  {
    id: 'french',
    name: 'French',
    description: 'Learn basic French vocabulary, phrases, and grammar',
    icon: 'Languages',
    bgColor: 'bg-edu-purple/10',
    topics: ['Basic Greetings', 'Numbers & Colors', 'Family & Friends', 'Food & Dining', 'School Vocabulary', 'Simple Conversations']
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Explore living things, materials, and the natural world',
    icon: 'Atom',
    bgColor: 'bg-edu-orange/10',
    topics: ['Plants & Animals', 'Human Body', 'Materials & Properties', 'Weather & Seasons', 'Environmental Science', 'Simple Experiments']
  },
  {
    id: 'history',
    name: 'History',
    description: 'Discover Mauritius\' past, heritage, and important events',
    icon: 'Clock',
    bgColor: 'bg-edu-yellow/10',
    topics: ['Early Settlements', 'Dutch & French Colonization', 'British Colonial Period', 'Path to Independence', 'Modern Mauritius', 'Cultural Heritage']
  },
  {
    id: 'geography',
    name: 'Geography',
    description: 'Learn about Mauritius\' landscape, climate, and resources',
    icon: 'Globe',
    bgColor: 'bg-edu-red/10',
    topics: ['Islands of Mauritius', 'Mountains & Landscapes', 'Beaches & Lagoons', 'Climate & Weather', 'Natural Resources', 'Tourism & Economy']
  }
];

export const getSubjectById = (id: string): SubjectData | undefined => {
  return subjects.find(subject => subject.id === id);
};

export const getSubjectIcon = (iconName: string) => {
  switch(iconName) {
    case 'Calculator':
      return Calculator;
    case 'BookOpen':
      return BookOpen;
    case 'Languages':
      return Languages;
    case 'Atom':
      return Atom;
    case 'Clock':
      return Clock;
    case 'Globe':
      return Globe;
    default:
      return BookOpen;
  }
};
