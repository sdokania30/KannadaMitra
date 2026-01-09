export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Flashcard {
  id: number;
  category: string;
  hindi: string;
  kannada: string;
  transliteration: string;
  tip?: string;
  difficulty: Difficulty;
  mastered: boolean;
  spoken?: string;
}

export interface UserProgress {
  cardsMastered: number[]; // IDs of mastered cards
  dailyStreak: number;
  lastLoginDate: string;
  totalAttempts: number;
  correctAttempts: number;
  dailyGoal: number;
  dailyProgress: number; // Cards reviewed today
  lastDailyReset: string;
}

export interface AppSettings {
  darkMode: boolean;
  showTransliteration: boolean;
  audioEnabled: boolean;
  dailyGoalTarget: number;
}

export interface StoreState {
  cards: Flashcard[];
  progress: UserProgress;
  settings: AppSettings;
  
  // Actions
  toggleMastered: (cardId: number) => void;
  recordAttempt: (success: boolean) => void;
  toggleDarkMode: () => void;
  setDailyGoal: (target: number) => void;
  resetProgress: () => void;
}