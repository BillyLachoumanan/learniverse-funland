
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
    videoUrl?: string;
  }[];
}

export interface TopicExplanation {
  title: string;
  content: string;
  videoUrl?: string;
  ageLevel?: 'beginner' | 'intermediate' | 'advanced';
}

const topicExplanations: Record<string, Record<string, Record<string, TopicExplanation>>> = {
  "mathematics": {
    "Numbers & Counting": {
      "beginner": {
        title: "Numbers & Counting",
        content: `<p>Numbers are symbols that represent quantity. We use them to count objects, measure things, and solve problems.</p>
      
<h3>How to Count from 1 to 10:</h3>
<ol>
  <li>Start with 1</li>
  <li>Then 2, 3, 4, and so on</li>
  <li>Until you reach 10</li>
</ol>

<h3>Fun Examples:</h3>
<ul>
  <li>Count your fingers (you have 10!)</li>
  <li>Count pencils in your pencil box</li>
  <li>Count steps as you walk upstairs</li>
</ul>

<h3>Practice:</h3>
<p>Try counting the following:</p>
<ul>
  <li>How many books are on your shelf?</li>
  <li>How many chairs are in your classroom?</li>
  <li>How many days are in a week? (Hint: 7!)</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=bGetqbqDVaA",
        ageLevel: "beginner"
      },
      "intermediate": {
        title: "Numbers & Place Value",
        content: `<p>Place value helps us understand what each digit in a number means.</p>
        
<h3>Place Value Chart (for numbers up to 1,000):</h3>
<ul>
  <li>Ones place: Right-most digit</li>
  <li>Tens place: Second digit from right</li>
  <li>Hundreds place: Third digit from right</li>
</ul>

<h3>Examples:</h3>
<ul>
  <li>In the number 352:
    <ul>
      <li>2 is in the ones place (value = 2)</li>
      <li>5 is in the tens place (value = 50)</li>
      <li>3 is in the hundreds place (value = 300)</li>
    </ul>
  </li>
</ul>

<h3>Expanded Form:</h3>
<p>Writing a number to show the value of each digit.</p>
<ul>
  <li>352 = 300 + 50 + 2</li>
  <li>495 = 400 + 90 + 5</li>
</ul>

<h3>Comparing Numbers:</h3>
<p>Use place value to compare which number is greater.</p>
<ul>
  <li>Compare the highest place value first.</li>
  <li>If those are equal, move to the next place value.</li>
  <li>Use symbols: > (greater than), < (less than), = (equal to)</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=D5rG5YvP0s4",
        ageLevel: "intermediate"
      },
      "advanced": {
        title: "Number Systems & Properties",
        content: `<p>Number systems help us categorize and work with different types of numbers.</p>
        
<h3>Types of Numbers:</h3>
<ul>
  <li>Natural Numbers: 1, 2, 3, 4, ... (counting numbers)</li>
  <li>Whole Numbers: 0, 1, 2, 3, ... (natural numbers plus zero)</li>
  <li>Integers: ..., -3, -2, -1, 0, 1, 2, 3, ... (whole numbers plus negative numbers)</li>
  <li>Rational Numbers: Numbers that can be written as fractions (p/q where q≠0)</li>
  <li>Irrational Numbers: Numbers that cannot be written as fractions (like π and √2)</li>
</ul>

<h3>Properties of Numbers:</h3>
<ul>
  <li>Commutative Property: a + b = b + a and a × b = b × a</li>
  <li>Associative Property: (a + b) + c = a + (b + c) and (a × b) × c = a × (b × c)</li>
  <li>Distributive Property: a × (b + c) = a × b + a × c</li>
  <li>Identity Property: a + 0 = a (additive) and a × 1 = a (multiplicative)</li>
</ul>

<h3>Factors and Multiples:</h3>
<ul>
  <li>Factors: Numbers that divide evenly into another number</li>
  <li>Multiples: Results of multiplying a number by integers</li>
  <li>Prime Numbers: Numbers with exactly two factors (1 and itself)</li>
  <li>Composite Numbers: Numbers with more than two factors</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=ETTz5rKJSBk",
        ageLevel: "advanced"
      }
    },
    "Addition & Subtraction": {
      "beginner": {
        title: "Addition & Subtraction",
        content: `<p>Addition means putting things together, and subtraction means taking things away.</p>
      
<h3>Addition Examples:</h3>
<ul>
  <li>If you have 3 apples and get 2 more: 3 + 2 = 5 apples</li>
  <li>If you see 4 birds and then 3 more fly in: 4 + 3 = 7 birds</li>
</ul>

<h3>Subtraction Examples:</h3>
<ul>
  <li>If you have 8 sweets and eat 3: 8 - 3 = 5 sweets left</li>
  <li>If there are 10 children and 4 leave: 10 - 4 = 6 children remain</li>
</ul>

<h3>Try these problems:</h3>
<ol>
  <li>If you have 5 pencils and your friend gives you 3 more, how many do you have?</li>
  <li>If you have 7 books and give 2 to your teacher, how many do you have left?</li>
</ol>`,
        videoUrl: "https://www.youtube.com/watch?v=AuX7nPBqDts",
        ageLevel: "beginner"
      },
      "intermediate": {
        title: "Addition & Subtraction with Regrouping",
        content: `<p>Regrouping (sometimes called "carrying" and "borrowing") helps us add and subtract larger numbers.</p>
        
<h3>Addition with Regrouping:</h3>
<p>When the sum of digits in any place value is 10 or more, we regroup.</p>
<ul>
  <li>Example: 38 + 45
    <ul>
      <li>Add ones: 8 + 5 = 13 (Write 3, carry 1 to tens)</li>
      <li>Add tens: 1 + 3 + 4 = 8</li>
      <li>Result: 83</li>
    </ul>
  </li>
</ul>

<h3>Subtraction with Regrouping:</h3>
<p>When the top digit is smaller than the bottom digit, we need to borrow.</p>
<ul>
  <li>Example: 52 - 37
    <ul>
      <li>Subtract ones: 2 is less than 7, so borrow 1 from tens (5 becomes 4, 2 becomes 12)</li>
      <li>Now subtract: 12 - 7 = 5</li>
      <li>Subtract tens: 4 - 3 = 1</li>
      <li>Result: 15</li>
    </ul>
  </li>
</ul>

<h3>Word Problems:</h3>
<ul>
  <li>A class collected 256 cans for recycling. They collected 178 more the next week. How many cans did they collect altogether?</li>
  <li>A bookstore had 324 books. After a sale, they had 156 books left. How many books were sold?</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=8mcTsyV56jI",
        ageLevel: "intermediate"
      },
      "advanced": {
        title: "Addition & Subtraction with Integers",
        content: `<p>Working with positive and negative numbers requires special rules for addition and subtraction.</p>
        
<h3>Adding Integers:</h3>
<ul>
  <li>Same signs: Add absolute values and keep the common sign
    <ul>
      <li>5 + 3 = 8</li>
      <li>(-5) + (-3) = -8</li>
    </ul>
  </li>
  <li>Different signs: Subtract the smaller absolute value from the larger and keep the sign of the number with the larger absolute value
    <ul>
      <li>5 + (-3) = 2</li>
      <li>(-5) + 3 = -2</li>
    </ul>
  </li>
</ul>

<h3>Subtracting Integers:</h3>
<p>To subtract an integer, add its opposite (additive inverse).</p>
<ul>
  <li>a - b = a + (-b)</li>
  <li>Examples:
    <ul>
      <li>7 - 4 = 7 + (-4) = 3</li>
      <li>7 - (-4) = 7 + 4 = 11</li>
      <li>-7 - 4 = -7 + (-4) = -11</li>
      <li>-7 - (-4) = -7 + 4 = -3</li>
    </ul>
  </li>
</ul>

<h3>Real-world Applications:</h3>
<ul>
  <li>Temperature changes: If it's -2°C in the morning and drops by 5°C by evening, what's the new temperature? (-2) + (-5) = -7°C</li>
  <li>Money: If you have Rs 500 and spend Rs 650 (using credit), what's your balance? 500 + (-650) = -150 (you owe Rs 150)</li>
  <li>Elevation: If you start at sea level (0), go down 20m, then up 35m, what's your final elevation? 0 + (-20) + 35 = 15m above sea level</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=C38B33ZywWs",
        ageLevel: "advanced"
      }
    },
    "Multiplication & Division": {
      "beginner": {
        title: "Multiplication & Division",
        content: `<p>Multiplication is a faster way to add the same number multiple times. Division is sharing into equal groups.</p>
      
<h3>Multiplication Examples:</h3>
<ul>
  <li>3 × 4 means "3 groups of 4" or "4 + 4 + 4 = 12"</li>
  <li>5 × 2 means "5 groups of 2" or "2 + 2 + 2 + 2 + 2 = 10"</li>
</ul>

<h3>Division Examples:</h3>
<ul>
  <li>8 ÷ 2 means "share 8 things into 2 equal groups" (4 in each group)</li>
  <li>10 ÷ 5 means "share 10 things into 5 equal groups" (2 in each group)</li>
</ul>

<h3>Real-life situations:</h3>
<ul>
  <li>If 1 chocolate bar costs Rs 15, how much do 3 chocolate bars cost? (3 × 15 = 45 rupees)</li>
  <li>If you have 12 candies and want to share them equally with 3 friends, how many candies does each friend get? (12 ÷ 3 = 4 candies each)</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=gzDPuWKkIZM",
        ageLevel: "beginner"
      },
      "intermediate": {
        title: "Multiplication & Division Strategies",
        content: `<p>Learning efficient multiplication and division strategies helps with larger numbers.</p>
        
<h3>Multiplication Strategies:</h3>
<ul>
  <li>Arrays: Organizing objects into rows and columns
    <ul>
      <li>4 × 6 can be shown as 4 rows with 6 items in each row</li>
    </ul>
  </li>
  <li>Area Model: Drawing rectangles to represent multiplication
    <ul>
      <li>23 × 14 can be broken down into (20 × 10) + (20 × 4) + (3 × 10) + (3 × 4)</li>
    </ul>
  </li>
  <li>Partial Products: Breaking numbers apart by place value
    <ul>
      <li>36 × 42 = (30 × 40) + (30 × 2) + (6 × 40) + (6 × 2)</li>
    </ul>
  </li>
</ul>

<h3>Division Strategies:</h3>
<ul>
  <li>Repeated Subtraction: Keep subtracting the divisor until you reach 0
    <ul>
      <li>20 ÷ 5: 20 - 5 = 15, 15 - 5 = 10, 10 - 5 = 5, 5 - 5 = 0 (4 subtractions, so 20 ÷ 5 = 4)</li>
    </ul>
  </li>
  <li>Long Division: Standard algorithm for larger numbers
    <ul>
      <li>372 ÷ 12 = 31</li>
    </ul>
  </li>
</ul>

<h3>Word Problems:</h3>
<ul>
  <li>A farmer has 156 mangoes to pack into boxes. Each box holds 12 mangoes. How many boxes will the farmer need?</li>
  <li>The school garden has 5 rows of flowers. If there are 24 flowers in each row, how many flowers are there altogether?</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=FJ5qLWP3Fqo",
        ageLevel: "intermediate"
      },
      "advanced": {
        title: "Multiplication & Division with Decimals",
        content: `<p>Working with decimals in multiplication and division follows specific rules.</p>
        
<h3>Multiplying Decimals:</h3>
<ol>
  <li>Multiply the numbers as if they were whole numbers (ignore decimal points)</li>
  <li>Count the total number of decimal places in both factors</li>
  <li>Place the decimal point in the product so that it has the same number of decimal places as the total</li>
</ol>

<h3>Examples:</h3>
<ul>
  <li>2.5 × 3.4
    <ul>
      <li>25 × 34 = 850</li>
      <li>2.5 has 1 decimal place, 3.4 has 1 decimal place, so total = 2 decimal places</li>
      <li>Answer: 8.50</li>
    </ul>
  </li>
  <li>0.03 × 0.2
    <ul>
      <li>3 × 2 = 6</li>
      <li>0.03 has 2 decimal places, 0.2 has 1 decimal place, so total = 3 decimal places</li>
      <li>Answer: 0.006</li>
    </ul>
  </li>
</ul>

<h3>Dividing Decimals:</h3>
<ol>
  <li>Move the decimal point in the divisor to make it a whole number</li>
  <li>Move the decimal point in the dividend the same number of places</li>
  <li>Divide as with whole numbers</li>
  <li>Place the decimal point in the quotient directly above its position in the dividend</li>
</ol>

<h3>Examples:</h3>
<ul>
  <li>8.4 ÷ 0.2
    <ul>
      <li>Move decimal point in divisor: 0.2 becomes 2 (moved 1 place)</li>
      <li>Move decimal point in dividend: 8.4 becomes 84 (moved 1 place)</li>
      <li>84 ÷ 2 = 42</li>
    </ul>
  </li>
  <li>5.67 ÷ 0.3
    <ul>
      <li>Move decimal point in divisor: 0.3 becomes 3 (moved 1 place)</li>
      <li>Move decimal point in dividend: 5.67 becomes 56.7 (moved 1 place)</li>
      <li>56.7 ÷ 3 = 18.9</li>
    </ul>
  </li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=nHg4RVqQ12E",
        ageLevel: "advanced"
      }
    },
    "Geometry & Shapes": {
      "beginner": {
        title: "Geometry & Shapes",
        content: `<p>Geometry is the study of shapes and how they relate to each other and to space.</p>
      
<h3>2D Shapes:</h3>
<ul>
  <li>Circle: A round shape with no corners</li>
  <li>Triangle: A shape with 3 sides and 3 corners</li>
  <li>Square: A shape with 4 equal sides and 4 corners</li>
  <li>Rectangle: A shape with 4 sides (2 long, 2 short) and 4 corners</li>
</ul>

<h3>3D Shapes:</h3>
<ul>
  <li>Sphere: A round ball shape (like a football)</li>
  <li>Cube: A box with 6 square faces (like a dice)</li>
  <li>Cylinder: A shape with circular ends and a curved side (like a can)</li>
</ul>

<h3>Find shapes around you:</h3>
<ul>
  <li>A plate is a circle</li>
  <li>A book is a rectangular prism</li>
  <li>A pyramid-shaped roof has triangular faces</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=IaoZhhx_I9s",
        ageLevel: "beginner"
      },
      "intermediate": {
        title: "Angles and Polygons",
        content: `<p>Angles help us understand how lines meet and polygons are closed shapes made of line segments.</p>
        
<h3>Types of Angles:</h3>
<ul>
  <li>Acute Angle: Less than 90° (smaller than a right angle)</li>
  <li>Right Angle: Exactly 90° (forms an L shape)</li>
  <li>Obtuse Angle: Greater than 90° but less than 180°</li>
  <li>Straight Angle: Exactly 180° (forms a straight line)</li>
  <li>Reflex Angle: Greater than 180° but less than 360°</li>
</ul>

<h3>Measuring Angles:</h3>
<ul>
  <li>We use a protractor to measure angles in degrees</li>
  <li>A full circle is 360°</li>
</ul>

<h3>Types of Polygons:</h3>
<ul>
  <li>Triangle: 3 sides (examples: equilateral, isosceles, scalene)</li>
  <li>Quadrilateral: 4 sides (examples: square, rectangle, rhombus, parallelogram, trapezoid)</li>
  <li>Pentagon: 5 sides</li>
  <li>Hexagon: 6 sides</li>
  <li>Octagon: 8 sides</li>
</ul>

<h3>Properties of Polygons:</h3>
<ul>
  <li>Regular polygons have all sides equal and all angles equal</li>
  <li>The sum of interior angles in a triangle is 180°</li>
  <li>The sum of interior angles in a quadrilateral is 360°</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=DnSJ_BJ_mzs",
        ageLevel: "intermediate"
      },
      "advanced": {
        title: "Perimeter, Area, and Volume",
        content: `<p>Perimeter, area, and volume help us measure different aspects of shapes.</p>
        
<h3>Perimeter:</h3>
<p>The distance around a 2D shape.</p>
<ul>
  <li>Rectangle: P = 2(length + width)</li>
  <li>Square: P = 4 × side</li>
  <li>Triangle: P = side1 + side2 + side3</li>
  <li>Circle: C = 2πr (circumference)</li>
</ul>

<h3>Area:</h3>
<p>The amount of space inside a 2D shape.</p>
<ul>
  <li>Rectangle: A = length × width</li>
  <li>Square: A = side²</li>
  <li>Triangle: A = ½ × base × height</li>
  <li>Circle: A = πr²</li>
  <li>Parallelogram: A = base × height</li>
  <li>Trapezoid: A = ½ × (parallel side 1 + parallel side 2) × height</li>
</ul>

<h3>Volume:</h3>
<p>The amount of space inside a 3D shape.</p>
<ul>
  <li>Rectangular Prism: V = length × width × height</li>
  <li>Cube: V = side³</li>
  <li>Cylinder: V = πr²h</li>
  <li>Sphere: V = ⁴⁄₃πr³</li>
  <li>Cone: V = ⅓πr²h</li>
</ul>

<h3>Real-world Applications:</h3>
<ul>
  <li>Finding the amount of fencing needed for a garden (perimeter)</li>
  <li>Calculating how much carpet is needed to cover a floor (area)</li>
  <li>Determining how much water a tank can hold (volume)</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=kqqmJiJez6o",
        ageLevel: "advanced"
      }
    }
  },
  "english": {
    "Alphabet & Phonics": {
      "beginner": {
        title: "Alphabet & Phonics",
        content: `<p>The English alphabet has 26 letters. Phonics helps us understand the sounds these letters make.</p>
      
<h3>Vowels and Consonants:</h3>
<ul>
  <li>Vowels: A, E, I, O, U</li>
  <li>Consonants: All other letters</li>
</ul>

<h3>Letter Sounds:</h3>
<ul>
  <li>'a' as in apple or ant</li>
  <li>'b' as in ball or bat</li>
  <li>'c' as in cat or cake</li>
</ul>

<h3>Try sounding out these words:</h3>
<ul>
  <li>cat: c-a-t</li>
  <li>dog: d-o-g</li>
  <li>sun: s-u-n</li>
</ul>

<h3>Fun Alphabet Games:</h3>
<ul>
  <li>Name an animal for each letter of the alphabet</li>
  <li>Find objects around your house that start with different letters</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=hq3yfQnllfQ",
        ageLevel: "beginner"
      },
      "intermediate": {
        title: "Phonics Patterns & Blends",
        content: `<p>Understanding phonics patterns helps us read and spell more complex words.</p>
        
<h3>Short and Long Vowel Sounds:</h3>
<ul>
  <li>Short 'a' as in cat, hat, mat</li>
  <li>Long 'a' as in cake, make, take</li>
  <li>Short 'e' as in pet, get, wet</li>
  <li>Long 'e' as in me, see, tree</li>
  <li>Short 'i' as in hit, sit, fit</li>
  <li>Long 'i' as in like, bike, hike</li>
  <li>Short 'o' as in hot, pot, not</li>
  <li>Long 'o' as in note, boat, coat</li>
  <li>Short 'u' as in but, cut, hut</li>
  <li>Long 'u' as in cute, mute, tube</li>
</ul>

<h3>Consonant Blends:</h3>
<p>Two or more consonants that are blended together, with each making its own sound.</p>
<ul>
  <li>bl: blue, black, block</li>
  <li>cl: cloud, climb, clock</li>
  <li>fl: fly, flower, flake</li>
  <li>pl: play, plant, please</li>
  <li>sl: sleep, slide, slow</li>
  <li>st: stop, stand, star</li>
  <li>fr: from, frog, friend</li>
  <li>gr: great, green, grow</li>
  <li>tr: try, tree, trip</li>
</ul>

<h3>Digraphs:</h3>
<p>Two letters that make a single sound.</p>
<ul>
  <li>ch: chair, cheese, church</li>
  <li>sh: ship, shop, shell</li>
  <li>th: this, that, then</li>
  <li>wh: what, when, where</li>
  <li>ph: phone, photo, phrase</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=Vb2ZXRh74WU",
        ageLevel: "intermediate"
      },
      "advanced": {
        title: "Word Roots & Etymology",
        content: `<p>Understanding word roots, prefixes, and suffixes helps us decipher the meaning of unfamiliar words.</p>
        
<h3>Common Prefixes:</h3>
<ul>
  <li>un- (not): unhappy, unable, unfriendly</li>
  <li>re- (again): replay, return, rewrite</li>
  <li>dis- (not, opposite): disappear, disagree, dishonest</li>
  <li>pre- (before): preview, prepare, prevent</li>
  <li>in/im- (not): incorrect, impossible, inactive</li>
  <li>sub- (under): submarine, subheading, subway</li>
</ul>

<h3>Common Suffixes:</h3>
<ul>
  <li>-er/-or (person who): teacher, actor, visitor</li>
  <li>-tion/-sion (state or quality): action, tension, confusion</li>
  <li>-able/-ible (can be done): readable, visible, possible</li>
  <li>-ful (full of): careful, helpful, beautiful</li>
  <li>-less (without): careless, homeless, fearless</li>
  <li>-ment (result of): development, excitement, movement</li>
</ul>

<h3>Common Latin Roots:</h3>
<ul>
  <li>aud (to hear): audience, audible, auditorium</li>
  <li>dict (to say): dictionary, predict, contradict</li>
  <li>spec (to look): inspect, spectator, spectacles</li>
  <li>port (to carry): transport, import, export</li>
  <li>scrib/script (to write): describe, manuscript, inscription</li>
</ul>

<h3>Common Greek Roots:</h3>
<ul>
  <li>auto (self): automobile, automatic, autobiography</li>
  <li>bio (life): biology, biography, biodiversity</li>
  <li>geo (earth): geography, geology, geometry</li>
  <li>photo (light): photograph, photosynthesis, photocopy</li>
  <li>tele (far): telephone, television, telescope</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=a0iVbFQN-p4",
        ageLevel: "advanced"
      }
    }
  },
  "science": {
    "Plants & Animals": {
      "beginner": {
        title: "Plants & Animals",
        content: `<p>Living things can be divided into plants and animals. They have different characteristics and needs.</p>
      
<h3>Plant Characteristics:</h3>
<ul>
  <li>Plants make their own food using sunlight</li>
  <li>Most plants have roots, stems, and leaves</li>
  <li>Plants cannot move from place to place</li>
</ul>

<h3>Animal Characteristics:</h3>
<ul>
  <li>Animals need to eat plants or other animals for food</li>
  <li>Animals can move from place to place</li>
  <li>Animals respond quickly to their environment</li>
</ul>

<h3>Examples in Mauritius:</h3>
<ul>
  <li>Plants: Sugar cane, coconut palm, hibiscus</li>
  <li>Animals: Mauritius kestrel, Pink pigeon, Flying fox (bat)</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=p51FiPO2_kQ",
        ageLevel: "beginner"
      },
      "intermediate": {
        title: "Plant & Animal Classification",
        content: `<p>Scientists classify living things into groups based on their characteristics.</p>
        
<h3>Plant Classification:</h3>
<ul>
  <li>Flowering Plants (Angiosperms): Plants that produce flowers and fruits
    <ul>
      <li>Examples: Mango trees, rose bushes, sugar cane</li>
    </ul>
  </li>
  <li>Non-flowering Plants (Gymnosperms): Plants that don't produce flowers but produce seeds
    <ul>
      <li>Examples: Pine trees, cycads</li>
    </ul>
  </li>
  <li>Ferns: Plants that reproduce using spores and have frond-like leaves
    <ul>
      <li>Examples: Tree ferns, bird's nest ferns</li>
    </ul>
  </li>
  <li>Mosses: Small, simple plants without true roots
    <ul>
      <li>Examples: Moss growing on rocks or trees</li>
    </ul>
  </li>
</ul>

<h3>Animal Classification:</h3>
<ul>
  <li>Mammals: Warm-blooded animals with hair/fur that feed their young with milk
    <ul>
      <li>Examples: Mauritius fruit bat, dolphins, humans</li>
    </ul>
  </li>
  <li>Birds: Warm-blooded animals with feathers, wings, and beaks
    <ul>
      <li>Examples: Mauritius kestrel, pink pigeon, paradise flycatcher</li>
    </ul>
  </li>
  <li>Reptiles: Cold-blooded animals with scales and dry skin
    <ul>
      <li>Examples: Telfair's skink, Serpent Island snake</li>
    </ul>
  </li>
  <li>Amphibians: Cold-blooded animals that live part of their life in water and part on land
    <ul>
      <li>Examples: Frogs, toads</li>
    </ul>
  </li>
  <li>Fish: Cold-blooded animals with gills that live in water
    <ul>
      <li>Examples: Grouper, parrotfish, tuna</li>
    </ul>
  </li>
  <li>Invertebrates: Animals without backbones
    <ul>
      <li>Examples: Corals, crabs, butterflies, snails</li>
    </ul>
  </li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=vJG698U2Mvo",
        ageLevel: "intermediate"
      },
      "advanced": {
        title: "Ecosystems & Adaptation",
        content: `<p>Ecosystems are communities of living organisms interacting with each other and their environment. Adaptation is how organisms evolve to survive in their habitats.</p>
        
<h3>Ecosystems in Mauritius:</h3>
<ul>
  <li>Coral Reef Ecosystems: Diverse marine habitats surrounding much of Mauritius
    <ul>
      <li>Organisms: Corals, reef fish, sea turtles, mollusks</li>
      <li>Interactions: Symbiotic relationships between corals and algae, predator-prey relationships</li>
    </ul>
  </li>
  <li>Forest Ecosystems: Including the native forests of Black River Gorges
    <ul>
      <li>Organisms: Native trees, birds, fruit bats, insects</li>
      <li>Interactions: Pollination, seed dispersal, decomposition</li>
    </ul>
  </li>
  <li>Wetland Ecosystems: Areas where water and land meet
    <ul>
      <li>Organisms: Aquatic plants, waterfowl, fish, invertebrates</li>
      <li>Interactions: Water filtration, nutrient cycling</li>
    </ul>
  </li>
</ul>

<h3>Types of Adaptation:</h3>
<ul>
  <li>Structural Adaptations: Physical features that help organisms survive
    <ul>
      <li>Example: The curved beak of the Mauritius kestrel helps it catch prey</li>
      <li>Example: Mangrove trees have adapted roots that can grow in saltwater</li>
    </ul>
  </li>
  <li>Behavioral Adaptations: Ways an organism acts to help it survive
    <ul>
      <li>Example: Some birds build nests in specific places to protect eggs from predators</li>
      <li>Example: Mauritius fruit bats roost in large groups for protection</li>
    </ul>
  </li>
  <li>Physiological Adaptations: Internal processes that help survival
    <ul>
      <li>Example: Some plants produce chemicals to deter insects from eating them</li>
      <li>Example: Animals that can slow their metabolism during food scarcity</li>
    </ul>
  </li>
</ul>

<h3>Endemic Species of Mauritius:</h3>
<p>Endemic species are found nowhere else in the world. Mauritius has many endemic species due to its isolation:</p>
<ul>
  <li>Mauritius kestrel: Adapted to hunt in forest environments</li>
  <li>Echo parakeet: Has a specialized diet of native fruits and seeds</li>
  <li>Mauritius fody: A bird with bright red plumage during breeding season</li>
  <li>Trochetia plants: Flowering plants adapted to specific mountain microclimates</li>
</ul>`,
        videoUrl: "https://www.youtube.com/watch?v=V8vHYXj3uTM",
        ageLevel: "advanced"
      }
    }
  }
};

