import React from 'react';
import { View } from '../types';
import { HomeIcon } from './icons/HomeIcon';
import { VaultIcon } from './icons/VaultIcon';
import { UserIcon } from './icons/UserIcon';
import { ChartIcon } from './icons/ChartIcon';

interface BottomNavBarProps {
  currentView: View;
  setView: (view: View) => void;
}

const navItems = [
  { view: 'dashboard', icon: HomeIcon, label: 'Início' },
  { view: 'goals', icon: VaultIcon, label: 'Metas' },
  { view: 'patrimony', icon: ChartIcon, label: 'Patrimônio' },
  { view: 'profile', icon: UserIcon, label: 'Perfil' },
];

const BottomNavBar: React.FC<BottomNavBarProps> = ({ currentView, setView }) => {
  return (
    <div className="sticky bottom-0 bg-background border-t border-gray-200">
      <div className="flex justify-around items-center h-20 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => setView(item.view as View)}
              className="flex flex-col items-center justify-center w-1/4"
            >
              <item.icon
                className={`w-6 h-6 mb-1 transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              />
              <span
                className={`text-xs font-semibold transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavBar;
