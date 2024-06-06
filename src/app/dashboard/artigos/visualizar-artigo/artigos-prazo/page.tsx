'use client';

import { CiFilter } from 'react-icons/ci';
import { IoSearchOutline } from 'react-icons/io5';

import Title from '@/components/COMPONENTES/Title';

import filesData from './arquivosConcluidos.json';

export default function ArtigosConcluidos() {
	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-4/5">
				<Title
					title="Atividades"
					subtitle="Atividades presentes durante o evento"
					colorHex="#ef0037"
				/>
				<div className="absolute flex w-8/12 flex-col items-end gap-2">
					<div className="flex cursor-pointer gap-3">
						<p className="text-lg font-medium">Buscar</p>
						<IoSearchOutline size={30} />
					</div>
					<div className="flex cursor-pointer gap-5">
						<p className="text-lg font-medium">Filtrar</p>
						<CiFilter size={30} />
					</div>
				</div>

				{filesData && (
					<>
						{filesData.map((file, index) => {
							return (
								<div key={index} className="ml-10 mt-16">
									<div className="mb-5 flex gap-1 text-lg font-bold">
										<h1 className="text-[#EF0037]">Evento:</h1>
										<h1>{file.titulo_evento}</h1>
									</div>
									{file.arquivos.map((files, index) => {
										return (
											<div
												key={index}
												className="mb-5 ml-[2rem] flex w-full flex-col p-1"
											>
												<div className="flex w-10/12 cursor-pointer flex-col gap-2 rounded-lg border border-[#EF0037] p-5 shadow-lg">
													<p className="text-lg text-[#EF0037]">
														{files.arquivo}
													</p>
													<div className="flex gap-1">
														<p className="font-bold">Prazo de entrega:</p>
														<p>{files.prazo_de_entrega}</p>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							);
						})}
					</>
				)}
			</div>
		</div>
	);
}
