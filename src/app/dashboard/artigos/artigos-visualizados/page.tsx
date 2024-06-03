import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';
import Layout from '@/components/Artigos/ArtigosLayout/Layout';
import ArtigosVisualizados from "@/components/Artigos/ArtigosVisualizadosForms/ArtigosVisualizados";
import FromAvaliations from "@/components/Artigos/ArtigosVisualizadosForms/Avaliacoes";
import React from 'react';

export default async function Artigos() {
	return (
		<div className='h-full flex flex-col justify-items-center justify-center'>
			<Navbar />
			<main>
				<div className='flex flex-col mt-28 items-center justify-center'>
					<h1 className='mt-12 text-[30px] text-red-500 font-bold justify-self-center text-center'>Arquivos</h1>
					<p className='mb-14 text-center font-medium'>Visualizar Informações</p>
					<ArtigosVisualizados />

					<h3 className='mt-28 text-[30px] text-black font-bold justify-self-center text-left'>Avaliadores</h3>
					<div className='grid grid-cols-2 items-center justify-center mt-4 w-full container mx-auto'>
						<FromAvaliations />
						<FromAvaliations />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}