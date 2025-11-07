
import React, { useState } from 'react';
import { View, Goal, PendingBill, UserLevel, Asset, Mission, Achievement, GoalCategory, AssetCategory } from './types';
import Dashboard from './components/views/Dashboard';
import Goals from './components/views/Goals';
import Patrimony from './components/views/Patrimony';
import Profile from './components/views/Profile';
import BottomNavBar from './components/BottomNavBar';
import Onboarding from './components/onboarding/Onboarding';
import FloatingActionButton from './components/dashboard/FloatingActionButton';
import { BudgetMasterIcon } from './components/icons/BudgetMasterIcon';
import { VisionaryIcon } from './components/icons/VisionaryIcon';
import { AcceleratorIcon } from './components/icons/AcceleratorIcon';
import { ConnectedIcon } from './components/icons/ConnectedIcon';
import { LockIcon } from './components/icons/LockIcon';

// Mock Data
const MOCK_GOALS: Goal[] = [
  { id: '1', name: 'Viagem para o Japão', icon: '✈️', currentAmount: 7500, targetAmount: 20000, category: GoalCategory.Travel },
  { id: '2', name: 'Fundo de Emergência', icon: '🛡️', currentAmount: 15000, targetAmount: 15000, category: GoalCategory.EmergencyFund },
  { id: '3', name: 'Entrada do Apartamento', icon: '🏠', currentAmount: 35000, targetAmount: 100000, category: GoalCategory.RealEstate },
];

const MOCK_PENDING_BILLS: PendingBill[] = [
  { name: 'Cartão Nubank', dueDate: new Date(new Date().setDate(new Date().getDate() + 2)), amount: 1250.75 },
];

const MOCK_ASSETS: Asset[] = [
    { name: 'Ações BR', value: 15000, category: AssetCategory.VariableIncome, ticker: 'BOVA11', change24h: 1.2 },
    { name: 'Tesouro Selic', value: 25000, category: AssetCategory.FixedIncome, ticker: 'LFT' },
    { name: 'Bitcoin', value: 10000, category: AssetCategory.Crypto, ticker: 'BTC', change24h: -3.5 },
    { name: 'Apartamento', value: 250000, category: AssetCategory.RealEstate },
    { name: 'Conta Corrente', value: 5000, category: AssetCategory.Cash },
];
const MOCK_MISSIONS: Mission[] = [
    { id: '1', title: 'Cadastre sua primeira meta', description: 'O primeiro passo para a conquista.', xp: 50, completed: true },
    { id: '2', title: 'Conecte uma conta bancária', description: 'Visibilidade é poder.', xp: 100, completed: true },
    { id: '3', title: 'Faça 5 aportes em uma meta', description: 'Consistência é a chave.', xp: 150, completed: false },
];
const MOCK_ACHIEVEMENTS: Achievement[] = [
    { id: '1', name: 'Mestre do Orçamento', description: 'Manteve os gastos dentro do planejado por 3 meses.', icon: BudgetMasterIcon, unlocked: true },
    { id: '2', name: 'Visionário', description: 'Criou 5 metas de longo prazo.', icon: VisionaryIcon, unlocked: true },
    { id: '3', name: 'Acelerador de Metas', description: 'Atingiu uma meta antes do prazo.', icon: AcceleratorIcon, unlocked: false },
    { id: '4', name: 'Conectado', description: 'Conectou 3 contas diferentes.', icon: ConnectedIcon, unlocked: false },
    { id: '5', name: 'Fundo de Emergência Completo', description: 'Atingiu 100% da sua meta de Fundo de Emergência.', icon: LockIcon, unlocked: true },
];

const App: React.FC = () => {
  const [view, setView] = useState<View>('dashboard');
  const [userLevel, setUserLevel] = useState<UserLevel | null>(null);
  const [userName] = useState('Daniel');
  const [netWorth] = useState(78123.45);
  const [netWorthHistory] = useState([50, 55, 60, 58, 65, 70, 78]);
  const [goals, setGoals] = useState<Goal[]>(MOCK_GOALS);
  const [pendingBills] = useState<PendingBill[]>(MOCK_PENDING_BILLS);

  const handleOnboardingComplete = (level: UserLevel) => {
    setUserLevel(level);
  };

  if (!userLevel) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }
  
  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return (
          <Dashboard
            userName={userName}
            netWorth={netWorth}
            netWorthHistory={netWorthHistory}
            goals={goals}
            hasNotifications={true}
            pendingBills={pendingBills}
          />
        );
      case 'goals':
        return <Goals goals={goals} setGoals={setGoals} />;
      case 'patrimony':
          return <Patrimony assets={MOCK_ASSETS} />;
      case 'profile':
          return <Profile userLevel={userLevel} userName={userName} missions={MOCK_MISSIONS} achievements={MOCK_ACHIEVEMENTS} />;
      default:
        return (
          <Dashboard
            userName={userName}
            netWorth={netWorth}
            netWorthHistory={netWorthHistory}
            goals={goals}
            hasNotifications={true}
            pendingBills={pendingBills}
          />
        );
    }
  };

  return (
    <div className="bg-background min-h-screen font-sans text-foreground">
      <main className="pb-24">
        {renderView()}
      </main>
      <FloatingActionButton onClick={() => alert('Add new transaction')} />
      <BottomNavBar currentView={view} setView={setView} />
    </div>
  );
};

export default App;
