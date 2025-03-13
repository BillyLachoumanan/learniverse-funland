
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
  learningMaterials: {
    level: 'beginner' | 'intermediate' | 'advanced';
    title: string;
    content: string;
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
    ],
    learningMaterials: [
      {
        level: 'beginner',
        title: 'Counting and Numbers (1-100)',
        content: `# Counting and Numbers
        
## Numbers 1 to 100
In Mauritius primary schools, young children begin by learning to count from 1 to 100.

### How to count:
- Counting forward: 1, 2, 3, 4, 5...
- Counting backward: 100, 99, 98, 97...

### Number groups:
- Ones (1-9): 1, 2, 3, 4, 5, 6, 7, 8, 9
- Tens: 10, 20, 30, 40, 50, 60, 70, 80, 90
- Numbers between: 11, 12, 13... and so on

### Fun facts:
- Numbers can represent how many objects we have
- We use numbers every day for time, money, and measuring
- In Mauritius, children learn to count in multiple languages!`
      },
      {
        level: 'beginner',
        title: 'Basic Addition and Subtraction',
        content: `# Addition and Subtraction
        
## Basic Operations
At the foundation of mathematics are addition and subtraction.

### Addition (+):
- Addition means combining two or more numbers
- Example: 5 + 3 = 8
- We can use counters or fingers to help us add

### Subtraction (-):
- Subtraction means taking away or finding the difference
- Example: 9 - 4 = 5
- When we subtract, the number gets smaller

### Number bonds:
- Pairs of numbers that make 10: 1+9, 2+8, 3+7, 4+6, 5+5
- Try finding other number bonds for 5, 15, or 20!`
      },
      {
        level: 'intermediate',
        title: 'Multiplication Tables',
        content: `# Multiplication Tables
        
## Learning to Multiply
Multiplication is a faster way of adding the same number multiple times.

### Multiplication as repeated addition:
- 3 × 4 means 3 groups of 4
- 3 × 4 = 4 + 4 + 4 = 12

### Basic multiplication tables (1-10):
- 2 times table: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
- 5 times table: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
- 10 times table: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

### Multiplication tricks:
- Multiplying by 10: just add a zero (7 × 10 = 70)
- Multiplying by 5: multiply by 10 then divide by 2
- Multiplying by 9: multiply by 10 and subtract the original number`
      },
      {
        level: 'advanced',
        title: 'Fractions and Decimals',
        content: `# Fractions and Decimals
        
## Understanding Parts of a Whole
Fractions and decimals represent parts of a whole number.

### Fractions:
- Numerator (top number): how many parts we have
- Denominator (bottom number): total number of equal parts
- Examples: 1/2 (one-half), 3/4 (three-quarters)

### Types of fractions:
- Proper fractions: numerator smaller than denominator (1/4)
- Improper fractions: numerator larger than denominator (5/3)
- Mixed numbers: whole number and proper fraction (1 1/2)

### Converting between fractions and decimals:
- 1/2 = 0.5
- 1/4 = 0.25
- 3/4 = 0.75

### Practical uses:
- Sharing food equally among friends
- Measuring ingredients for recipes
- Understanding discounts when shopping in Port Louis markets`
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
    ],
    learningMaterials: [
      {
        level: 'beginner',
        title: 'The English Alphabet',
        content: `# The English Alphabet
        
## Learning Letters and Sounds
The English alphabet consists of 26 letters, each with its own sound.

### Capital and small letters:
- A a, B b, C c, D d, E e, F f...and so on

### Vowels and consonants:
- Vowels: A, E, I, O, U
- Consonants: All other letters

### Phonics basics:
- 'a' as in apple, ant, alligator
- 'b' as in ball, baby, book
- 'c' as in cat, cake, coconut (common in Mauritius!)

### Fun activities:
- Try tracing letters in sand at the beach
- Find objects around your home that begin with different letters
- Practice singing the alphabet song`
      },
      {
        level: 'beginner',
        title: 'Simple Sentences',
        content: `# Simple Sentences
        
## Building Basic Sentences
A sentence is a group of words that expresses a complete thought.

### Parts of a simple sentence:
- Subject: the person or thing doing the action
- Verb: the action word
- Example: "The boy runs."

### Types of simple sentences:
- Statements: The sun is hot.
- Questions: Is the sun hot?
- Commands: Look at the sun.
- Exclamations: How hot the sun is!

### Sentence practice:
- I live in Mauritius.
- The beach is beautiful.
- We speak Creole and English.
- My teacher is kind.`
      },
      {
        level: 'intermediate',
        title: 'Reading Comprehension',
        content: `# Reading Comprehension
        
## Understanding What You Read
Reading comprehension means understanding the meaning of a text.

### Reading strategies:
- Predict: What do you think will happen next?
- Question: Ask yourself questions as you read
- Clarify: Look up words you don't understand
- Summarize: Retell the main points in your own words

### Types of texts Mauritian students study:
- Fiction: stories, fables, and fairy tales
- Non-fiction: facts about history, science, and culture
- Poetry: verses that express feelings and ideas
- Drama: plays with dialogue between characters

### Example short text:
**The Dodo Bird**

The Dodo was a bird that lived only in Mauritius. It could not fly and had no natural enemies. When Dutch sailors arrived in the 1600s, they hunted the Dodo for food. By 1681, the Dodo was extinct. Today, the Dodo is a national symbol of Mauritius.

### Comprehension questions:
1. Where did the Dodo bird live?
2. Why was the Dodo easy to hunt?
3. What happened to the Dodo by 1681?
4. What does the Dodo represent today?`
      },
      {
        level: 'advanced',
        title: 'Essay Writing',
        content: `# Essay Writing
        
## Expressing Ideas in Organized Form
Essays help us develop thoughts in a structured way.

### Essay structure:
- Introduction: Present your topic and main idea
- Body: Develop your points with details and examples
- Conclusion: Summarize your main points and give a final thought

### Types of essays:
- Descriptive: Describe a person, place, or thing in detail
- Narrative: Tell a story with a beginning, middle, and end
- Expository: Explain a concept or process
- Persuasive: Convince the reader of your viewpoint

### Writing tips for Mauritian students:
- Use your multicultural background as inspiration
- Include local examples that are relevant to Mauritius
- Consider how topics relate to island life and heritage
- Draft, revise, and edit your work

### Sample essay topic:
"The importance of preserving Mauritius's natural environment"`
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
    ],
    learningMaterials: [
      {
        level: 'beginner',
        title: 'French Greetings (Les Salutations)',
        content: `# French Greetings (Les Salutations)
        
## Basic French Greetings
In Mauritius, French is one of the official languages and widely used.

### Common greetings:
- Bonjour = Hello/Good day
- Salut = Hi (informal)
- Au revoir = Goodbye
- Bonsoir = Good evening
- Bonne nuit = Good night

### Simple conversations:
- Comment ça va? = How are you?
- Ça va bien, merci = I'm fine, thank you
- Comment t'appelles-tu? = What's your name?
- Je m'appelle... = My name is...

### Politeness:
- S'il vous plaît = Please
- Merci = Thank you
- De rien = You're welcome
- Excusez-moi = Excuse me

### Practice at home:
Try greeting your family members in French every morning!`
      },
      {
        level: 'beginner',
        title: 'Numbers and Colors (Les Nombres et Les Couleurs)',
        content: `# Numbers and Colors in French
        
## Les Nombres et Les Couleurs
Learning numbers and colors in French is fun and useful.

### Numbers 1-10:
- 1 = un
- 2 = deux
- 3 = trois
- 4 = quatre
- 5 = cinq
- 6 = six
- 7 = sept
- 8 = huit
- 9 = neuf
- 10 = dix

### Basic colors:
- rouge = red
- bleu = blue
- jaune = yellow
- vert = green
- noir = black
- blanc = white
- marron = brown
- rose = pink
- orange = orange
- violet = purple

### Fun fact:
The Mauritius flag has four colors: red, blue, yellow, and green. In French, we would say: rouge, bleu, jaune, et vert!`
      },
      {
        level: 'intermediate',
        title: 'French Grammar Basics',
        content: `# French Grammar Basics
        
## La Grammaire Française
Understanding basic grammar helps you form proper sentences.

### Articles:
- Definite articles (the): le (masculine), la (feminine), les (plural)
- Indefinite articles (a/an): un (masculine), une (feminine), des (plural)

### Subject pronouns:
- je = I
- tu = you (informal)
- il/elle = he/she
- nous = we
- vous = you (formal or plural)
- ils/elles = they

### Basic verb forms:
- être (to be): Je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont
- avoir (to have): J'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont

### Sentence structure:
- French sentences typically follow Subject + Verb + Object order
- Example: Je mange une pomme. (I eat an apple.)`
      },
      {
        level: 'advanced',
        title: 'French Literature and Culture',
        content: `# French Literature and Culture
        
## La Littérature et La Culture Française
French culture has greatly influenced Mauritius's history.

### Famous French authors studied in Mauritius:
- Antoine de Saint-Exupéry ("Le Petit Prince")
- Jean de La Fontaine (fables)
- Victor Hugo ("Les Misérables")

### French influence in Mauritius:
- French colonial period (1715-1810)
- French architecture in Port Louis
- French-based Creole language
- French cuisine adapted with local ingredients

### Short French poem:
**L'Île Maurice**

Maurice, île de beauté,
Perle de l'océan Indien,
Tes plages et montagnes,
Font rêver les Mauriciens.

### Reading comprehension:
This simple poem describes Mauritius as a beautiful island, a pearl in the Indian Ocean, with beaches and mountains that make Mauritians dream.`
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
    ],
    learningMaterials: [
      {
        level: 'beginner',
        title: 'Plants and Animals',
        content: `# Plants and Animals
        
## Living Things Around Us
Mauritius has many unique plants and animals to discover.

### Plants:
- Parts of a plant: roots, stem, leaves, flower, fruit, seed
- What plants need: sunlight, water, air, soil
- Plants make their own food through photosynthesis
- Mauritian plants: sugar cane, coconut palm, traveler's palm

### Animals:
- Animals need: food, water, shelter, air
- Animal groups: mammals, birds, fish, reptiles, amphibians, insects
- Mauritius is home to many unique animals
- Some Mauritian animals are endemic (found nowhere else)

### Endemic Mauritius animals:
- Mauritius kestrel (bird)
- Pink pigeon
- Mauritius flying fox (bat)
- Telfair's skink (lizard)

### Did you know?
The dodo bird was a flightless bird that lived only in Mauritius. It became extinct over 300 years ago because of hunting and habitat destruction.`
      },
      {
        level: 'beginner',
        title: 'The Five Senses',
        content: `# The Five Senses
        
## How We Experience the World
We use our five senses to learn about everything around us.

### Our senses:
- Sight (eyes): We see colors, shapes, and movement
- Hearing (ears): We hear sounds both loud and soft
- Touch (skin): We feel texture, temperature, and pressure
- Taste (tongue): We taste flavors (sweet, sour, salty, bitter)
- Smell (nose): We smell different scents and odors

### Sense experiments to try in Mauritius:
- Sight: Spot different colored fish at Blue Bay Marine Park
- Hearing: Listen to bird calls in Black River Gorges National Park
- Touch: Feel the texture of different seashells at the beach
- Taste: Compare the taste of different tropical fruits
- Smell: Identify the scents of local spices at Port Louis Market

### How senses protect us:
- We smell smoke to warn us of fire
- We taste bad food so we don't eat it
- We feel pain to avoid injury`
      },
      {
        level: 'intermediate',
        title: 'The Solar System',
        content: `# The Solar System
        
## Our Place in Space
The solar system includes our sun and everything that orbits around it.

### The Sun and planets:
- The Sun: A star at the center of our solar system
- Eight planets orbit the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune
- Earth is the third planet from the Sun

### Features of Earth:
- Earth is the only known planet with life
- 71% of Earth is covered by water
- Earth has one moon
- Earth takes 24 hours to rotate (one day) and 365.25 days to orbit the Sun (one year)

### Observing the sky in Mauritius:
- Mauritius has clear night skies, perfect for stargazing
- The Southern Cross constellation can be seen from Mauritius
- The Mauritius Radio Telescope helps scientists study the universe

### How the Sun affects Mauritius:
- Mauritius has a tropical climate due to its position near the equator
- The Sun helps coral reefs grow around the island
- Plants use sunlight to grow and produce oxygen`
      },
      {
        level: 'advanced',
        title: 'Ecosystems and Conservation',
        content: `# Ecosystems and Conservation
        
## Protecting Mauritius's Natural Heritage
Mauritius has unique ecosystems that need protection.

### Ecosystems in Mauritius:
- Coral reefs: Underwater ecosystems with diverse marine life
- Forests: Black River Gorges National Park contains native forests
- Wetlands: Important habitats for birds and water management
- Coastal areas: Where land meets sea, home to many species

### Food chains and webs:
- Producers: Plants that make their own food (sugar cane, palm trees)
- Consumers: Animals that eat plants or other animals
- Decomposers: Break down dead material (fungi, bacteria)

### Environmental challenges in Mauritius:
- Introduced species threatening native wildlife
- Habitat loss due to development
- Coral reef degradation from pollution and climate change
- Deforestation and soil erosion

### Conservation efforts:
- Protected areas like Black River Gorges National Park
- Breeding programs for endangered species
- Marine protected areas for coral reef protection
- Tree planting and habitat restoration projects

### How you can help:
- Reduce, reuse, recycle to minimize waste
- Participate in beach clean-ups
- Learn about and respect local wildlife
- Use less water and electricity`
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
    ],
    learningMaterials: [
      {
        level: 'beginner',
        title: 'First Discoveries of Mauritius',
        content: `# First Discoveries of Mauritius
        
## How Mauritius Was Found
Mauritius was an uninhabited island until Europeans arrived.

### First visitors:
- Arab sailors may have known about Mauritius but didn't settle
- Portuguese sailors visited in the early 1500s
- They named the island "Ilha do Cerne" (Island of the Swan)
- They didn't create permanent settlements

### Dutch period (1598-1710):
- The Dutch named the island "Mauritius" after Prince Maurice of Nassau
- They tried to settle twice but eventually abandoned the island
- They introduced sugar cane, which later became important
- They hunted the dodo bird to extinction

### Important places to know:
- Port Louis: Later became the capital city
- Mahébourg: One of the earliest settlement areas

### Historical symbols:
- The dodo bird: A symbol of Mauritius's unique wildlife
- The coat of arms: Shows a dodo and a deer supporting a shield`
      },
      {
        level: 'beginner',
        title: 'Cultural Traditions of Mauritius',
        content: `# Cultural Traditions of Mauritius
        
## Our Rich Heritage
Mauritius has a diverse culture with influences from many places.

### Cultural groups in Mauritius:
- Indo-Mauritians: Ancestors came from India
- Creoles: Mixed African and European ancestry
- Sino-Mauritians: Chinese ancestry
- Franco-Mauritians: French ancestry

### Important festivals:
- Diwali: Festival of Lights celebrated by Hindus
- Eid-ul-Fitr: Muslim celebration after Ramadan
- Chinese New Year: Celebrated with dragon dances
- Christmas: Celebrated with family gatherings

### Traditional foods:
- Dholl puri: Flatbread filled with yellow split peas
- Rougaille: Tomato-based sauce with fish or meat
- Gateaux piments: Chili cakes made from split peas
- Napolitaine: Shortbread cookies with jam and icing

### Traditional music and dance:
- Sega: Traditional Mauritian music and dance
- Instruments include ravanne (drum), maravanne, and triangle`
      },
      {
        level: 'intermediate',
        title: 'French and British Colonial Periods',
        content: `# French and British Colonial Periods
        
## Mauritius Under European Rule
European powers controlled Mauritius for centuries.

### French period (1715-1810):
- The French East India Company claimed Mauritius
- They renamed it "Isle de France"
- They established Port Louis as the capital
- They developed agriculture, especially sugar cane
- Introduced enslaved people from Africa and Madagascar

### British period (1810-1968):
- The British captured Mauritius during the Napoleonic Wars
- They returned to the name "Mauritius"
- They abolished slavery in 1835
- They brought indentured laborers from India to work on sugar plantations
- English became the official language, but French and Creole remained widely spoken

### Important events:
- Battle of Grand Port (1810): French naval victory over the British
- Abolition of slavery (1835): Changed Mauritian society
- Arrival of indentured laborers (1834-1910): About 450,000 Indians came to Mauritius

### Historical buildings:
- Aapravasi Ghat: UNESCO site where indentured laborers arrived
- Le Morne Brabant: Symbol of resistance to slavery, now a UNESCO site`
      },
      {
        level: 'advanced',
        title: 'Mauritius Independence and Modern Nation',
        content: `# Mauritius Independence and Modern Nation
        
## Path to Freedom and Development
How Mauritius became an independent country and developed.

### Path to independence:
- 1930s-1940s: Rise of labor movements and political awareness
- 1947: Constitution gave Mauritians limited voting rights
- 1950s-1960s: Political parties formed to represent different communities
- Key leaders: Sir Seewoosagur Ramgoolam, Gaëtan Duval, and others
- March 12, 1968: Independence Day for Mauritius
- 1992: Mauritius became a Republic within the Commonwealth

### Economic development:
- 1960s-1970s: Sugar industry dominated the economy
- 1980s: Expansion into textiles and manufacturing
- 1990s-2000s: Development of tourism and financial services
- 2000s-present: Focus on technology, services, and sustainable development

### Political system:
- Parliamentary democracy based on the British model
- Regular free elections
- Peaceful transitions of power between parties

### Mauritius today:
- One of Africa's most stable and prosperous countries
- Known for ethnic harmony despite diverse population
- Facing challenges: climate change, environmental protection, economic diversification
- Member of important African and international organizations`
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
    ],
    learningMaterials: [
      {
        level: 'beginner',
        title: 'The Islands of Mauritius',
        content: `# The Islands of Mauritius
        
## Our Island Nation
Mauritius is an island country consisting of several islands.

### Main island:
- Mauritius: The largest and main island (1,865 km²)
- Home to most of the population
- Location: Indian Ocean, about 800 km east of Madagascar

### Other islands:
- Rodrigues: Second largest island, 560 km east of main island
- Agalega: Two small islands about 1,000 km north
- St. Brandon: Group of small islands and sandbanks
- Chagos Archipelago: Disputed territory with the United Kingdom

### Neighboring countries:
- Réunion (French territory): 200 km to the southwest
- Madagascar: 800 km to the west
- Seychelles: 1,100 km to the northeast

### Fun facts:
- Mauritius is often called "The Star and Key of the Indian Ocean"
- The total land area of all Mauritius islands is about 2,040 km²
- You can travel around the main island in one day by car!`
      },
      {
        level: 'beginner',
        title: 'Landscapes of Mauritius',
        content: `# Landscapes of Mauritius
        
## Beautiful Places on Our Island
Mauritius has many different types of landscapes to explore.

### Mountains:
- Piton de la Petite Rivière Noire: Highest mountain (828 meters)
- Le Morne Brabant: UNESCO World Heritage site (556 meters)
- Trois Mamelles: Three mountain peaks that look like "three breasts"
- Les Gorges: Mountain range with spectacular views

### Beaches:
- Flic en Flac: Popular beach on the west coast
- Belle Mare: Long white sand beach on the east coast
- Le Morne: Beautiful beach with mountain backdrop
- Blue Bay: Beach with clear water, perfect for snorkeling

### Other natural features:
- Grand Bassin (Ganga Talao): Sacred lake in a crater
- Black River Gorges: National park with native forests
- Chamarel Seven Colored Earth: Natural phenomenon of different colored soil
- Rochester Falls: Waterfall flowing over unusual rock formations

### Natural regions:
- Central Plateau: Cooler, higher elevation area
- Coastal Plains: Flatter areas near the ocean
- Mountain Ranges: Running north to south
- Coral Reefs: Surrounding almost the entire island`
      },
      {
        level: 'intermediate',
        title: 'Climate and Weather in Mauritius',
        content: `# Climate and Weather in Mauritius
        
## Understanding Our Tropical Climate
Mauritius has a tropical climate modified by southeast trade winds.

### Seasons:
- Summer: November to April (hot and humid)
- Winter: May to October (cool and dry)
- Unlike many countries, we don't have spring or autumn

### Temperature:
- Summer temperatures: 25°C to 33°C
- Winter temperatures: 17°C to 25°C
- The central plateau is always a few degrees cooler than the coast

### Rainfall:
- Annual rainfall: 1,500mm to 2,000mm
- The Central Plateau and east coast receive more rain
- The west coast is generally drier
- Heaviest rains occur from January to March

### Cyclones:
- Cyclone season: November to April
- Cyclones bring heavy rain and strong winds
- Mauritius has good cyclone warning systems
- Buildings are designed to withstand cyclone winds

### Climate change effects:
- Rising sea levels affecting coastal areas
- Coral bleaching due to warmer ocean temperatures
- Changes in rainfall patterns
- More intense cyclones`
      },
      {
        level: 'advanced',
        title: 'Environmental Conservation in Mauritius',
        content: `# Environmental Conservation in Mauritius
        
## Protecting Our Natural Heritage
Mauritius faces environmental challenges that require conservation efforts.

### Environmental challenges:
- Habitat loss due to development
- Invasive species threatening native plants and animals
- Pollution affecting marine and terrestrial ecosystems
- Climate change impacts on coral reefs and coastlines
- Deforestation of native forests

### Protected areas:
- Black River Gorges National Park: Largest protected area, home to endemic species
- Blue Bay Marine Park: Protected marine environment
- Bras d'Eau National Park: Native forest ecosystem on the east coast
- Ile aux Aigrettes: Nature reserve for endemic species restoration

### Conservation efforts:
- Endangered species breeding programs (Mauritius kestrel, pink pigeon)
- Invasive species management
- Coral reef restoration projects
- Environmental education in schools
- Community-based conservation initiatives

### Sustainable development practices:
- Renewable energy projects (solar, wind, bagasse from sugar cane)
- Sustainable tourism initiatives
- Recycling and waste management programs
- Sustainable agriculture techniques
- Green building designs

### International cooperation:
- Mauritius is a signatory to many international environmental treaties
- Partnerships with international conservation organizations
- Regional cooperation with other Indian Ocean islands`
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
