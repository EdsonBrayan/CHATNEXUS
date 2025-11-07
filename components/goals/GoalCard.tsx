import React from 'react';
import { Goal } from '../../types';

interface GoalCardProps {
    goal: Goal;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
    const progress = Math.min((goal.currentAmount / goal.targetAmount) * 100, 100);

    return (
        <div className="bg-muted p-4 rounded-xl">
            <div className="flex items-start space-x-3">
                <div className="text-2xl mt-1">{goal.icon}</div>
                <div className="flex-1">
                    <p className="font-bold text-foreground">{goal.name}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 my-2">
                        <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-secondary">
                            {goal.currentAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                        {' / '}
                        {goal.targetAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GoalCard;
