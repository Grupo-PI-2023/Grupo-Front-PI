'use client';

import React from 'react';

import Image from 'next/image';

import OutlineButton from '../OutlineButton';
import ImgArt from './assets/art.png';
import ImgFood from './assets/food.png';
import ImgMusic from './assets/music.png';
import ImgTech from './assets/tech.png';

function AlertCard() {
	const events = [
		{
			title: 'Tecnologia',
			description:
				'Os eventos de tecnologia permitirão que você aprimore suas habilidades, explore novas tecnologias e mergulhe em projetos emocionantes. De codificação e desenvolvimento de aplicativos a projetos de hardware e design.',
			image: ImgTech,
		},
		{
			title: 'Música',
			description:
				'Prepare-se para mergulhar em um mundo de melodias envolventes, Participe de oficinas de música com profissionais experientes, onde poderá aprimorar suas habilidades, aprender novas técnicas e descobrir os segredos por trás das criações musicais.',
			image: ImgMusic,
		},
		{
			title: 'Culinária',
			description:
				'Você poderá aprender técnicas, dicas e truques para aprimorar suas habilidades na cozinha e experimentar pratos únicos e autênticos. Deixe-se envolver por uma atmosfera de prazer, descoberta e pratos irresistíveis.',
			image: ImgFood,
		},
		{
			title: 'Artes',
			description:
				'Artistas de diferentes estilos e técnicas se reunirão para compartilhar seu amor pela pintura e inspirar uns aos outros. Estes eventos são um convite para explorar seu lado artístico, expressar-se livremente e mergulhar em um universo repleto de pinceladas de imaginação.',
			image: ImgArt,
		},
	];

	return (
		<section className="mt-12">
			<h1 className="mb-1 text-start text-3xl font-bold">
				Veja outros eventos
			</h1>
			<h2 className="mb-10 text-start text-lg font-medium">
				Áreas que podem te interessar! Navegue de acordo com o seu interesse!
			</h2>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{events.map((event, index) => (
					<div
						key={index}
						className="flex flex-col items-center gap-4 rounded-lg border px-4 pb-8 pt-4 text-center shadow-md"
					>
						<Image
							src={event.image}
							alt={event.title}
							className="mb-4 w-full object-cover"
						/>
						<h3 className="text-xl font-semibold">{event.title}</h3>
						<p className="mb-2 text-gray-700">{event.description}</p>
						<OutlineButton
							outlineColorHex="#BE0BD9"
							label="Ver Mais"
							textColorHex="#BE0BD9"
							customWidth="120px"
							customHeight="35px"
						/>
					</div>
				))}
			</div>
		</section>
	);
}

export default AlertCard;
