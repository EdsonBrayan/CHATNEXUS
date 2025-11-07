
import React, { useState } from 'react';
import { Goal, GoalCategory } from '../../types';
import { TravelIcon } from '../icons/TravelIcon';
import { EmergencyIcon } from '../icons/EmergencyIcon';
import { HomeGoalIcon } from '../icons/HomeGoalIcon';
import { EducationIcon } from '../icons/EducationIcon';
import { SparkleIcon } from '../icons/SparkleIcon';
import { GoogleGenAI } from '@google/genai';

interface AddGoalModalProps {
    onClose: () => void;
    onAddGoal: (goal: Omit<Goal, 'id' | 'currentAmount'>) => void;
}

const goalCategories = [
    { name: GoalCategory.Travel, icon: '✈️', component: TravelIcon },
    { name: GoalCategory.EmergencyFund, icon: '🛡️', component: EmergencyIcon },
    { name: GoalCategory.RealEstate, icon: '🏠', component: HomeGoalIcon },
    { name: GoalCategory.Education, icon: '🎓', component: EducationIcon },
];

const AddGoalModal: React.FC<AddGoalModalProps> = ({ onClose, onAddGoal }) => {
    const [name, setName] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const [category, setCategory] = useState<GoalCategory | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateSuggestion = async () => {
        setIsLoading(true);
        try {
            // FIX: Initialize GoogleGenAI with apiKey from environment variables.
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: "Sugira um nome criativo para uma meta financeira de viagem para a Europa. Apenas o nome."
            });
            // FIX: Access the generated text directly from the 'text' property.
            setName(response.text.replace(/\"/g, "").trim());
        } catch (error) {
            console.error("Erro ao gerar sugestão:", error);
        }
        setIsLoading(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && targetAmount && category) {
            const selectedCategory = goalCategories.find(c => c.name === category);
            onAddGoal({
                name,
                targetAmount: parseFloat(targetAmount),
                category,
                icon: selectedCategory?.icon || '🎯',
            });
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-background rounded-2xl p-6 w-11/12 max-w-md">
                <h2 className="text-xl font-bold mb-4">Nova Meta</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="goal-name" className="block text-sm font-medium text-muted-foreground mb-1">Nome da Meta</label>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                id="goal-name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-muted border border-border rounded-md px-3 py-2"
                                required
                            />
                            <button type="button" onClick={handleGenerateSuggestion} disabled={isLoading} className="p-2 bg-primary rounded-md disabled:opacity-50">
                                <SparkleIcon className="w-5 h-5 text-primary-foreground" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="goal-amount" className="block text-sm font-medium text-muted-foreground mb-1">Valor Alvo</label>
                        <input
                            type="number"
                            id="goal-amount"
                            value={targetAmount}
                            onChange={(e) => setTargetAmount(e.target.value)}
                            className="w-full bg-muted border border-border rounded-md px-3 py-2"
                            placeholder="R$ 10.000,00"
                            required
                        />
                    </div>
                    <div>
                        <p className="block text-sm font-medium text-muted-foreground mb-2">Categoria</p>
                        <div className="grid grid-cols-2 gap-3">
                            {goalCategories.map((cat) => (
                                <button
                                    key={cat.name}
                                    type="button"
                                    onClick={() => setCategory(cat.name)}
                                    className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 ${category === cat.name ? 'border-primary bg-primary/10' : 'border-border bg-muted'}`}
                                >
                                    <cat.component className="w-6 h-6 mb-1" />
                                    <span className="text-xs">{cat.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-end space-x-3 pt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded-md font-semibold">Cancelar</button>
                        <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddGoalModal;
