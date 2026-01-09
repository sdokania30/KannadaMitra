import React from 'react';
import { UserProgress, Flashcard } from '../types';
import { CATEGORIES } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';

interface Props {
  progress: UserProgress;
  cards: Flashcard[];
}

const Stats: React.FC<Props> = ({ progress, cards }) => {
  const masteredCount = cards.filter(c => c.mastered).length;
  const totalCount = cards.length;
  const remainingCount = totalCount - masteredCount;

  const pieData = [
    { name: 'Mastered', value: masteredCount, color: '#4CAF50' },
    { name: 'Learning', value: remainingCount, color: '#e0e0e0' },
  ];

  const categoryData = CATEGORIES
    .filter(c => c !== "All")
    .map(cat => {
        const catCards = cards.filter(c => c.category === cat);
        const catMastered = catCards.filter(c => c.mastered).length;
        return {
            name: cat.split(' ')[0], // Shorten name for chart
            total: catCards.length,
            mastered: catMastered
        };
    });

  return (
    <div className="p-6 pb-24 space-y-8 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Your Progress</h1>

      {/* Overall Pie */}
      <div className="bg-white dark:bg-darkSurface rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-4">Mastery Overview</h3>
        <div className="h-48 relative">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={pieData}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-800 dark:text-white">{masteredCount}</span>
                <span className="text-xs text-gray-400 uppercase">Mastered</span>
            </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white dark:bg-darkSurface rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
         <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-6">By Category</h3>
         <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" hide />
                    {/* Recharts types can be tricky with vertical layout, simplifying for demo */}
                    <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        cursor={{fill: 'transparent'}}
                    />
                    <Bar dataKey="total" fill="#f3f4f6" radius={[0, 4, 4, 0]} barSize={20} stackId="a" />
                    <Bar dataKey="mastered" fill="#6200ea" radius={[0, 4, 4, 0]} barSize={20} stackId="a" />
                </BarChart>
            </ResponsiveContainer>
         </div>
      </div>
      
       {/* Simple Stats Grid */}
       <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-2xl">
                <p className="text-orange-600 dark:text-orange-400 text-sm font-medium">Accuracy</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    {progress.totalAttempts > 0 
                        ? Math.round((progress.correctAttempts / progress.totalAttempts) * 100) 
                        : 0}%
                </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl">
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Total Reviews</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{progress.totalAttempts}</p>
            </div>
       </div>

    </div>
  );
};

export default Stats;
