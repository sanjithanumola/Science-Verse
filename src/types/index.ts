export type ScienceCategory = 'physics' | 'chemistry' | 'biology' | 'astronomy' | 'earth' | 'all';

export interface ChemicalElement {
  number: number;
  symbol: string;
  name: string;
  atomicMass: number;
  period: number;
  group: number;
  category: 
    | 'alkali-metal'
    | 'alkaline-earth'
    | 'transition-metal'
    | 'post-transition-metal'
    | 'metalloid'
    | 'reactive-nonmetal'
    | 'noble-gas'
    | 'lanthanide'
    | 'actinide'
    | 'unknown';
  phase: 'Solid' | 'Liquid' | 'Gas' | 'Expected Solid' | 'Expected Gas';
  electronConfiguration: string;
  summary: string;
  everydayUses: string[];
  density?: number; // g/cm³
  meltingPoint?: number; // Kelvin
  boilingPoint?: number; // Kelvin
  discoveredBy?: string;
  yearDiscovered?: number | string;
}

export interface CelestialBody {
  id: string;
  name: string;
  type: 'star' | 'planet' | 'dwarf-planet' | 'moon';
  diameterKm: number;
  massKg: string;
  distanceFromSunMillionKm: number;
  orbitalPeriodDays: number;
  rotationPeriodHours: number;
  moonsCount: number;
  meanTempC: number;
  atmosphere: string[];
  color: string;
  orbitRadiusPx: number;
  sizePx: number;
  ring?: boolean;
  overview: string;
  keyFacts: string[];
  missions: string[];
}

export interface Experiment {
  id: string;
  title: string;
  category: 'physics' | 'chemistry' | 'biology';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tag: string;
  description: string;
  learningObjective: string;
  whatYouLearned: string;
  safetyNotes?: string;
}

export interface QuizQuestion {
  id: string;
  subject: 'physics' | 'chemistry' | 'biology' | 'astronomy' | 'earth';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface UserProgress {
  quizzesCompleted: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  experimentsCompleted: string[];
  bookmarkedElements: number[];
  completedQuizzes: string[];
  unlockedAchievements: string[];
  lastActiveDate: string;
  currentStreak: number;
}
