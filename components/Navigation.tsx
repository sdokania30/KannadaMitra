import React from 'react';
import { Home, BookOpen, BrainCircuit, Settings, BarChart2 } from 'lucide-react';

type Tab = 'home' | 'learn' | 'quiz' | 'stats' | 'settings';

interface Props {
  currentTab: Tab;
  setTab: (tab: Tab) => void;
}

const Navigation: React.FC<Props> = ({ currentTab, setTab }) => {
  const navItems: { id: Tab; icon: React.ReactNode; label: string }[] = [
    { id: 'home', icon: <Home size={22} />, label: 'Home' },
    { id: 'learn', icon: <BookOpen size={22} />, label: 'Learn' },
    { id: 'quiz', icon: <BrainCircuit size={22} />, label: 'Quiz' },
    { id: 'stats', icon: <BarChart2 size={22} />, label: 'Stats' },
    { id: 'settings', icon: <Settings size={22} />, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-surface dark:bg-darkSurface border-t border-gray-200 dark:border-gray-800 pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
              currentTab === item.id
                ? 'text-primary dark:text-primary font-medium'
                : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
            }`}
          >
            {item.icon}
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
