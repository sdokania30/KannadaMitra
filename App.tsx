import React, { useState } from 'react';
import { useAppStore } from './hooks/useAppStore';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import Settings from './pages/Settings';
import Stats from './pages/Stats';

type Tab = 'home' | 'learn' | 'quiz' | 'stats' | 'settings';

function App() {
  const { 
    cards, 
    progress, 
    settings, 
    toggleMastered, 
    recordAttempt, 
    toggleDarkMode, 
    resetProgress,
    isLoaded 
  } = useAppStore();

  const [activeTab, setActiveTab] = useState<Tab>('home');

  if (!isLoaded) return <div className="flex h-screen items-center justify-center bg-primary text-white">Loading...</div>;

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard 
                  progress={progress} 
                  cards={cards} 
                  onStartLearning={() => setActiveTab('learn')} 
               />;
      case 'learn':
        return <Learn 
                  cards={cards} 
                  settings={settings}
                  onMaster={toggleMastered}
                  onAttempt={() => recordAttempt(true)} // Simple attempt tracking for flashcards
               />;
      case 'quiz':
        return <Quiz 
                  cards={cards} 
                  onComplete={(score, total) => {
                      recordAttempt(score > 0); // Logic could be more complex
                  }} 
               />;
      case 'stats':
        return <Stats progress={progress} cards={cards} />;
      case 'settings':
        return <Settings 
                  settings={settings} 
                  toggleDarkMode={toggleDarkMode}
                  resetProgress={resetProgress}
               />;
      default:
        return <Dashboard progress={progress} cards={cards} onStartLearning={() => setActiveTab('learn')} />;
    }
  };

  return (
    <div className={`min-h-screen bg-background dark:bg-darkBackground transition-colors duration-300 ${settings.darkMode ? 'dark' : ''}`}>
      <main className="max-w-md mx-auto bg-white dark:bg-darkBackground min-h-screen shadow-2xl relative pb-16">
        {renderContent()}
        <Navigation currentTab={activeTab} setTab={setActiveTab} />
      </main>
      
      {/* Invisible buttons for programmatic navigation references if needed */}
      <button id="tab-quiz" className="hidden" onClick={() => setActiveTab('quiz')}></button>
    </div>
  );
}

export default App;