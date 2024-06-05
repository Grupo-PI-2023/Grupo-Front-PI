import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';
import Layout from '@/components/Artigos/ArtigosLayout/Layout';
import ArtigosVisualizados from "@/components/Artigos/ArtigosVisualizadosForms/ArtigosNaoVisualizados";
import FromAvaliations from "@/components/Artigos/ArtigosNaoVisualizadosForms/Avaliacoes";
import React from 'react';

export default async function Artigos() {
	return (
		<div className='h-full flex flex-col justify-items-center justify-center'>
			<Navbar />
			<main>
				<div className='flex flex-col mt-28 items-center justify-center items-center'>
					<h1 className='mt-12 text-[30px] text-[#4B00E0] font-bold justify-self-center text-center'>Arquivos</h1>
					<p className='mb-14 text-center font-medium'>Visualizar Informações</p>
					<ArtigosVisualizados />
				</div>
			</main>
			<Footer />
		</div>
	);
}