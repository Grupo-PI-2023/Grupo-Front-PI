'use client';

import { useState } from 'react';

import * as S from './styles';
import Image from 'next/image';
import search from './../search.png';
import CriarAreaConhecimento from '..';
import CriarEspecialide from '../CriarEspecialidade';
import CriarGrandeAreaConhecimento from '../CriarGrandeArea';
import CriarSubAreaConhecimento from '../CriarSubArea';

type SelectAreaProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
};



export default function SelectArea({
	currentOption,
	handleOptionClick,
}: SelectAreaProps) {

	const renderContent = () => {
		switch (currentOption) {
			case 'criar-area':
				return (
					<CriarAreaConhecimento
                        handleOptionClick={() => handleOptionClick('criar-area')} />
				);
			case 'criar-especialidade':
				return (
					<CriarEspecialide handleOptionClick={() => handleOptionClick('criar-especialidade')} />
				);
			case 'criar-grande-area':
				return (
					<CriarGrandeAreaConhecimento
						handleOptionClick={() => handleOptionClick('criar-grande-area')}	/>
				);
			case 'criar-sub-area':
				return (
					<CriarSubAreaConhecimento
						handleOptionClick={() => handleOptionClick('criar-sub-area')}	/>
				);
			
			default:
				return null;
		}
	};

	return (
		<div>
                <div className="absolute z-40 mt-96 ml-96 rounded-xl flex-row w-1/4 h-18 bg-[#F4F4F4] pb-2 pt-4 shadow">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <div className="flex items-center gap-2">
                            <S.OptionMenu
                                onClick={() => handleOptionClick('criar-grande-area')}
                                className="flex-shrink-0 cursor-pointer text-xs"
                                selected={currentOption === 'criar-grande-area'}
                            >
                                Grande Área
                            </S.OptionMenu>
                        </div>

                        <div className="flex items-center gap-2">
                            <S.OptionMenu
                                onClick={() => handleOptionClick('criar-area')}
                                className="flex-shrink-0 cursor-pointer text-xs"
                                selected={currentOption === 'criar-area'}
                            >
                                Área
                            </S.OptionMenu>
                        </div>
                        <div className="flex items-center gap-2">
                            <S.OptionMenu
                                onClick={() => handleOptionClick('criar-sub-area')}
                                className="flex-shrink-0 cursor-pointer text-xs"
                                selected={currentOption === 'criar-sub-area'}
                            >
                                Sub-Área
                            </S.OptionMenu>
                        </div>
                        <div className="flex items-center gap-2">
                            <S.OptionMenu
                                onClick={() => handleOptionClick('criar-especialidade')}
                                className="flex-shrink-0 cursor-pointer text-xs"
                                selected={currentOption === 'criar-especialidade'}
                            >
                                Especialidade
                            </S.OptionMenu>
                        </div> 
                    </div>
                </div>
			{renderContent()}
		</div>
	);
}