// Updated function to get topic explanations based on age level
export const getTopicExplanation = (subjectId: string, topic: string, ageLevel?: 'beginner' | 'intermediate' | 'advanced'): TopicExplanation | undefined => {
  if (topicExplanations[subjectId] && topicExplanations[subjectId][topic]) {
    // If age level is specified, return that specific explanation
    if (ageLevel && topicExplanations[subjectId][topic][ageLevel]) {
      return topicExplanations[subjectId][topic][ageLevel];
    }
    
    // If no age level is specified or the specified age level doesn't exist,
    // return the first available explanation
    const availableAgeLevels = Object.keys(topicExplanations[subjectId][topic]);
    if (availableAgeLevels.length > 0) {
      return topicExplanations[subjectId][topic][availableAgeLevels[0] as 'beginner' | 'intermediate' | 'advanced'];
    }
  }
  return undefined;
};

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

### Let's Learn About Numbers!
Numbers are all around us! We use them every day to count objects, tell time, and measure things.

### Counting from 1 to 20:
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

### Try this fun activity:
Count the fingers on your hands. How many do you have? That's right - 10!
* 5 fingers on your left hand
* 5 fingers on your right hand
* 5 + 5 = 10 fingers total

### Counting by 10s to 100:
10, 20, 30, 40, 50, 60, 70, 80, 90, 100

