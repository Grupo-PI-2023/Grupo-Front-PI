'use client';

import React from 'react';

import Card from '@/components/COMPONENTES/ArtigosCards/Cards';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';

import ArtigosConcluidos from './artigos-prazo/page';
import * as S from './styles';

type TabbarProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
};

export default function VisualizarArtigoPage({
	currentOption,
	handleOptionClick,
}: TabbarProps) {
	const renderContent = () => {
		switch (currentOption) {
			case 'dentro-do-prazo':
				return <ArtigosConcluidos />;
			case 'concluidos':
				return <Card />;
			default:
				return null;
		}
	};

	return (
		<div>
			<Navbar />
			<div>
				<div className="align-center fixed left-0 right-0 top-24 z-40 flex justify-center px-28 pb-5 pt-2">
					<div className="flex w-1/4 flex-wrap items-center justify-center gap-5 bg-[#F4F4F4] p-4 shadow-xl">
						<div className="flex items-center gap-2">
							<S.IconEvent selected={currentOption === 'dentro-do-prazo'} />
							<S.OptionMenu
								onClick={() => handleOptionClick('dentro-do-prazo')}
								className="flex-shrink-0 cursor-pointer text-base"
								selected={currentOption === 'dentro-do-prazo'}
							>
								Dentro do Prazo
							</S.OptionMenu>
						</div>
						<div className="flex items-center gap-2">
							<S.IconFiles selected={currentOption === 'concluidos'} />
							<S.OptionMenu
								onClick={() => handleOptionClick('concluidos')}
								className="flex-shrink-0 cursor-pointer text-base"
								selected={currentOption === 'arquivos'}
							>
								Concluidos
							</S.OptionMenu>
						</div>
					</div>
				</div>
				{renderContent()}
			</div>
			<Footer />
		</div>
	);
}
