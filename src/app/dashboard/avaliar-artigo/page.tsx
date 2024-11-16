'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { FaDownload, FaEdit, FaRegEdit, FaRegEye } from 'react-icons/fa';
import { MdFileDownload, MdStarBorder } from 'react-icons/md';

import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import { articlesToRate } from '@/mocks/ArtigosRate';
import OutlineButton from '@/components/OutlineButton';
import { IoMdDownload } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';

export default function ArtigosAvaliarPrincipal() {
	const router = useRouter();
	const handleDownloadFile = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		// backend instructions
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
	};

	return (
		<div>
			<Navbar />
			<div className="container mt-52 flex w-2/4 mx-auto flex-col justify-center">
				<Title
					title="Artigo"
					subtitle="Todos os artigos direcionados a você para a avaliação"
					colorHex="#EF0037"
				/>
				<div className="ml-14 flex flex-col justify-end">
					<SearchFilter />
				</div>
				<div className="mt-8">
					<table className="w-[80%] mx-auto border-separate border-spacing-0 overflow-hidden rounded-xl border-2 border-[#BCBCBC] bg-white">
						<thead className="bg-[#E4E4E4]">
							<tr>
								<th className="w-[30%] px-4 py-2 text-left text-base font-bold text-black">
									Título
								</th>
								<th className="w-[25%] px-4 py-2 text-left text-base font-bold text-black">
									Autores
								</th>
								<th className="w-[25%] px-4 py-2 text-left text-base font-bold text-black">
									Área Artigos
								</th>
								<th className="w-[25%] px-4 py-2 text-left text-base font-bold text-black">
									Avaliadores
								</th>
								<th className="w-[25%] px-4 py-2 text-left text-base font-bold text-black">
									Área Avaliador
								</th>
								<th className="w-[30%] px-4 py-2 text-left text-base font-bold text-black">
									Status
								</th>
								<th className="w-[15%] px-4 py-2 text-center text-base font-bold text-black">
									Ações
								</th>
							</tr>
						</thead>
						<tbody>
							{articlesToRate.map((article, index) => (
								<tr
									key={index} // Use o índice apenas se não houver outra opção
									className={`border-t ${!(article.id % 2 == 0) ? 'bg-[#e4e4e4]' : ''
										}`}
								>
									<td className="px-4 py-3 text-sm text-black">
										{article.title}
									</td>
									<td className="nowrap px-4 py-3 text-sm text-black">
										{article.authorsString}
									</td>
									<td className="px-4 py-3 text-sm text-black">
										{article.areas}
									</td>
									<td className="nowrap px-4 py-3 text-sm text-black">
										<div className="pr-16 pl-2 border border-black text-nowrap rounded-full text-start">
											{article.evaluators1}<br />
										</div>
										<div className="mt-2 pr-16 pl-2 border border-black text-nowrap rounded-full text-start">
											{article.evaluators2}
										</div>
									</td>
									<td className="px-4 py-3 text-sm text-black">
										<div className="pr-16 pl-2 border border-black text-nowrap rounded-full text-start">
											{article.areaEvaluators1}<br />
										</div>

										<div className="mt-2 pr-16 pl-2 border border-black text-nowrap rounded-full text-start">
											{article.areaEvaluators2}
										</div>

									</td>
									<td className="px-4 py-3 text-sm text-black">
										{article.status === 'Aprovado'
											? <div className="text-green-500 underline">{article.status}</div>
											: article.status === 'Reprovado'
												? <div className="text-red-500 underline">{article.status}</div>
												: <div className="text-blue-500 underline">{article.status}</div>
										}
									</td>
									<td className="mt-3 flex h-full flex-row items-center justify-center gap-3 px-20 py-3 wrap">
										<div className='space-y-8 text-xl'>
											<IoEyeOutline className="" />
											<IoMdDownload className="text-purple-500" />
										</div>
										<div className='flex flex-col gap-4 items-center'>
											<button
												className='
												flex w-full items-center
												rounded-full border-[1.5px] px-2
												py-[4px]
												text-center text-base 
												font-medium
												border
												border-red-500 
												text-nowrap
												text-red-500
												text-md
												
												'
												onClick={(e) => {
													e.stopPropagation();
													router.push(`/dashboard/avaliar-artigo/${article.id}`);
												}}> Mudar Avaliador
												<FaRegEdit className=" ml-2" />
											</button>
											<button
												className='
												flex w-full items-center
												rounded-full border-[1.5px] px-[19px]
												py-[4px]
												text-center text-base 
												font-medium
												border
												border-cyan-500 
												text-nowrap
												text-black
												text-md
												ml-[0.1em]
											'
												onClick={handleDownloadFile}
											> Ver Avaliação
												<MdStarBorder className="text-xl text-cyan-500 ml-2" />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<Footer />
		</div>
	);
}
