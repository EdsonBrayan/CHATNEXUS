
import React from 'react';
import { Mission } from '../../types';
import { CheckIcon } from '../icons/CheckIcon';
import { XPIcon } from '../icons/XPIcon';

interface MissionsWidgetProps {
  missions: Mission[];
}

const MissionsWidget: React.FC<MissionsWidgetProps> = ({ missions }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground mb-3">Missões Ativas</h2>
      <div className="space-y-3">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className={`bg-muted p-4 rounded-xl flex items-center space-x-4 ${mission.completed ? 'opacity-50' : ''}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${mission.completed ? 'bg-green-500' : 'bg-primary'}`}>
              {mission.completed ? (
                <CheckIcon className="w-6 h-6 text-white" />
              ) : (
                <XPIcon className="w-8 h-8"/>
              )}
            </div>
            <div className="flex-1">
              <p className="font-bold text-foreground">{mission.title}</p>
              <p className="text-sm text-muted-foreground">{mission.description}</p>
            </div>
            {!mission.completed && (
              <div className="flex items-center space-x-1 font-bold text-yellow-400">
                <span>+{mission.xp}</span>
                <XPIcon className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionsWidget;
