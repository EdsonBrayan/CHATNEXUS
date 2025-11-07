
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { SparkleIcon } from '../icons/SparkleIcon';

const BehavioralReport: React.FC = () => {
    const [report, setReport] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const generateReport = async () => {
        setIsLoading(true);
        try {
            // FIX: Initialize GoogleGenAI with apiKey from environment variables.
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: "Analise este perfil de gastos (mock): Alimentação R$1200, Transporte R$350, Lazer R$800. Renda: R$5000. Dê 3 dicas curtas e práticas para otimizar os gastos, em português."
            });
            // FIX: Access the generated text directly from the 'text' property.
            setReport(response.text);
        } catch (error) {
            console.error("Erro ao gerar relatório:", error);
            setReport("Não foi possível gerar o relatório. Tente novamente mais tarde.");
        }
        setIsLoading(false);
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-foreground mb-3">Relatório Comportamental (IA)</h2>
            <div className="bg-muted p-4 rounded-xl">
                {report ? (
                    <div className="text-sm text-muted-foreground whitespace-pre-wrap">{report}</div>
                ) : (
                    <div className="text-center">
                        <p className="text-muted-foreground mb-4">Clique abaixo para receber uma análise e dicas personalizadas da nossa IA.</p>
                        <button
                            onClick={generateReport}
                            disabled={isLoading}
                            className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded-lg flex items-center justify-center mx-auto disabled:opacity-50"
                        >
                            {isLoading ? (
                                'Gerando...'
                            ) : (
                                <>
                                    <SparkleIcon className="w-5 h-5 mr-2" />
                                    Gerar Análise
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BehavioralReport;
