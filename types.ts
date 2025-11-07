import React from 'react';

export type View = 'dashboard' | 'goals' | 'profile' | 'patrimony';

// FIX: Define and export GoalCategory enum.
export enum GoalCategory {
    Travel = 'Viagem',
    EmergencyFund = 'Fundo de Emergência',
    RealEstate = 'Imóvel',
    Education = 'Educação',
    Other = 'Outro',
}

export interface Goal {
    id: string;
    name: string;
    icon: string; // Using string for emoji icons
    currentAmount: number;
    targetAmount: number;
    // FIX: Add optional category to support different usages of Goal.
    category?: GoalCategory;
}

export interface PendingBill {
    name: string;
    dueDate: Date;
    amount: number;
}

// FIX: Define and export Account interface.
export interface Account {
    id: string;
    bankName: 'Nubank' | 'Itaú' | 'Bradesco';
    balance: number;
}

// FIX: Define and export TransactionCategory enum.
export enum TransactionCategory {
    Food = 'Food',
    Transport = 'Transport',
    Leisure = 'Leisure',
}

// FIX: Define and export Transaction interface.
export interface Transaction {
    id: string;
    category: TransactionCategory;
    establishment: string;
    amount: number;
    tag: string;
}

// FIX: Define and export UserLevel type.
export type UserLevel = 'organizador' | 'construtor' | 'estrategista';

// FIX: Define and export AssetCategory enum.
export enum AssetCategory {
    VariableIncome = 'Renda Variável',
    FixedIncome = 'Renda Fixa',
    Crypto = 'Criptomoedas',
    RealEstate = 'Imóveis',
    Cash = 'Caixa',
}

// FIX: Define and export Asset interface.
export interface Asset {
    name: string;
    value: number;
    category: AssetCategory;
    ticker?: string;
    change24h?: number;
}

// FIX: Define and export Mission interface.
export interface Mission {
    id: string;
    title: string;
    description: string;
    xp: number;
    completed: boolean;
}

// FIX: Define and export Achievement interface.
export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    unlocked: boolean;
}
