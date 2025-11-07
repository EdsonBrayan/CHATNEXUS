import React from 'react';
import { Goal, PendingBill } from '../../types';
import Header from '../Header';
import NetWorthCard from '../dashboard/NetWorthCard';
import DestructiveAlert from '../dashboard/DestructiveAlert';
import GoalsCarousel from '../dashboard/GoalsCarousel';

interface DashboardProps {
  userName: string;
  netWorth: number;
  netWorthHistory: number[];
  goals: Goal[];
  hasNotifications: boolean;
  pendingBills: PendingBill[];
}

const Dashboard: React.FC<DashboardProps> = ({
  userName,
  netWorth,
  netWorthHistory,
  goals,
  hasNotifications,
  pendingBills,
}) => {
  const hasPendingBills = pendingBills.length > 0;

  return (
    <div className="p-5 space-y-6">
      <Header userName={userName} hasNotifications={hasNotifications} />
      <NetWorthCard amount={netWorth} history={netWorthHistory} />
      {hasPendingBills && (
        <DestructiveAlert
          title="Fatura do cartão vence em 2 dias."
          actionText="Agendar Pagamento"
          onAction={() => alert('Pagamento agendado!')}
        />
      )}
      <GoalsCarousel goals={goals} />
    </div>
  );
};

export default Dashboard;
