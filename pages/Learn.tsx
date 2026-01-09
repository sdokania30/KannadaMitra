import React, { useState, useMemo } from 'react';
import { Flashcard, AppSettings } from '../types';
import { CATEGORIES } from '../constants';
import FlashcardComponent from '../components/Flashcard';
import { Filter, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  cards: Flashcard[];
  settings: AppSettings;
  onMaster: (id: number) => void;
  onAttempt: () => void;
}

const Learn: React.FC<Props> = ({ cards, settings, onMaster, onAttempt }) => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredCards = useMemo(() => {
    if (currentCategory === "All") return cards;
    return cards.filter(c => c.category === currentCategory);
  }, [cards, currentCategory]);

  const currentCard = filteredCards[currentIndex];

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredCards.length);
    onAttempt();
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleMaster = (id: number) => {
    onMaster(id);
    // Auto advance after mastering for better flow
    setTimeout(handleNext, 500);
  };

  return (
    <div className="flex flex-col min-h-screen pt-4 pb-28 px-4 bg-background dark:bg-darkBackground overflow-y-auto">
      {/* Header / Filter */}
      <div className="flex justify-between items-center mb-6">
        <div>
           <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Flashcards</h2>
           <p className="text-sm text-gray-500">{filteredCards.length} cards in deck</p>
        </div>
        
        <div className="relative">
            <select 
                value={currentCategory}
                onChange={(e) => { setCurrentCategory(e.target.value); setCurrentIndex(0); }}
                className="appearance-none bg-white dark:bg-darkSurface border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 py-2 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm font-medium"
            >
                {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <Filter size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Card Area */}
      <div className="flex-1 flex flex-col justify-center">
        {filteredCards.length > 0 ? (
            <>
                <FlashcardComponent 
                    card={currentCard} 
                    settings={settings}
                    onMaster={handleMaster}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
                
                {/* Navigation Controls */}
                <div className="flex justify-between items-center max-w-sm mx-auto w-full mt-4 px-4 pb-4">
                     <button 
                        onClick={handlePrev}
                        className="p-4 rounded-full bg-white dark:bg-darkSurface shadow-md border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 active:scale-95 transition-transform"
                        aria-label="Previous card"
                     >
                        <ChevronLeft size={24} />
                     </button>
                     <span className="text-sm font-medium text-gray-400">
                        {currentIndex + 1} / {filteredCards.length}
                     </span>
                     <button 
                        onClick={handleNext}
                        className="p-4 rounded-full bg-secondary text-white shadow-md shadow-orange-200 dark:shadow-none active:scale-95 transition-transform"
                        aria-label="Next card"
                     >
                        <ChevronRight size={24} />
                     </button>
                </div>
            </>
        ) : (
            <div className="text-center text-gray-500">
                <p>No cards found in this category.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Learn;