
import React from 'react';
import { AssetCategory } from '../../types';

interface AssetClassWidgetProps {
    category: AssetCategory;
    value: number;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const AssetClassWidget: React.FC<AssetClassWidgetProps> = ({ category, value, icon: Icon }) => {
    return (
        <div className="bg-muted p-4 rounded-xl flex items-center space-x-4">
            <div className="bg-background p-3 rounded-full">
                <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
                <p className="font-bold text-foreground">{category}</p>
                <p className="text-sm text-muted-foreground">
                    {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
            </div>
            <div className="text-right">
                <p className="font-bold text-foreground">Ver mais</p>
            </div>
        </div>
    );
};

export default AssetClassWidget;
