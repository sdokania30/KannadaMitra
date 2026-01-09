import React, { useState, useEffect } from 'react';
import { Flashcard } from '../types';
import { CheckCircle, XCircle, RefreshCw, Volume2 } from 'lucide-react';

interface Props {
  cards: Flashcard[];
  onComplete: (score: number, total: number) => void;
}

const Quiz: React.FC<Props> = ({ cards, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizCards, setQuizCards] = useState<Flashcard[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Initialize Quiz & Load Voices
  useEffect(() => {
    restartQuiz();

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
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const restartQuiz = () => {
    const shuffled = [...cards].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuizCards(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    if(shuffled.length > 0) generateOptions(shuffled[0], cards);
  };

  const generateOptions = (correctCard: Flashcard, allCards: Flashcard[]) => {
    const distractors = allCards
        .filter(c => c.id !== correctCard.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(c => c.transliteration);
    
    const allOptions = [...distractors, correctCard.transliteration].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
  };

  const handleOptionClick = (option: string) => {
    if (selectedOption) return; // Prevent double click
    setSelectedOption(option);

    const isCorrect = option === quizCards[currentQuestionIndex].transliteration;
    if (isCorrect) {
        setScore(s => s + 1);
        // Play audio on correct selection with robust fallback
        const card = quizCards[currentQuestionIndex];
        playAudio(card.spoken || card.kannada, card.transliteration);
    }

    setTimeout(() => {
        if (currentQuestionIndex < quizCards.length - 1) {
            const nextIndex = currentQuestionIndex + 1;
            setCurrentQuestionIndex(nextIndex);
            setSelectedOption(null);
            generateOptions(quizCards[nextIndex], cards);
        } else {
            setShowResult(true);
            onComplete(isCorrect ? score + 1 : score, quizCards.length);
        }
    }, 1500);
  };

  const playAudio = (text: string, transliteration: string) => {
    if (!('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();

    // Remove punctuation
    const safeText = text.replace(/[?.,!¿¡]/g, '').trim();
    const safeTransliteration = transliteration.replace(/[?.,!¿¡]/g, '').trim();

    const utterance = new SpeechSynthesisUtterance();
    
    const kannadaVoice = voices.find(v => v.lang.includes('kn'));
    const hindiVoice = voices.find(v => v.lang.includes('hi'));
    
    if (kannadaVoice) {
      utterance.voice = kannadaVoice;
      utterance.lang = 'kn-IN';
      utterance.text = safeText;
    } else if (hindiVoice) {
      utterance.voice = hindiVoice;
      utterance.lang = 'hi-IN';
      utterance.text = safeText;
    } else {
      // Fallback: Read transliteration if script cannot be read by engine
      utterance.text = safeTransliteration;
      utterance.lang = 'en-US';
    }

    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  if (quizCards.length === 0) return <div className="p-8 text-center">Loading quiz...</div>;

  if (showResult) {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6 animate-fade-in pb-24">
            <div className="bg-white dark:bg-darkSurface w-full max-w-sm rounded-3xl p-8 shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Quiz Complete!</h2>
                <div className="text-6xl mb-6">
                    {score / quizCards.length > 0.7 ? '🎉' : '📚'}
                </div>
                <p className="text-gray-500 mb-2">You scored</p>
                <p className="text-4xl font-bold text-primary mb-8">{score} / {quizCards.length}</p>
                
                <button 
                    onClick={restartQuiz}
                    className="w-full bg-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors"
                >
                    <RefreshCw size={20} /> Try Again
                </button>
            </div>
        </div>
    );
  }

  const currentCard = quizCards[currentQuestionIndex];

  return (
    <div className="flex flex-col h-screen pt-4 pb-24 px-4">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Spoken Quiz</h2>
        <span className="text-sm font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
            {currentQuestionIndex + 1} / {quizCards.length}
        </span>
      </div>

      <div className="flex-1 flex flex-col max-w-md mx-auto w-full">
        {/* Question Card */}
        <div className="bg-white dark:bg-darkSurface rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 mb-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">How do you say this?</span>
            <h3 className="text-4xl font-hindi font-bold mt-4 text-gray-800 dark:text-gray-100">{currentCard.hindi}</h3>
        </div>

        {/* Options */}
        <div className="space-y-3">
            {options.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrect = option === currentCard.transliteration;
                const showCorrect = selectedOption && isCorrect;
                const showWrong = isSelected && !isCorrect;

                let btnClass = "bg-white dark:bg-darkSurface border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary/50";
                
                if (showCorrect) btnClass = "bg-green-50 border-green-500 text-green-700 dark:bg-green-900/20 dark:text-green-300";
                else if (showWrong) btnClass = "bg-red-50 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-300";
                else if (selectedOption && !isCorrect && option === currentCard.transliteration) btnClass = "bg-green-50 border-green-500 text-green-700 dark:bg-green-900/20 dark:text-green-300";

                return (
                    <button
                        key={idx}
                        disabled={!!selectedOption}
                        onClick={() => handleOptionClick(option)}
                        className={`w-full p-5 rounded-xl border-2 text-left text-lg font-sans font-medium transition-all ${btnClass} flex justify-between items-center shadow-sm`}
                    >
                        {option}
                        {showCorrect && <CheckCircle size={20} className="text-green-600 dark:text-green-400" />}
                        {showWrong && <XCircle size={20} className="text-red-500 dark:text-red-400" />}
                    </button>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;