![Image of numbers arranged in tens blocks]

### Real-Life Examples:
* The number of students in your class
* Your age in years
* The number of rupees in your piggy bank
* How many mangoes are in a basket

### Fun Counting Game:
When you're at the beach in Mauritius, try counting:
* How many shells can you find?
* How many waves come to shore in one minute?
* How many seabirds you can see?

Remember: Numbers help us understand how many things we have!`,
        videoUrl: "https://www.youtube.com/watch?v=0VLxWIHRD4E"
      },
      {
        level: 'beginner',
        title: 'Basic Addition and Subtraction',
        content: `# Addition and Subtraction
        
## Let's Add and Subtract!

### Addition (+) means putting things together
When we add, the number gets bigger!

#### Example 1:
If you have 3 mangoes and your friend gives you 2 more, how many do you have now?
3 + 2 = 5 mangoes

#### Example 2:
Let's add using pictures:
🍎 + 🍎 + 🍎 = 3 apples
🍌 + 🍌 = 2 bananas
All fruit together: 3 + 2 = 5 fruits

### Subtraction (-) means taking away
When we subtract, the number gets smaller!

#### Example 1:
If you have 7 sweets and you eat 3, how many are left?
7 - 3 = 4 sweets

#### Example 2:
Let's subtract using pictures:
🐢🐢🐢🐢🐢 (5 turtles)
If 2 turtles swim away: 🐢🐢🐢 (3 turtles remain)
5 - 2 = 3 turtles

