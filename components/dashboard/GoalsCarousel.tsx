import React from 'react';
import { Goal } from '../../types';
import GoalCard from '../goals/GoalCard';

interface GoalsCarouselProps {
    goals: Goal[];
}

const GoalsCarousel: React.FC<GoalsCarouselProps> = ({ goals }) => {
    return (
        <div>
            <h2 className="text-xl font-bold text-foreground mb-3">Minhas Metas</h2>
            <div className="flex overflow-x-auto space-x-4 pb-2 -mx-5 px-5">
                {goals.map(goal => (
                    <div key={goal.id} className="min-w-[280px] flex-shrink-0">
                        <GoalCard goal={goal} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GoalsCarousel;
