
import { BookOpen, Calculator, Atom, Languages, Globe, Clock } from 'lucide-react';

export interface SubjectData {
  id: string;
  name: string;
  description: string;
  icon: string;
  bgColor: string;
  topics: string[];
  ageLevels: {
    level: 'beginner' | 'intermediate' | 'advanced';
    ageRange: string;
    description: string;
  }[];
}

export const subjects: SubjectData[] = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Learn numbers, basic operations, shapes, and problem-solving',
    icon: 'Calculator',
    bgColor: 'bg-edu-blue/10',
    topics: ['Numbers & Counting', 'Addition & Subtraction', 'Multiplication & Division', 'Geometry & Shapes', 'Measurements', 'Fractions', 'Decimals', 'Percentages', 'Algebra Basics', 'Statistics', 'Problem Solving'],
    ageLevels: [
      {
        level: 'beginner',
        ageRange: '5-7',
        description: 'Basic counting, simple addition and subtraction, shape recognition'
      },
      {
        level: 'intermediate',
        ageRange: '8-10',
        description: 'Multiplication, division, fractions, measurements, and basic geometry'
      },
      {
        level: 'advanced',
        ageRange: '11-13',
        description: 'Pre-algebra, decimals, percentages, complex problem solving, and statistics'
      }
    ]
  },
  {
    id: 'english',
    name: 'English',
    description: 'Develop reading, writing, grammar, and vocabulary skills',
    icon: 'BookOpen',
    bgColor: 'bg-edu-green/10',
    topics: ['Alphabet & Phonics', 'Reading Comprehension', 'Grammar Rules', 'Vocabulary Building', 'Writing Skills', 'Spelling', 'Parts of Speech', 'Sentence Structure', 'Creative Writing', 'Literary Analysis', 'Public Speaking'],
    ageLevels: [
      {
        level: 'beginner',
        ageRange: '5-7',
        description: 'Alphabet, phonics, basic vocabulary, and simple sentence formation'
      },
      {
        level: 'intermediate',
        ageRange: '8-10',
        description: 'Reading comprehension, grammar rules, creative writing, and spelling skills'
      },
      {
        level: 'advanced',
        ageRange: '11-13',
        description: 'Complex sentence structures, literary analysis, elaborate vocabulary, and persuasive writing'
      }
    ]
  },
  {
    id: 'french',
    name: 'French',
    description: 'Learn basic French vocabulary, phrases, and grammar',
    icon: 'Languages',
    bgColor: 'bg-edu-purple/10',
    topics: ['Basic Greetings', 'Numbers & Colors', 'Family & Friends', 'Food & Dining', 'School Vocabulary', 'Simple Conversations', 'Basic Grammar', 'Verb Conjugation', 'Reading French Texts', 'Cultural Appreciation', 'French-speaking Countries'],
    ageLevels: [
      {
        level: 'beginner',
        ageRange: '5-7',
        description: 'Basic greetings, numbers, colors, and simple vocabulary'
      },
      {
        level: 'intermediate',
        ageRange: '8-10',
        description: 'Simple conversations, basic grammar, family vocabulary, and school terms'
      },
      {
        level: 'advanced',
        ageRange: '11-13',
        description: 'Verb conjugation, reading comprehension, cultural knowledge, and fluid conversation'
      }
    ]
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Explore living things, materials, and the natural world',
    icon: 'Atom',
    bgColor: 'bg-edu-orange/10',
    topics: ['Plants & Animals', 'Human Body', 'Materials & Properties', 'Weather & Seasons', 'Environmental Science', 'Simple Experiments', 'Solar System', 'Forces & Motion', 'Electricity & Magnetism', 'Earth Sciences', 'Scientific Method'],
    ageLevels: [
      {
        level: 'beginner',
        ageRange: '5-7',
        description: 'Basic plant/animal classification, simple experiments, weather patterns, and the five senses'
      },
      {
        level: 'intermediate',
        ageRange: '8-10',
        description: 'Human body systems, basic physics concepts, environmental science, and the solar system'
      },
      {
        level: 'advanced',
        ageRange: '11-13',
        description: 'Forces, energy, complex ecosystems, scientific method application, and basic chemistry'
      }
    ]
  },
  {
    id: 'history',
    name: 'History',
    description: 'Discover Mauritius\' past, heritage, and important events',
    icon: 'Clock',
    bgColor: 'bg-edu-yellow/10',
    topics: ['Early Settlements', 'Dutch & French Colonization', 'British Colonial Period', 'Path to Independence', 'Modern Mauritius', 'Cultural Heritage', 'Historical Figures', 'Maritime History', 'Trade & Commerce', 'Evolution of Society', 'International Relations'],
    ageLevels: [
      {
        level: 'beginner',
        ageRange: '5-7',
        description: 'Introduction to historical concepts, basic timeline of Mauritius, and cultural traditions'
      },
      {
        level: 'intermediate',
        ageRange: '8-10',
        description: 'Colonial history, key historical figures, and understanding cultural heritage'
      },
      {
        level: 'advanced',
        ageRange: '11-13',
        description: 'Detailed colonial impact, independence movement, modern political development, and international relations'
      }
    ]
  },
  {
    id: 'geography',
    name: 'Geography',
    description: 'Learn about Mauritius\' landscape, climate, and resources',
    icon: 'Globe',
    bgColor: 'bg-edu-red/10',
    topics: ['Islands of Mauritius', 'Mountains & Landscapes', 'Beaches & Lagoons', 'Climate & Weather', 'Natural Resources', 'Tourism & Economy', 'Map Reading', 'Population Distribution', 'Environmental Conservation', 'Urban Development', 'Sustainable Development'],
    ageLevels: [
      {
        level: 'beginner',
        ageRange: '5-7',
        description: 'Basic map skills, main islands, and simple landscape features'
      },
      {
        level: 'intermediate',
        ageRange: '8-10',
        description: 'Climate patterns, natural resources, tourism importance, and conservation basics'
      },
      {
        level: 'advanced',
        ageRange: '11-13',
        description: 'Economic geography, sustainable development, demographic patterns, and environmental challenges'
      }
    ]
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
