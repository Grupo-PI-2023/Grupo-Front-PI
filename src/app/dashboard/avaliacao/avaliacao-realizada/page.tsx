'use client';

import { useState } from 'react';


import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/NavbarAuthenticated';
import TextAreaInput from '@/components/COMPONENTES/TextAreaInput';
import Title from '@/components/COMPONENTES/Title';
import avaliacaoData from './avaliacao.json';

export default function AvaliacaoRealizada() {
	const changeColor = (text: string) => {
		if (text == "Reprovado") {
			return '#BF0000';
		} else if (text == 'Aprovado') {
			return '#15A912';
		} else {
			return '#00000';
		}
	};

	return (
		<div>
			<NavbarAuthenticated />
			<div className="container">
					<Title
						title="Avaliações do Artigo"
						subtitle="Avaliações realizadas"
						colorHex="#4B00E0"
					/>

				{avaliacaoData && (
					<>
				{avaliacaoData.map((aval, index) => {

					<div className="w-3/5">
					<div
					key={index}
					className="mb-5 ml-[2rem] flex w-full flex-col p-1"
					></div>

					<form className="rounded-xl">
						<div className="form">
							<TextAreaInput
								label="Titulo:"
								name="titulo"
								id="titulo"
								placeholder=""
                                readOnly
								value={aval.titulo}
								rows={4}
							/>
							<TextAreaInput
								label="Autores:"
								name="autores"
								id="autores"
								placeholder=""
                                readOnly
								value={aval.autores}
								rows={4}
							/>

							<TextAreaInput
								label="Palavras-Chaves:"
								name="palavraChave"
								id="palavraChave"
								placeholder=""
                                readOnly
								value={aval.palavraChave}
								rows={4}
							/>
							<TextAreaInput
								label="Tema:"
								name="tema"
								id="tema"
								placeholder=""
                                readOnly
								value={aval.tema}
								rows={4}
							/>
						</div>
					</form>

                    <div className="items-left justify-left mt-8 flex">
					<table className="w-full table-auto">
						<thead style={{ backgroundColor: '#E4E4E4' }}>
							<tr className="h-14">
								<th scope="col" className="rounded-tl-lg"></th>
								<th
									scope="col"
									style={{ color: '#000000' }}
									className="text-left"
								>
									Avaliador
								</th>
								<th
									scope="col"
									style={{ color: '#000000' }}
									className="text-left"
								>
									Média
								</th>
								<th
									scope="col"
									style={{ color: '#000000' }}
									className="text-left"
								>
									Status
								</th>

                                <th
									scope="col"
									style={{ color: '#000000' }}
									className="rounded-tr-lg text-left"
								>
									Ações
								</th>
							</tr>
						</thead>
						<tbody>
						{aval.tabela.map((avaliacao, index) => {
										return (
											<tr
												key={index}
												className="h-14"
												style={{
													backgroundColor: !(index % 2 === 0)
														? '#E4E4E4'
														: '#fff',
												}}
											>
												<td className="">
													<label
														className="mb-2 rounded-2xl border border-black p-2 text-sm font-medium"
														htmlFor="avaliador"
													>
														{avaliacao.avaliador}
													</label>
												</td>
												<td className="">
													<label
														className="mb-2 rounded-2xl border border-black p-2 text-sm font-medium"
														htmlFor="media"
													>
														{avaliacao.media}
													</label>
												</td>
												<td className="">
													<label
														className="mb-2 rounded-2xl border border-black p-2 text-sm font-medium"
														htmlFor="status"
													>
														{avaliacao.status}
													</label>
												</td>

                                                <td className="rounded-br-lg">
													<label
														className="mb-2 rounded-2xl border border-black p-2 text-sm font-medium"
														htmlFor="buttons"
													>
														
													</label>
												</td>
											</tr>
								);
							})}
						</tbody>
					</table>
					</div>
					<div className="mt-8 flex flex-col items-center">
							<DefaultButton label="Voltar" />
						</div>
					</div>
				
				})}
				</>
			)}
			
			</div>
			<Footer />
		</div>
	);
}
