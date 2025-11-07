
import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

interface TotalPatrimonyChartProps {
    total: number;
    history: number[];
}

const TotalPatrimonyChart: React.FC<TotalPatrimonyChartProps> = ({ total, history }) => {
    const data = history.map((value, index) => ({ name: `M${index + 1}`, value }));

    return (
        <div className="bg-muted p-6 rounded-2xl">
            <p className="text-muted-foreground">Patrimônio Total</p>
            <p className="text-4xl font-bold text-foreground my-1">
                {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
            <div className="h-40 -mx-6">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'var(--background)',
                                border: '1px solid var(--border)',
                                color: 'var(--foreground)'
                            }}
                        />
                        <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                        <Line type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TotalPatrimonyChart;
