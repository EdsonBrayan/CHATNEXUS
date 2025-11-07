import React from 'react';
import { BellIcon } from './icons/BellIcon';

interface HeaderProps {
  userName: string;
  hasNotifications: boolean;
}

const Header: React.FC<HeaderProps> = ({ userName, hasNotifications }) => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Olá, {userName}!</h1>
        <p className="text-muted-foreground">Sua jornada financeira está incrível.</p>
      </div>
      <button className="relative p-2 rounded-full hover:bg-accent">
        <BellIcon className="w-6 h-6 text-muted-foreground" />
        {hasNotifications && (
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-destructive" />
        )}
      </button>
    </header>
  );
};

export default Header;
