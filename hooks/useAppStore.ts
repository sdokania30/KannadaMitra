import { useState, useEffect, useCallback } from 'react';
import { Flashcard, UserProgress, AppSettings } from '../types';
import { INITIAL_CARDS } from '../constants';

const STORAGE_KEY = 'kannada_learner_data';

const DEFAULT_SETTINGS: AppSettings = {
  darkMode: false,
  showTransliteration: true,
  audioEnabled: true,
  dailyGoalTarget: 10,
};

const DEFAULT_PROGRESS: UserProgress = {
  cardsMastered: [],
  dailyStreak: 0,
  lastLoginDate: new Date().toISOString().split('T')[0],
  totalAttempts: 0,
  correctAttempts: 0,
  dailyGoal: 10,
  dailyProgress: 0,
  lastDailyReset: new Date().toISOString().split('T')[0],
};

export const useAppStore = () => {
  const [cards, setCards] = useState<Flashcard[]>(INITIAL_CARDS);
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from storage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        
        // Merge saved mastery status with current INITIAL_CARDS content
        // This ensures new cards added to code appear for existing users
        if (parsed.cards) {
            const mergedCards = INITIAL_CARDS.map(initialCard => {
                const savedCard = parsed.cards.find((c: Flashcard) => c.id === initialCard.id);
                // Preserve mastery status if card existed, otherwise use default
                return savedCard ? { ...initialCard, mastered: savedCard.mastered } : initialCard;
            });
            setCards(mergedCards);
        } else {
            setCards(INITIAL_CARDS);
        }

        if (parsed.progress) {
            // Check for streak updates
            const today = new Date().toISOString().split('T')[0];
            const lastLogin = parsed.progress.lastLoginDate;
            let streak = parsed.progress.dailyStreak;
            
            // If logged in yesterday, increment streak logic is handled on completion,
            // but if missed a day, reset streak.
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];

            if (lastLogin !== today && lastLogin !== yesterdayStr) {
                streak = 0;
            }
            
            // Reset daily progress if new day
            let dailyProgress = parsed.progress.dailyProgress;
            if (parsed.progress.lastDailyReset !== today) {
                dailyProgress = 0;
            }

            setProgress({ 
                ...parsed.progress, 
                dailyStreak: streak, 
                lastLoginDate: today,
                dailyProgress,
                lastDailyReset: today
            });
        }
        if (parsed.settings) setSettings(parsed.settings);
      } catch (e) {
        console.error("Failed to load save data", e);
        // Fallback to initial cards if load fails
        setCards(INITIAL_CARDS);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to storage on change
  useEffect(() => {
    if (isLoaded) {
      // We save the full cards state including mastery status
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ cards, progress, settings }));
    }
  }, [cards, progress, settings, isLoaded]);

  // Apply Dark Mode
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  const toggleMastered = useCallback((cardId: number) => {
    setCards(prevCards => prevCards.map(c => 
      c.id === cardId ? { ...c, mastered: !c.mastered } : c
    ));
    
    setProgress(prev => {
      const isMastering = !prev.cardsMastered.includes(cardId);
      const newMastered = isMastering 
        ? [...prev.cardsMastered, cardId]
        : prev.cardsMastered.filter(id => id !== cardId);
        
      return {
        ...prev,
        cardsMastered: newMastered
      };
    });
  }, []);

  const recordAttempt = useCallback((success: boolean) => {
    setProgress(prev => {
        const today = new Date().toISOString().split('T')[0];
        const newDailyProgress = prev.dailyProgress + 1;
        let newStreak = prev.dailyStreak;
        
        // Increment streak if hitting goal for the first time today
        if (newDailyProgress === settings.dailyGoalTarget && prev.dailyProgress < settings.dailyGoalTarget) {
            newStreak += 1;
        }

        return {
            ...prev,
            totalAttempts: prev.totalAttempts + 1,
            correctAttempts: success ? prev.correctAttempts + 1 : prev.correctAttempts,
            dailyProgress: newDailyProgress,
            dailyStreak: newStreak,
            lastDailyReset: today
        };
    });
  }, [settings.dailyGoalTarget]);

  const toggleDarkMode = useCallback(() => {
    setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }));
  }, []);

  const setDailyGoal = useCallback((target: number) => {
    setSettings(prev => ({ ...prev, dailyGoalTarget: target }));
  }, []);

  const resetProgress = useCallback(() => {
    if (window.confirm("Are you sure you want to reset all progress?")) {
        setCards(INITIAL_CARDS);
        setProgress(DEFAULT_PROGRESS);
        // Force clear storage to ensure clean slate
        localStorage.removeItem(STORAGE_KEY);
        window.location.reload(); 
    }
  }, []);

  return {
    cards,
    progress,
    settings,
    isLoaded,
    toggleMastered,
    recordAttempt,
    toggleDarkMode,
    setDailyGoal,
    resetProgress
  };
};