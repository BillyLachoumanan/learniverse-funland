
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
    topics: ['Numbers', 'Addition & Subtraction', 'Multiplication & Division', 'Shapes', 'Measurements']
  },
  {
    id: 'english',
    name: 'English',
    description: 'Develop reading, writing, grammar, and vocabulary skills',
    icon: 'BookOpen',
    bgColor: 'bg-edu-green/10',
    topics: ['Alphabet', 'Phonics', 'Reading', 'Grammar', 'Vocabulary']
  },
  {
    id: 'french',
    name: 'French',
    description: 'Learn basic French vocabulary, phrases, and grammar',
    icon: 'Languages',
    bgColor: 'bg-edu-purple/10',
    topics: ['Greetings', 'Numbers', 'Colors', 'Family', 'School']
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Explore living things, materials, and the natural world',
    icon: 'Atom',
    bgColor: 'bg-edu-orange/10',
    topics: ['Living Things', 'Materials', 'Weather', 'Human Body', 'Environmental Science']
  },
  {
    id: 'history',
    name: 'History',
    description: 'Discover Mauritius\' past, heritage, and important events',
    icon: 'Clock',
    bgColor: 'bg-edu-yellow/10',
    topics: ['Early Settlements', 'Colonial Period', 'Independence', 'Cultural Heritage', 'Famous Figures']
  },
  {
    id: 'geography',
    name: 'Geography',
    description: 'Learn about Mauritius\' landscape, climate, and resources',
    icon: 'Globe',
    bgColor: 'bg-edu-red/10',
    topics: ['Islands of Mauritius', 'Landforms', 'Climate', 'Natural Resources', 'Tourism']
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
