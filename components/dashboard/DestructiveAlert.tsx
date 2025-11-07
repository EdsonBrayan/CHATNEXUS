import React from 'react';
import { AlertIcon } from '../icons/AlertIcon';

interface DestructiveAlertProps {
    title: string;
    actionText: string;
    onAction: () => void;
}

const DestructiveAlert: React.FC<DestructiveAlertProps> = ({ title, actionText, onAction }) => {
    return (
        <div className="bg-red-50 border-l-4 border-destructive p-4 flex justify-between items-center rounded-r-lg">
            <div className="flex items-center">
                <AlertIcon className="w-5 h-5 text-destructive mr-3" />
                <p className="font-semibold text-foreground">{title}</p>
            </div>
            <button onClick={onAction} className="text-sm font-bold text-destructive hover:underline">
                {actionText}
            </button>
        </div>
    );
};

export default DestructiveAlert;