### Number Bonds to 10
These are pairs of numbers that add up to 10:
* 1 + 9 = 10
* 2 + 8 = 10
* 3 + 7 = 10
* 4 + 6 = 10
* 5 + 5 = 10

### Try These Problems:
1. You have 4 pencils. Your teacher gives you 3 more. How many pencils do you have now?
2. There are 8 birds on a tree. 5 fly away. How many birds are left on the tree?
3. You pick 6 flowers. Your sister picks 4 flowers. How many flowers do you have together?

Remember: + means add, - means subtract!`,
        videoUrl: "https://www.youtube.com/watch?v=mAvuom42NyY"
      },
      {
        level: 'intermediate',
        title: 'Multiplication Tables',
        content: `# Multiplication Tables
        
## Multiplication is Repeated Addition

Multiplication helps us add the same number many times very quickly!

### What is Multiplication?
* 3 × 4 means "3 groups of 4" or "4 added 3 times"
* 3 × 4 = 4 + 4 + 4 = 12

### Let's see multiplication with pictures:
🍎🍎🍎  (1 row of 3 apples)
🍎🍎🍎  (2 rows of 3 apples)
🍎🍎🍎  (3 rows of 3 apples)
🍎🍎🍎  (4 rows of 3 apples)

This shows 4 × 3 = 12 apples total!

