import React from 'react';
import { Flashcard, UserProgress } from '../types';
import { Flame, Trophy, Target, ArrowRight, BrainCircuit } from 'lucide-react';

interface Props {
  progress: UserProgress;
  cards: Flashcard[];
  onStartLearning: () => void;
}

const Dashboard: React.FC<Props> = ({ progress, cards, onStartLearning }) => {
  const masteredCount = cards.filter(c => c.mastered).length;
  const totalCards = cards.length;
  const progressPercent = Math.round((masteredCount / totalCards) * 100);

  return (
    <div className="p-6 pb-24 space-y-6 animate-fade-in">
      {/* Brand Header */}
      <div className="flex items-center gap-4 mb-2">
        {/* Custom Logo: Combining Hindi 'Ka' and Kannada 'Ka' */}
        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200 dark:shadow-none relative overflow-hidden">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/10 rounded-full blur-xl"></div>
            <div className="relative flex items-baseline">
                <span className="text-xl font-hindi font-bold text-white/90 -mr-1">क</span>
                <span className="text-2xl font-kannada font-bold text-secondary">ಕ</span>
            </div>
        </div>
        <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Kannada Mitra</h1>
            <p className="text-xs text-primary font-medium dark:text-purple-300">हिंदी से कन्नड़ सीखें <span className="wave">🇮🇳</span></p>
        </div>
      </div>

      <div className="space-y-1">
         <p className="text-gray-500 dark:text-gray-400 text-sm">Namaskara! Ready to learn today?</p>
      </div>

      {/* Main Goal Card */}
      <div className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-6 text-white shadow-lg shadow-purple-200 dark:shadow-none relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
        
        <div className="flex justify-between items-start mb-4 relative z-10">
          <div>
            <h3 className="font-semibold text-purple-100 text-sm uppercase tracking-wider">Daily Goal</h3>
            <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-bold">{progress.dailyProgress}</span>
                <span className="text-purple-200">/ {progress.dailyGoal} cards</span>
            </div>
          </div>
          <div className="bg-white/20 p-2 rounded-lg">
            <Target size={24} />
          </div>
        </div>
        <div className="w-full bg-black/20 rounded-full h-2 relative z-10">
          <div 
            className="bg-secondary h-2 rounded-full transition-all duration-1000" 
            style={{ width: `${Math.min(100, (progress.dailyProgress / progress.dailyGoal) * 100)}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-darkSurface p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex items-center gap-2 text-orange-500 mb-2">
            <Flame size={20} fill="currentColor" />
            <span className="font-medium">Streak</span>
          </div>
          <p className="text-2xl font-bold dark:text-white">{progress.dailyStreak} <span className="text-sm font-normal text-gray-400">days</span></p>
        </div>
        <div className="bg-white dark:bg-darkSurface p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex items-center gap-2 text-yellow-500 mb-2">
            <Trophy size={20} />
            <span className="font-medium">Mastery</span>
          </div>
          <p className="text-2xl font-bold dark:text-white">{progressPercent}% <span className="text-sm font-normal text-gray-400">done</span></p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">Start Learning</h3>
        
        <button 
          onClick={onStartLearning}
          className="w-full bg-white dark:bg-darkSurface p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center border border-blue-100 dark:border-blue-900/30">
              <span className="text-xl font-hindi font-bold">क</span>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-800 dark:text-white">Learn New Words</h4>
              <p className="text-sm text-gray-500">Expand your vocabulary</p>
            </div>
          </div>
          <ArrowRight className="text-gray-300 group-hover:text-primary transition-colors" />
        </button>

         <button 
          onClick={() => document.getElementById('tab-quiz')?.click()} 
          className="w-full bg-white dark:bg-darkSurface p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center border border-green-100 dark:border-green-900/30">
              <BrainCircuit size={24} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-800 dark:text-white">Practice Quiz</h4>
              <p className="text-sm text-gray-500">Test your knowledge</p>
            </div>
          </div>
          <ArrowRight className="text-gray-300 group-hover:text-primary transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;