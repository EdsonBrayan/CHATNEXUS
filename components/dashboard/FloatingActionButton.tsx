import React from 'react';
import { PlusIcon } from '../icons/PlusIcon';

interface FloatingActionButtonProps {
    onClick: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-28 right-5 bg-primary text-primary-foreground h-14 w-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-100 transition-transform z-40"
            aria-label="Adicionar transação"
        >
            <PlusIcon className="w-7 h-7" />
        </button>
    );
};

export default FloatingActionButton;
