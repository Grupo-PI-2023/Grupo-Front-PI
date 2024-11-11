'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { FaRegEye } from 'react-icons/fa';
import { MdFileDownload } from 'react-icons/md';

import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';
import { articlesToRate } from '@/mocks/ArtigosRate';

export default function ArtigosAvaliarPrincipal() {
	const router = useRouter();
	return (
		<div>
			<Navbar />
			<div className="container mt-52 flex w-[1000px] flex-col justify-center">
				<Title
					title="Artigo"
					subtitle="Todos os artigos direcionados a você para a avaliação"
					colorHex="#EF0037"
				/>
				<div className="flex flex-col justify-end">
					<SearchFilter />
				</div>
				<div className="mt-8">
					<table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-xl border-2 border-[#BCBCBC] bg-white">
						<thead className="bg-[#E4E4E4]">
							<tr>
								<th className="w-[30%] px-4 py-2 text-left text-base font-bold text-black">
									Título
								</th>
								<th className="w-[25%] px-4 py-2 text-left text-base font-bold text-black">
									Área Artigos
								</th>
								<th className="w-[25%] px-4 py-2 text-left text-base font-bold text-black">
									Palavras-chave
								</th>
								<th className="w-[30%] px-4 py-2 text-left text-base font-bold text-black">
									Tema
								</th>
								<th className="w-[15%] px-4 py-2 text-center text-base font-bold text-black">
									Ações
								</th>
							</tr>
						</thead>
						<tbody>
							{articlesToRate.map((article) => (
								<tr
									className={`cursor-pointer border-t ${
										!(article.id % 2 == 0) ? 'bg-[#e4e4e4]' : ''
									}`}
									onClick={(e) => {
										e.stopPropagation();
										router.push(
											`/dashboard/avaliar-artigo/${article.id}/avaliar`
										);
									}}
								>
									<td className="px-4 py-3 text-sm text-black">
										{article.title}
									</td>
									<td className="nowrap px-4 py-3 text-sm text-black">
										{article.areas}
									</td>
									<td className="px-4 py-3 text-sm text-black">
										{article.palavrasChaves}
									</td>
									<td className="px-4 py-3 text-sm text-black">
										{article.theme}
									</td>
									<td className="flex flex-col items-center gap-3 px-4 py-3">
										<button>
											<FaRegEye />
										</button>
										<button>
											<MdFileDownload size={20} className="text-[#4B00E0]" />
										</button>
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