### The 2 Times Table:
2 × 1 = 2  (Two taken once is 2)
2 × 2 = 4  (Two taken twice is 4)
2 × 3 = 6  (Two taken three times is 6)
2 × 4 = 8  (Two taken four times is 8)
2 × 5 = 10 (Two taken five times is 10)
2 × 6 = 12 (Two taken six times is 12)
2 × 7 = 14 (Two taken seven times is 14)
2 × 8 = 16 (Two taken eight times is 16)
2 × 9 = 18 (Two taken nine times is 18)
2 × 10 = 20 (Two taken ten times is 20)

### The 5 Times Table:
5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
5 × 4 = 20
5 × 5 = 25
5 × 6 = 30
5 × 7 = 35
5 × 8 = 40
5 × 9 = 45
5 × 10 = 50

### Multiplication in Mauritius:
If one sugar cane gives 8 cups of juice, how many cups of juice can you get from 5 sugar canes?
5 × 8 = 40 cups of juice!

### Easy Multiplication Tricks:
* Multiplying by 10: Just add a zero! (7 × 10 = 70)
* Multiplying by 5: First multiply by 10, then divide by 2
  Example: 6 × 5 = (6 × 10) ÷ 2 = 60 ÷ 2 = 30
* Multiplying by 2: Just double the number!
  Example: 9 × 2 = 9 + 9 = 18

