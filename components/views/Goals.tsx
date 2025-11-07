
import React, { useState } from 'react';
import { Goal } from '../../types';
import GoalCard from '../goals/GoalCard';
import AddGoalModal from '../goals/AddGoalModal';
import { PlusIcon } from '../icons/PlusIcon';

interface GoalsProps {
    goals: Goal[];
    setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
}

const Goals: React.FC<GoalsProps> = ({ goals, setGoals }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddGoal = (newGoal: Omit<Goal, 'id' | 'currentAmount'>) => {
        const goalToAdd: Goal = {
            ...newGoal,
            id: (goals.length + 1).toString(),
            currentAmount: 0,
        };
        setGoals([...goals, goalToAdd]);
    };

    return (
        <div className="p-5 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Minhas Metas</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary text-primary-foreground p-2 rounded-full"
                    aria-label="Adicionar nova meta"
                >
                    <PlusIcon className="w-6 h-6" />
                </button>
            </div>

            <div className="space-y-4">
                {goals.map(goal => (
                    <GoalCard key={goal.id} goal={goal} />
                ))}
            </div>

            {isModalOpen && (
                <AddGoalModal
                    onClose={() => setIsModalOpen(false)}
                    onAddGoal={handleAddGoal}
                />
            )}
        </div>
    );
};

export default Goals;
