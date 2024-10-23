'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import Rating from '@/components/Avaliations/Rating';

const handleRatingChange = (value) => {
    console.log('Nota selecionada:', value);
};

export default function Form() {

    return (


        <form className="rounded-xl bg-transparent p-5 shadow-md  border border-slate-900 mt-[30px]">
            <div className='w-full flex flex-row justify-center items-center'>
                <div className='py-4 px-4 border border-cyan-400 border-2 rounded-xl'>
                    <p className='font-bold'>Média 4.5</p>
                </div>
            </div>
            <div className="form -mt-2">
                <span className="font-bold text-sm text-gray-600 text-left w-full mb-2">1. Tema(atual e relevante)</span>
                <Rating title="Avaliação de Produto" onRatingChange={handleRatingChange} />

                <span className="font-bold text-sm text-gray-600 text-left w-full mt-12 mb-2">2. Objetivos (claros e bem definidos)</span>
                <Rating title="Avaliação de Objetivos" onRatingChange={handleRatingChange} />

                <span className="font-bold text-sm text-gray-600 text-left w-full mt-8 mb-2">3. Revisão de Literatura (reflete o estado-da-arte do conhecimento na área)</span>
                <Rating title="Avaliação de Revisão" onRatingChange={handleRatingChange} />

                <span className="font-bold text-sm text-gray-600 text-left w-full mt-8 mb-2">4. Consistência conceitual ou teórica do trabalho (adequada e bem estruturada)</span>
                <Rating title="Avaliação de Consistência" onRatingChange={handleRatingChange} />

                <span className="font-bold text-sm text-gray-600 text-left w-full mt-8 mb-2">5. Método de Pesquisa utilizado (claramente definido e consistente com os objetivos do trabalho)</span>
                <Rating title="Avaliação de Método" onRatingChange={handleRatingChange} />

                <span className="font-bold text-sm text-gray-600 text-left w-full mt-8 mb-2">6. Conclusões (fundamentadas nos dados da pesquisa, clara e objetivas)</span>
                <Rating title="Avaliação de Conclusões" onRatingChange={handleRatingChange} />

                <span className="font-bold text-sm text-gray-600 text-left w-full mt-8 mb-2">7. Contribuição científica (para o conhecimento na área temática)</span>
                <Rating title="Avaliação de Contribuição" onRatingChange={handleRatingChange} />

                <span className="font-bold text-sm text-gray-600 text-left w-full mt-8 mb-2">8. Análise de dados e resultados (interpretação correta dos dados e articulada com a base teórica)</span>
                <Rating title="Avaliação de Análise" onRatingChange={handleRatingChange} />

                <span className="font-bold text-sm text-gray-600 text-left w-full mt-8 mb-2">9. Redação e organização do texto (ortografia, gramática, clareza, objetividade e estrutura formal)</span>
                <Rating title="Avaliação de organização" onRatingChange={handleRatingChange} />
            </div>

        </form>
    );
}
