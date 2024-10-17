import React, { useState } from 'react';

import axios from 'axios';

import AlertCard from '@/components/AlertCard';
import CheckInput from '@/components/CheckInput';
import DefaultButton from '@/components/DefaultButton';
import { Area } from '@/lib/repository/area/index.repository';
import { Event } from '@/lib/repository/event/index.repository';

import { DataLocalProps } from '..';

const Hibrido = ({ handleNextClick }: DataLocalProps) => {
	const [cep, setCep] = useState('');
	const [estado, setEstado] = useState('');
	const [local, setLocal] = useState('');
	const [cidade, setCidade] = useState('');
	const [link, setLink] = useState('');
	const [dataInicio, setDataInicio] = useState('');
	const [dataFinal, setDataFinal] = useState('');
	const [horarioInicio, setHorarioInicio] = useState('');
	const [horarioFinal, setHorarioFinal] = useState('');
	const [showCard, setShowCard] = useState(false);

	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
	const [checkboxes, setCheckboxes] = useState(
		checkboxPeriodo.map(() => false)
	);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// cadastrando evento:
		const data: Event = JSON.parse(localStorage.getItem('event') || '{}');
		if (data) {
			const periodo = checkboxes.findIndex((item) => item === true);
			data.local = `${local}, ${cep}, ${estado}, ${cidade}`;
			data.cep = cep;
			data.dataInicio = dataInicio;
			data.dataFinal = dataFinal;
			data.horarioInicio = horarioInicio;
			data.horarioFim = horarioFinal;
			data.periodo = checkboxPeriodo[periodo];
			try {
				const result = await axios.post('http://localhost:5002/event', data);
				if (result.data.userCreated) {
					localStorage.setItem('eventId', result.data.userCreated.id);
					setShowCard(true);
					setTimeout(() => {
						setShowCard(false);
						handleNextClick('arquivos');
					}, 3000);
				}
			} catch (error) {
				console.log(error);
			}
		}
		// cadastrando as areas:
		const parsedAreas = JSON.parse(localStorage.getItem('areas') || '[]');
		if (parsedAreas) {
			const eventId = localStorage.getItem('eventId');
			parsedAreas.forEach(async (areaName: string) => {
				const areaObjt: Area = {
					eventoId: eventId,
					nome: areaName,
				};
				try {
					const result = await axios.post(
						'http://localhost:5002/area',
						areaObjt
					);
					console.log(result);
				} catch (error) {
					console.log(error);
				}
			});
		}

		handleNextClick('arquivos');
	};

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-[60vw]">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Data e Local
				</h1>
				<AlertCard message="Evento cadastrado com sucesso" show={showCard} />
				<form className="mt-8 w-full" onSubmit={handleSubmit}>
					<div className="flex justify-center gap-10">
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
										value={cep}
										onChange={(e) => setCep(e.target.value)}
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
										value={estado}
										onChange={(e) => setEstado(e.target.value)}
										required
									/>
								</div>
							</div>

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
										value={dataInicio}
										onChange={(e) => setDataInicio(e.target.value)}
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
										value={horarioInicio}
										onChange={(e) => setHorarioInicio(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="mb-4 ">
								<div className="flex items-center justify-center gap-10 text-center">
									<label
										className="text-center text-base font-medium"
										htmlFor="evento"
									>
										Período:
									</label>
									<div className="flex items-center gap-3 py-6">
										{checkboxPeriodo.map((name, index) => (
											<CheckInput
												disabled={false}
												id={name + index}
												key={index}
												label={name}
												selected={false}
												name={name}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="w-full">
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
										value={local}
										onChange={(e) => setLocal(e.target.value)}
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
										value={cidade}
										onChange={(e) => setCidade(e.target.value)}
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
										value={dataFinal}
										onChange={(e) => setDataFinal(e.target.value)}
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
										value={horarioFinal}
										onChange={(e) => setHorarioFinal(e.target.value)}
										required
									/>
								</div>
							</div>

							<div className="mb-4 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="link">
									Link para transmissão online
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="link"
										name="link"
										id="link"
										value={link}
										onChange={(e) => setLink(e.target.value)}
										required
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-10 flex items-center justify-center gap-5">
						<DefaultButton
							label="Voltar"
							type="button"
							onClick={() => alert('funcao de voltar')}
						/>
						<DefaultButton
							label="Avançar"
							backgroundColorHex="#4B00E0"
							type="submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Hibrido;
