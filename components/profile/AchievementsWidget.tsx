
import React from 'react';
import { Achievement } from '../../types';

interface AchievementsWidgetProps {
  achievements: Achievement[];
}

const AchievementsWidget: React.FC<AchievementsWidgetProps> = ({ achievements }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-3">Conquistas</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="flex flex-col items-center text-center">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center bg-muted transition-all duration-300 ${
                achievement.unlocked ? 'border-4 border-yellow-400' : 'opacity-40'
              }`}
            >
              <achievement.icon className={`w-8 h-8 ${achievement.unlocked ? 'text-yellow-400' : 'text-muted-foreground'}`} />
            </div>
            <p className="text-xs mt-2 font-semibold text-foreground">{achievement.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsWidget;
