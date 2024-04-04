'use client';

import { useState } from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';

import { Area } from '@/lib/repository/area/index.repository';
import { Event } from '@/lib/repository/event/index.repository';
import AlertCard from '@/components/AlertCard';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function DataLocal({ handleNextClick }: CriarEventoProps) {
	const handleNextButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleNextClick();
	};
	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
	const [checkboxes, setCheckboxes] = useState(
		checkboxPeriodo.map(() => false)
	);

	const handleCheckboxChangeEvento = (index: any) => {
		setCheckboxes((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-1/2">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Data e Local
				</h1>
				<form className="mt-8 w-full bg-white">
					<div className="flex justify-center gap-5">
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="cep">
									CEP
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="cep"
										id="cep"
										placeholder="CEP do Evento"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="estado">
									Estado
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="estado"
										id="estado"
										placeholder="Estado do Evento"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="cidade">
									Cidade
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="cidade"
										id="cidade"
										placeholder="Cidade do Evento"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="local">
									Local
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="local"
										id="local"
										placeholder="Local do Evento"
										required
									/>
								</div>
							</div>
						</div>
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="dateInicio"
								>
									Data de Início
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="Date"
										name="dateInicio"
										id="dateInicio"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="dateFinal">
									Data de Finalização
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="Date"
										name="dateFinal"
										id="dateFinal"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="horaInicio"
								>
									Horário de Início
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="time"
										name="horaInicio"
										id="horaInicio"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="horaFinal">
									Horário de Finalização
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="time"
										name="horaFinal"
										id="horaFinal"
										required
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="mb-6 flex flex-col">
							<label
								className="mb-2 text-center text-sm font-medium"
								htmlFor="evento"
							>
								Período
							</label>
							<div className="flex items-center gap-3 py-1">
								{checkboxPeriodo.map((name, index) => (
									<div key={index}>
										<div className="flex items-center">
											<input
												className="hidden"
												type="checkbox"
												name={`checkbox-${index}`}
												id={`checkbox-${index}`}
												checked={checkboxes[index]}
												onChange={() => handleCheckboxChangeEvento(index)}
											/>
											<label
												className="flex cursor-pointer items-center"
												style={
													checkboxes[index]
														? {
																color: '#4B00E0',
														  }
														: {
																color: '#000',
														  }
												}
												htmlFor={`checkbox-${index}`}
											>
												<div
													className="mr-2 flex h-3.5 w-3.5 items-center justify-center"
													style={
														checkboxes[index]
															? {
																	backgroundColor: '#4B00E0',
																	border: '1px solid #4B00E0',
															  }
															: {
																	backgroundColor: '#fff',
																	border: '1px solid #4B00E0',
															  }
													}
												>
													{checkboxes[index] && (
														<svg
															className="pointer-events-none h-2 w-3 fill-current text-white"
															viewBox="0 0 20 20"
														>
															<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
														</svg>
													)}
												</div>
												<span className="text-sm font-medium">{name}</span>
											</label>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center gap-6">
						<button
							className="mb-6 w-56 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#8A8A8A' }}
							type="submit"
						>
							Voltar
						</button>
						<button
							className="mb-6 w-56 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#EF0037' }}
							type="submit"
							onClick={handleNextButtonClick}
						>
							Avançar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
