'use client';

import { FaRegEye } from 'react-icons/fa';
import { MdFileDownload } from 'react-icons/md';

import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';

type ArticlesToRateProps = {
	handleOptionClick: (option: string) => void;
};

export default function ArticlesToRate({
	handleOptionClick,
}: ArticlesToRateProps) {
	return (
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
						<tr className="border-t">
							<td className="px-4 py-3 text-sm text-black">
								Transformação Digital: Uma Análise das Estratégias para o
								Sucesso Empresarial na Era Digital
							</td>
							<td className="nowrap px-4 py-3 text-sm text-black">
								Tecnologia <br /> Análise Estratégicas
							</td>
							<td className="px-4 py-3 text-sm text-black">
								Sucesso Empresarial <br /> Tecnológico
							</td>
							<td className="px-4 py-3 text-sm text-black">
								Estratégias para o Sucesso Empresarial na Era Digital
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
						<tr className="border-t bg-[#E4E4E4]">
							<td className="px-4 py-3 text-sm text-black">
								Transformação Digital: Uma Análise das Estratégias para o
								Sucesso Empresarial na Era Digital
							</td>
							<td className="nowrap px-4 py-3 text-sm text-black">
								Tecnologia <br /> Análise Estratégicas
							</td>
							<td className="px-4 py-3 text-sm text-black">
								Sucesso Empresarial <br /> Tecnológico
							</td>
							<td className="px-4 py-3 text-sm text-black">
								Estratégias para o Sucesso Empresarial na Era Digital
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
						<tr className="border-t">
							<td className="px-4 py-3 text-sm text-black">
								Transformação Digital: Uma Análise das Estratégias para o
								Sucesso Empresarial na Era Digital
							</td>
							<td className="nowrap px-4 py-3 text-sm text-black">
								Tecnologia <br /> Análise Estratégicas
							</td>
							<td className="px-4 py-3 text-sm text-black">
								Sucesso Empresarial <br /> Tecnológico
							</td>
							<td className="px-4 py-3 text-sm text-black">
								Estratégias para o Sucesso Empresarial na Era Digital
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
					</tbody>
				</table>
			</div>
		</div>
	);
}
