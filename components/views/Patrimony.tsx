
import React from 'react';
import TotalPatrimonyChart from '../patrimony/TotalPatrimonyChart';
import AssetClassWidget from '../patrimony/AssetClassWidget';
import { Asset, AssetCategory } from '../../types';
import { BinanceIcon } from '../icons/BinanceIcon';
import { XPIcon } from '../icons/XPIcon';
import { HouseIcon } from '../icons/HouseIcon';

interface PatrimonyProps {
    assets: Asset[];
}

const Patrimony: React.FC<PatrimonyProps> = ({ assets }) => {
    const totalPatrimony = assets.reduce((sum, asset) => sum + asset.value, 0);

    const patrimonyHistory = [
        totalPatrimony * 0.92,
        totalPatrimony * 0.94,
        totalPatrimony * 0.95,
        totalPatrimony * 0.93,
        totalPatrimony * 0.96,
        totalPatrimony * 0.98,
        totalPatrimony
    ];
    
    const getIconForCategory = (category: AssetCategory) => {
        switch(category) {
            case AssetCategory.VariableIncome:
            case AssetCategory.FixedIncome:
                return XPIcon;
            case AssetCategory.Crypto:
                return BinanceIcon;
            case AssetCategory.RealEstate:
                return HouseIcon;
            default:
                return XPIcon;
        }
    }

    const aggregatedAssets = assets.reduce((acc, asset) => {
        if (!acc[asset.category]) {
            acc[asset.category] = { value: 0, icon: getIconForCategory(asset.category) };
        }
        acc[asset.category].value += asset.value;
        return acc;
    }, {} as { [key in AssetCategory]: { value: number, icon: React.FC<React.SVGProps<SVGSVGElement>> } });

    return (
        <div className="p-5 space-y-6">
            <h1 className="text-2xl font-bold">Patrimônio</h1>
            <TotalPatrimonyChart total={totalPatrimony} history={patrimonyHistory} />
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Distribuição de Ativos</h2>
                {Object.entries(aggregatedAssets).map(([category, data]) => (
                     <AssetClassWidget key={category} category={category as AssetCategory} value={data.value} icon={data.icon} />
                ))}
            </div>
        </div>
    );
};

export default Patrimony;
