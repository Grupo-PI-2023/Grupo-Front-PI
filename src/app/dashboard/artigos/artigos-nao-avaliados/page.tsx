import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';
import Layout from '@/components/Artigos/ArtigosLayout/Layout';
import ArtigosNaoVisualizados from "@/components/Artigos/ArtigosNaoAvaliadosForms/ArtigosNaoAvaliados";
import FromAvaliations from "@/components/Artigos/ArtigosNaoAvaliadosForms/Avaliacoes";
import React from 'react';

export default async function Artigos() {
	return (
		<div className='h-full flex flex-col justify-items-center justify-center'>
			<Navbar />
			<main>
				<div className='flex flex-col mt-28 items-center justify-center items-center'>
					<h1 className='mt-12 text-[30px] text-[#4B00E0] font-bold justify-self-center text-center'>Arquivos</h1>
					<p className='mb-14 text-center font-medium'>Visualizar Informações</p>
					<ArtigosNaoVisualizados />

					<div className='w-full flex flex-col items-center justify-center mx-auto'>

						<div className='grid grid-cols-1 items-center justify-center mt-4 container mx-auto w-full'>
						<h3 className='w-[90%] mt-20 mb-2 text-[38px] text-black font-bold justify-start text-left container mx-auto'>Avaliadores</h3>
						<div className="grid grid-cols-2 items-center justify-center mt-4 container mx-auto">
							<FromAvaliations />
							<FromAvaliations />
						</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}