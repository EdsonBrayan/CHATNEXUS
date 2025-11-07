import React, { useState } from 'react';
import { UserLevel } from '../../types';

interface OnboardingProps {
  onComplete: (level: UserLevel) => void;
}

const questions = [
  {
    question: "Qual seu maior objetivo financeiro agora?",
    options: ["Sair das dívidas", "Começar a investir", "Otimizar meus investimentos"],
    points: [1, 2, 3] // 1 for Organizador, 2 for Construtor, 3 for Estrategista
  },
  {
    question: "Como você se sente sobre seus conhecimentos de finanças?",
    options: ["Iniciante", "Já entendo o básico", "Sou experiente"],
    points: [1, 2, 3]
  },
  {
    question: "Você já investe?",
    options: ["Não", "Apenas poupança", "Sim, em ações/crypto/etc."],
    points: [1, 2, 3]
  }
];

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isExiting, setIsExiting] = useState(false);

  const handleAnswer = (point: number) => {
    const newAnswers = [...answers, point];
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      finishOnboarding(newAnswers);
    }
  };

  const finishOnboarding = (finalAnswers: number[]) => {
    const totalScore = finalAnswers.reduce((acc, curr) => acc + curr, 0);
    let level: UserLevel;
    if (totalScore <= 4) {
      level = 'organizador';
    } else if (totalScore <= 7) {
      level = 'construtor';
    } else {
      level = 'estrategista';
    }
    setIsExiting(true);
    setTimeout(() => onComplete(level), 500);
  };
  
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <div className="bg-gradient-to-b from-[#2E2E2E] to-[#1a1a1a] rounded-3xl p-8 w-11/12 max-w-md shadow-2xl border border-white/10">
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
            <div className="bg-[#A2FFC3] h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-6 text-center">{questions[step].question}</h2>
        
        <div className="space-y-4">
          {questions[step].options.map((option, index) => (
            <button
              key={option}
              onClick={() => handleAnswer(questions[step].points[index])}
              className="w-full text-left p-4 bg-[#252525] rounded-xl border-2 border-transparent hover:border-[#A2FFC3] transition-all duration-300 shadow-[4px_4px_8px_#1c1c1c,-4px_-4px_8px_#3a3a3a] text-white font-semibold"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
