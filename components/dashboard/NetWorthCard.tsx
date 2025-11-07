import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface NetWorthCardProps {
    amount: number;
    history: number[];
}

const NetWorthCard: React.FC<NetWorthCardProps> = ({ amount, history }) => {
    const data = history.map((value, index) => ({ name: `Day ${index + 1}`, value }));
    const variationAmount = 1230.10;
    const variationPercentage = 1.6;

    return (
        <div className="bg-muted p-6 rounded-2xl">
            <p className="text-muted-foreground">Patrimônio Líquido</p>
            <p className="text-4xl font-bold text-foreground my-1">
                {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
            <div className="h-16 -mx-6">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="flex items-center space-x-2 text-sm">
                <p className="text-muted-foreground">Variação (7d):</p>
                <p className="font-semibold text-green-500">
                    + {variationAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} ({variationPercentage}%)
                </p>
            </div>
        </div>
    );
};

export default NetWorthCard;
