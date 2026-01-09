import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, CheckCircle, RotateCcw } from 'lucide-react';
import { Flashcard as FlashcardType, AppSettings } from '../types';

interface Props {
  card: FlashcardType;
  settings: AppSettings;
  onMaster: (id: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Flashcard: React.FC<Props> = ({ card, settings, onMaster, onNext, onPrev }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
  }, [card.id]);

  // Load voices robustly
  useEffect(() => {
    const loadVoices = () => {
      if ('speechSynthesis' in window) {
        setVoices(window.speechSynthesis.getVoices());
      }
    };
    
    loadVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const playAudio = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // Stop any current speech

    // 1. Content Strategy: Use 'spoken' field if available, else standard Kannada
    const primaryText = card.spoken || card.kannada;
    
    // 2. Sanitization: Remove punctuation (?, !, .) to prevent "Question Mark" readout
    const safeText = primaryText.replace(/[?.,!¿¡]/g, '').trim(); 
    const safeTransliteration = card.transliteration.replace(/[?.,!¿¡]/g, '').trim();

    const utterance = new SpeechSynthesisUtterance();
    
    // 3. Voice Selection Strategy
    // Priority: Kannada Voice -> Hindi Voice (often reads Kannada script ok) -> English Voice (reading Transliteration)
    const kannadaVoice = voices.find(v => v.lang.includes('kn'));
    const hindiVoice = voices.find(v => v.lang.includes('hi'));
    
    if (kannadaVoice) {
      utterance.voice = kannadaVoice;
      utterance.lang = 'kn-IN';
      utterance.text = safeText;
    } else if (hindiVoice) {
      // Hindi voices usually handle Devanagari/Dravidian scripts better than English voices
      utterance.voice = hindiVoice;
      utterance.lang = 'hi-IN';
      utterance.text = safeText;
    } else {
      // FALLBACK: If no Indian language engine is present, read the Transliteration.
      // This ensures the user hears the pronunciation even if the device can't read the script.
      utterance.text = safeTransliteration;
      utterance.lang = 'en-US'; // Use default English voice
    }

    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.volume = 1.0;

    window.speechSynthesis.speak(utterance);
  };

  // Swipe handlers for Touch
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  
  // Swipe handlers for Mouse (Desktop)
  const onMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left click held
        setTouchEnd(e.clientX);
    }
  };
  const onMouseUp = () => {
      onEndHandler();
      setTouchStart(null);
      setTouchEnd(null);
  };

  const onEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) onNext();
    if (isRightSwipe) onPrev();
  };

  return (
    <div 
      className="w-full max-w-sm mx-auto h-[55vh] max-h-[450px] min-h-[300px] perspective-1000 relative my-4"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onEndHandler}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={handleFlip}
      >
        {/* Front Face (Hindi) */}
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-darkSurface rounded-3xl shadow-xl border-2 border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center p-8 text-center select-none">
            <span className="text-sm text-gray-500 uppercase tracking-widest mb-4 font-semibold">{card.category}</span>
            <h2 className="text-5xl font-hindi font-bold text-gray-800 dark:text-gray-100 mb-6">{card.hindi}</h2>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-8">Tap to flip</p>
            
            {card.mastered && (
                 <div className="absolute top-4 right-4 text-success">
                    <CheckCircle size={24} fill="currentColor" className="text-white" />
                 </div>
            )}
        </div>

        {/* Back Face (Kannada) */}
        <div className="absolute w-full h-full backface-hidden bg-primary rotate-y-180 rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 text-center text-white select-none">
            <h2 className="text-5xl font-kannada font-bold mb-4">{card.kannada}</h2>
            
            {settings.showTransliteration && (
                 <p className="text-xl font-medium text-purple-200 mb-6 font-sans italic">{card.transliteration}</p>
            )}
            
            {card.tip && (
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm mb-6 max-w-xs">
                    <p className="text-sm text-purple-100">💡 {card.tip}</p>
                </div>
            )}

            <div className="flex gap-4 mt-4">
                <button 
                    onClick={playAudio}
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors active:scale-95"
                    aria-label="Play pronunciation"
                >
                    <Volume2 size={24} />
                </button>
                <button 
                    onClick={(e) => { e.stopPropagation(); onMaster(card.id); }}
                    className={`p-3 rounded-full transition-colors active:scale-95 flex items-center gap-2 ${card.mastered ? 'bg-success hover:bg-green-600' : 'bg-white/20 hover:bg-white/30'}`}
                >
                    <CheckCircle size={24} />
                </button>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Flashcard;