### Practice at Home:
Count objects in your house in groups, like:
* How many eggs are in 3 egg cartons if each has 6 eggs? (3 × 6 = 18)
* If each hand has 5 fingers, how many fingers do 4 people have? (4 × 10 = 40)`,
        videoUrl: "https://www.youtube.com/watch?v=gEIBPJ5Et4k"
      },
      {
        level: 'advanced',
        title: 'Fractions and Decimals',
        content: `# Fractions and Decimals
        
## Parts of a Whole

### What are Fractions?
A fraction shows part of a whole. It has:
* **Numerator** (top number): How many parts we have
* **Denominator** (bottom number): Total equal parts in the whole

### Examples with Pictures:
🍕🍕🍕🍕 (A pizza cut into 4 equal slices)
If you eat 1 slice, you've eaten 1/4 of the pizza.
If you eat 3 slices, you've eaten 3/4 of the pizza.

#### More Examples:
* Half of a mango = 1/2
* Three-quarters of a chocolate bar = 3/4
* Two-thirds of a glass of water = 2/3

### Types of Fractions:
* **Proper fractions**: Numerator smaller than denominator (1/2, 3/4)
* **Improper fractions**: Numerator larger than denominator (5/3, 7/4)
* **Mixed numbers**: Whole number and proper fraction (1 1/2, 2 3/4)

