'use client';

import React, { useState } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import NavBarRate from '@/components/Rate/NavBarRate';

const database = [
	{
		title: 'Tech Talks: Descobrindo as Fronteiras da Tecnologia',
		arquivos: [
			{
				file_title:
					'Era da Internet das Coisas: Transformando a Sociedade e os Negócios',
				palavras_chave:
					'Estratégias, Sucesso Empresarial, Era Digital, Transformação Orgazicional, Inovação tecnológica, Mudança Digital',
				tema: 'Estratégias para o Sucesso Empresarial na Era Digital',
				area: 'Tecnologia, Análise Estratégicas',
			},
			{
				file_title:
					'Blockchain: Uma Revolução Na Segurança dos Dados e Transações',
				palavras_chave:
					'Estratégias, Sucesso Empresarial, Era Digital, Transformação Organizacional, Inovação Tecnológica, Mudança Digital',
				tema: 'Estratégias para o Sucesso Empresarial na Era Digital',
				area: 'Tecnologia, Análise Estratégicas',
			},
		],
	},
	{
		title: 'Digital Transformation Symposium',
		arquivos: [
			{
				file_title:
					'Transformação Digital: Uma Análise das Estratégias para o Sucesso Empresarial na Era Digital',
				palavras_chave:
					' Estratégias, Sucesso Empresarial, Era Digital, Transformação Organizacional, Inovação Tecnológica, Mudança Digital',
				tema: 'Estratégias para o Sucesso Empresarial na Era Digital',
				area: 'Tecnologia, Análise Estratégicas',
			},
			{
				file_title:
					'Era da Internet das Coisas: Transformando a Sociedade e os Negócios',
				palavras_chave:
					' Estratégias, Sucesso Empresarial, Era Digital, Transformação Organizacional, Inovação Tecnológica, Mudança Digital',
				tema: 'Estratégias para o Sucesso Empresarial na Era Digital',
				area: 'Tecnologia, Análise Estratégicas',
			},
		],
	},
];

export default function ArtigosAvaliarPrincipal() {
	const [currentOption, setCurrentOption] = useState('rate');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};

	return (
		<div>
			<Navbar />
			<NavBarRate
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
			<Footer />
		</div>
	);
}
