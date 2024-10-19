import { useState } from 'react';

import Image from 'next/image';

import { FaRegEye } from 'react-icons/fa';

import { cardsData } from '@/mocks/EventCards';
import Rating from '@/components/Avaliations/Rating';
import Title from '@/components/Title';


const handleRatingChange = (value) => {
    console.log('Nota selecionada:', value);
};
export default function EventsCard() {
    return (
        <>
            <div className='container mx-auto flex flex-col mt-[210px] items-center'>

                <Title
                    title="Avaliar Artigo"
                    subtitle="A média é calculada conforme as perguntas são respondidas"
                    colorHex="#4B00E0"
                />

                <div className="align-center mb-5 mt-5 flex w-[340px] -translate-x-6 justify-center space-x-3 rtl:space-x-reverse mt-12">

                    <button
                        type="button"
                        className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600 active:bg-slate-600"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-carousel-slide-to="0"
                    ></button>
                    <button
                        type="button"
                        className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
                        aria-current="false"
                        aria-label="Slide 2"
                        data-carousel-slide-to="1"
                    ></button>
                </div>

                <div className='flex flex-row justify-end items-end w-3/5' style={{ marginTop: '-35px' }}>
                    <div className="items-center mr-5 flex flex-row gap-2 rounded-xl ring-1 ring-black ">
                        <button className="ml-2 p-1 text-[12px] font-medium text-[#000000]">
                            Ver Artigo
                        </button>
                        <FaRegEye className='mr-4' />
                    </div>
                </div>

                <form className="rounded-xl bg-transparent p-5 shadow-md  border border-slate-900 mt-[5px] w-3/5 justify-center mt-12" style={{ marginTop: '15px' }}>
                    <div className='w-full flex flex-row justify-center items-center'>
                        <div className='py-4 px-4 border border-cyan-400 border-2 rounded-xl'>
                            <p className='font-bold'>Média 0</p>
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
                <div className="mt-8 flex flex-row items-center justify-center gap-6">
                    <button
                        className="w-40 rounded-xl border p-2.5 text-center text-sm font-medium text-white"
                        type="submit"
                        style={{ backgroundColor: '#8A8A8A' }}
                    >
                        Voltar
                    </button>

                    <button
                        className="w-40 rounded-xl border p-2.5 text-center text-sm font-medium text-white"
                        type="submit"
                        style={{ backgroundColor: '#4B00E0' }}
                    >
                        Avançar
                    </button>
                </div>
            </div>
        </>
    );
}