### Fractions in Everyday Life in Mauritius:
* Recipe for dholl puri needs 1/2 cup of split peas
* A journey from Port Louis to Grand Baie takes 3/4 hour
* 1/4 kg of vegetables at the market

### Decimals - Another Way to Show Parts
Decimals use a point to separate whole numbers from parts of a whole.

#### Converting Simple Fractions to Decimals:
* 1/2 = 0.5
* 1/4 = 0.25
* 3/4 = 0.75
* 1/10 = 0.1
* 7/10 = 0.7

### Decimal Place Value:
* Tenths: 0.1, 0.2, 0.3...
* Hundredths: 0.01, 0.02, 0.03...
* Thousandths: 0.001, 0.002, 0.003...

### Money Uses Decimals:
* 1 Rupee = Rs 1.00
* 50 cents = Rs 0.50
* 25 cents = Rs 0.25

### Try These Problems:
1. If you eat 2 slices of a pizza that has 8 equal slices, what fraction of the pizza did you eat?
2. Convert 3/5 to a decimal.
3. Which is larger: 0.7 or 2/3?
4. If a recipe calls for 3/4 cup of sugar and you're making half the recipe, how much sugar do you need?

Remember: Fractions and decimals are just different ways to show parts of a whole!`,
        videoUrl: "https://www.youtube.com/watch?v=4PGlp1UEaZ8"
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

