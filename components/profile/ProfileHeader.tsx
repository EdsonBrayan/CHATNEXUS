
import React from 'react';
import { UserLevel } from '../../types';
import { XPIcon } from '../icons/XPIcon';

interface ProfileHeaderProps {
  name: string;
  level: UserLevel;
  currentXp: number;
  nextLevelXp: number;
}

const levelColors = {
  organizador: 'bg-blue-500',
  construtor: 'bg-green-500',
  estrategista: 'bg-purple-500',
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, level, currentXp, nextLevelXp }) => {
  const progress = (currentXp / nextLevelXp) * 100;

  return (
    <div className="text-center space-y-4">
      <div className="relative inline-block">
        <img
          src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${name}`}
          alt="Avatar do usuário"
          className="w-24 h-24 rounded-full border-4 border-primary"
        />
      </div>
      <h1 className="text-3xl font-bold text-foreground">{name}</h1>
      <div className={`inline-block px-4 py-1 text-sm font-semibold text-white rounded-full ${levelColors[level]}`}>
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </div>
      
      <div className="px-4">
          <div className="flex justify-between items-center mb-1 text-sm font-medium text-muted-foreground">
              <div className="flex items-center">
                <XPIcon className="w-5 h-5 mr-1" />
                <span>XP</span>
              </div>
              <span>{currentXp} / {nextLevelXp}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
