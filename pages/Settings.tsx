import React from 'react';
import { AppSettings } from '../types';
import { Moon, Sun, Volume2, Type, RefreshCcw } from 'lucide-react';

interface Props {
  settings: AppSettings;
  toggleDarkMode: () => void;
  resetProgress: () => void;
}

const Settings: React.FC<Props> = ({ settings, toggleDarkMode, resetProgress }) => {
  return (
    <div className="p-6 pb-24 space-y-8 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h1>

      {/* Appearance */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Appearance</h3>
        
        <div className="bg-white dark:bg-darkSurface rounded-2xl p-1 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between">
           <button 
             onClick={toggleDarkMode}
             className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${!settings.darkMode ? 'bg-white shadow text-primary' : 'text-gray-400'}`}
           >
             <Sun size={20} /> Light
           </button>
           <button 
             onClick={toggleDarkMode}
             className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${settings.darkMode ? 'bg-gray-700 text-white shadow' : 'text-gray-400'}`}
           >
             <Moon size={20} /> Dark
           </button>
        </div>
      </section>

      {/* Preferences */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Preferences</h3>
        
        <div className="bg-white dark:bg-darkSurface rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800">
           <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                    <Volume2 size={20} />
                 </div>
                 <span className="font-medium text-gray-700 dark:text-gray-200">Audio Autoplay</span>
              </div>
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-60">
                  <span className={`block w-6 h-6 bg-white rounded-full shadow transform transition duration-200 translate-x-6`}></span>
              </div>
           </div>

           <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                    <Type size={20} />
                 </div>
                 <span className="font-medium text-gray-700 dark:text-gray-200">Show Transliteration</span>
              </div>
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-success cursor-pointer">
                  <span className={`block w-6 h-6 bg-white rounded-full shadow transform transition duration-200 translate-x-6`}></span>
              </div>
           </div>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="space-y-4">
         <button 
            onClick={resetProgress}
            className="w-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
         >
            <RefreshCcw size={20} />
            Reset All Progress
         </button>
         <p className="text-center text-xs text-gray-400">Version 1.0.0 • Made with ❤️</p>
      </section>
    </div>
  );
};

export default Settings;
