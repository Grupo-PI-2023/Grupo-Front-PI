'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

import AlertCard from '@/components/COMPONENTES/AlertCard';
import CheckInput from '@/components/COMPONENTES/CheckInput';
import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import FileInput from '@/components/COMPONENTES/FileInput';
import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/NavbarAuthenticated';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import Select from '@/components/COMPONENTES/Select';
import TextAreaInput from '@/components/COMPONENTES/TextAreaInput';
import Title from '@/components/COMPONENTES/Title';
import { Area } from '@/lib/repository/area/index.repository';
import { Event } from '@/lib/repository/event/index.repository';

export default function EditarEvento() {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [descricao, setDescricao] = useState('');
	const [assuntoPrincipal, setAssuntoPrincipal] = useState('');
	const [cep, setCep] = useState('');
	const [local, setLocal] = useState('');
	const [dataInicio, setDataInicio] = useState('');
	const [dataFinal, setDataFinal] = useState('');
	const [horarioInicio, setHorarioInicio] = useState('');
	const [horarioFinal, setHorarioFinal] = useState('');
	const [comissaoId, setComissaoId] = useState('');

	const [showCard, setShowCard] = useState(false);

	const [areas, setAreas] = useState(['']);
	const [ass, setAss] = useState(['']);
	const handleAddArea = (
		setArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const lastArea =
			setArea === setAreas ? areas[areas.length - 1] : ass[ass.length - 1];
		if (lastArea.trim() !== '') {
			setArea((prevAreas) => [...prevAreas, '']);
		}
	};
	const handleRemoveArea = (
		index: number,
		setArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		setArea((prevAreas) => prevAreas.filter((_, i) => i !== index));
	};
	const handleAreaChange = (
		index: number,
		value: string,
		setArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const newAreas = [...(setArea === setAreas ? areas : ass)];
		newAreas[index] = value;
		setArea(newAreas);
	};

	const [file, setFile] = useState<File | null>(null);
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files && e.target.files[0];

		if (selectedFile) {
			setFile(selectedFile);
		}
	};
	const handleFileDelete = () => {
		setFile(null);
	};

	const checkboxTipo = ['Presencial', 'Hibrido', 'Remoto'];
	const [tipo, setTipo] = useState(checkboxTipo);
	const [checkboxesTipo, setCheckboxesTipo] = useState(
		checkboxTipo.map(() => false)
	);
	const handleCheckboxChangeTipo = (index: any) => {
		setCheckboxesTipo((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};

	const checkboxEvento = ['Público', 'Privado'];
	const [evento, setEvento] = useState(checkboxEvento);
	const [checkboxesEvento, setCheckboxesEvento] = useState(
		checkboxEvento.map(() => false)
	);
	const handleCheckboxChangeEvento = (index: any) => {
		setCheckboxesEvento((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};

	const checkboxGerar = ['Anais', 'Certificados'];
	const [gerar, setGerar] = useState(checkboxGerar);
	const [checkboxesGerar, setCheckboxesGerar] = useState(
		checkboxGerar.map(() => false)
	);
	const handleCheckboxChangeGerar = (index: any) => {
		setCheckboxesGerar((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};

	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
	const [turno, setTurno] = useState(checkboxPeriodo);
	const [checkboxesPeriodos, setCheckboxesPeri] = useState(
		checkboxPeriodo.map(() => false)
	);
	const handleCheckboxChangePeriodo = (index: any) => {
		setCheckboxesPeri((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};

	useEffect(() => {
		const getInfos = async () => {
			try {
				setNome('');
				setEmail('');
				setDescricao('');
				setAssuntoPrincipal('');
				setCep('');
				setLocal('');
				setDataInicio('');
				setDataFinal('');
				setHorarioInicio('');
				setHorarioFinal('');
				setComissaoId('');
				const id = localStorage.getItem('eventId');
				const result = await axios.get(`http://localhost:5002/event/${id}`);
				const resultAreas = await axios.get(
					`http://localhost:5002/area-event/${id}`
				);
				if (result.data.event && resultAreas.data.areas) {
					const event: Event = result.data.event;
					setNome(event.nomeEvento);
					setEmail(event.emailEvento);
					setDescricao(event.descricao);
					setAssuntoPrincipal(event.assuntoPrincipal);
					setCep(event.cep ?? cep);
					setLocal(event.local ?? local);
					setDataInicio(event.dataInicio ?? dataInicio);
					setDataFinal(event.dataFinal ?? dataFinal);
					setHorarioInicio(event.horarioInicio ?? horarioInicio);
					setHorarioFinal(event.horarioFim ?? horarioFinal);
					setComissaoId(event.comissaoId);
					// const checkboxEvento = ['Público', 'Privado'];
					if (event.evento === checkboxEvento[0]) {
						handleCheckboxChangeEvento(0);
					}
					if (event.evento === checkboxEvento[1]) {
						handleCheckboxChangeEvento(1);
					}
					// const checkboxGerar = ['Anais', 'Certificados'];
					if (event.gerar === checkboxGerar[0]) {
						handleCheckboxChangeGerar(0);
					}
					if (event.evento === checkboxGerar[1]) {
						handleCheckboxChangeGerar(1);
					}
					// const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
					if (event.periodo === checkboxPeriodo[0]) {
						handleCheckboxChangePeriodo(0);
					}
					if (event.periodo === checkboxPeriodo[1]) {
						handleCheckboxChangePeriodo(1);
					}
					if (event.periodo === checkboxPeriodo[2]) {
						handleCheckboxChangePeriodo(2);
					}
					// const checkboxTipo = ['Presencial', 'Hibrido', 'Remoto'];
					if (event.tipo === checkboxTipo[0]) {
						handleCheckboxChangeTipo(0);
					}
					if (event.tipo === checkboxTipo[1]) {
						handleCheckboxChangeTipo(1);
					}
					if (event.tipo === checkboxTipo[2]) {
						handleCheckboxChangeTipo(2);
					}
					const areasComming: Area[] = resultAreas.data.areas;
					// const areasValueLabel = areasComming.map((area) => {
					// 	const labelvalue = { value: area.id, label: area.nome };
					// 	return labelvalue;
					// });
					// console.log(areasValueLabel);
					setAreas(areasComming.map((area) => area.nome));
				}
			} catch (error) {
				console.log(error);
			}
		};
		getInfos();
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const eventID = localStorage.getItem('eventId');
		// const eventID = '4cfc3ed4-bac2-4224-b5ef-6ac09a24890a';
		if (eventID) {
			const data: Event = {
				comissaoId: comissaoId,
				assuntoPrincipal: assuntoPrincipal,
				descricao: descricao,
				emailEvento: email,
				nomeEvento: nome,
				tipo: checkboxTipo[0] || checkboxTipo[1] || checkboxTipo[2],
				logo: file ? file.name : null,
				local: local,
				cep: cep,
				dataInicio: dataInicio,
				dataFinal: dataFinal,
				horarioInicio: horarioInicio,
				horarioFim: horarioFinal,
				periodo: checkboxPeriodo[0] || checkboxPeriodo[1] || checkboxPeriodo[2],
				gerar: checkboxGerar[0] || checkboxGerar[1],
				evento: checkboxEvento[0] || checkboxEvento[1],
			};

			try {
				const result = await axios.put(
					`http://localhost:5002/event/${eventID}`,
					data
				);
				if (result.data.eventUpdated) {
					console.log(result);
					setShowCard(true);
					setTimeout(() => {
						setShowCard(false);
					}, 3000);
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div>
			<NavbarAuthenticated />

			<div className="container">
				<div className="w-[50vw]">
					<Title title="Edite seu evento!" subtitle="" colorHex="#ef0037" />
					<AlertCard message="Evento atualizado com sucesso" show={showCard} />
					<form className="mt-8 w-full" onSubmit={handleSubmit}>
						<div className="flex justify-center gap-5">
							<div className="w-full">
								<NormalInput
									label="Nome do Evento:"
									type="text"
									name="eventName"
									id="eventName"
									placeholder="Nome do Evento"
									value={nome}
									onChange={(e) => setNome(e.target.value)}
									customWidth="100%"
								/>
								<TextAreaInput
									label="Descrição do Evento:"
									name="descricao"
									id="descricao"
									placeholder="Descrição do Evento"
									rows={3}
									value={descricao}
									onChange={(e) => setDescricao(e.target.value)}
									customWidth="100%"
								/>
								<Select
									disabled={false}
									id="select"
									label="Selecione:"
									options={tipo.map((tipo, i) => ({ label: tipo, value: i }))}
									preSelect={0}
									customWidth="100%"
								/>
								<NormalInput
									label="Assunto Principal:"
									type="text"
									name="assunto"
									id="assunto"
									placeholder="Assunto Principal do Evento"
									value={assuntoPrincipal}
									onChange={(e) => setAssuntoPrincipal(e.target.value)}
									customWidth="100%"
								/>
								<NormalInput
									label="Data de Início:"
									type="Date"
									name="dateInicio"
									id="dateInicio"
									value={dataInicio}
									onChange={(e) => setDataInicio(e.target.value)}
									customWidth="100%"
								/>
								<NormalInput
									label="Data de Finalização:"
									type="Date"
									name="dateFinal"
									id="dateFinal"
									value={dataFinal}
									onChange={(e) => setDataFinal(e.target.value)}
									customWidth="100%"
								/>
								<NormalInput
									label="Horário de Início:"
									type="time"
									name="horaInicio"
									id="horaInicio"
									value={horarioInicio}
									onChange={(e) => setHorarioInicio(e.target.value)}
									customWidth="100%"
								/>
								<NormalInput
									label="Horário de Finalização:"
									type="time"
									name="horaFinal"
									id="horaFinal"
									value={horarioFinal}
									onChange={(e) => setHorarioFinal(e.target.value)}
									customWidth="100%"
								/>
							</div>
							<div className="w-full">
								<NormalInput
									label="Email do Evento:"
									type="text"
									name="emailEvent"
									id="emailEvent"
									placeholder="Email do Evento"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									customWidth="100%"
								/>
								<NormalInput
									label="CEP:"
									type="text"
									name="cep"
									id="cep"
									placeholder="CEP do Evento"
									value={cep}
									onChange={(e) => setCep(e.target.value)}
									customWidth="100%"
								/>
								<NormalInput
									label="Local:"
									type="text"
									name="local"
									id="local"
									placeholder="Local do Evento"
									value={local}
									onChange={(e) => setLocal(e.target.value)}
									customWidth="100%"
								/>
								<Select
									disabled={false}
									id="evento"
									label="Evento:"
									options={evento.map((event, i) => ({
										label: event,
										value: i,
									}))}
									preSelect={0}
									customWidth="100%"
								/>
								<Select
									disabled={false}
									id="gerar"
									label="Gerar:"
									options={gerar.map((gerar, i) => ({
										label: gerar,
										value: i,
									}))}
									preSelect={0}
									customWidth="100%"
								/>
								<Select
									disabled={false}
									id="periodo"
									label="Período:"
									options={turno.map((turno, i) => ({
										label: turno,
										value: i,
									}))}
									preSelect={0}
									customWidth="100%"
								/>

								<div className="mb-5 flex flex-col">
									<label className="mb-2 text-sm font-medium" htmlFor="areas">
										Áreas de Conhecimento
									</label>
									<div>
										<div className="mb-3 flex items-center">
											<div className="w-full rounded-md border border-gray-300 bg-white px-4 py-2">
												<input
													className="w-full rounded-md border-0 bg-white text-sm outline-none"
													type="text"
													name="areas"
													value={areas[areas.length - 1]}
													onChange={(e) =>
														handleAreaChange(
															areas.length - 1,
															e.target.value,
															setAreas
														)
													}
													placeholder="Áreas de Conhecimento da Comissão"
													required
												/>
											</div>
											<div
												className="ml-3 cursor-pointer rounded-full px-2"
												onClick={() => handleAddArea(setAreas)}
												style={{ backgroundColor: '#4B00E0' }}
											>
												<p className="text-xl font-bold text-white">+</p>
											</div>
										</div>
										<div className="flex gap-2.5">
											{areas.map((area, index) => (
												<div
													key={index}
													className="flex items-center rounded-full border border-gray-300 bg-white px-2 py-0.5"
												>
													<div className="w-full">
														<input
															className="w-full rounded-md border-0 bg-white text-sm outline-none"
															type="text"
															name="areas"
															value={area}
															onChange={(e) =>
																handleAreaChange(
																	index,
																	e.target.value,
																	setAreas
																)
															}
															readOnly
															required
														/>
													</div>
													<div
														className="ml-2 cursor-pointer rounded-full px-1"
														style={{ backgroundColor: '#ef0037' }}
														onClick={() => handleRemoveArea(index, setAreas)}
													>
														<FaTimes className="w-2 text-white" />
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
								<FileInput
									id="file"
									label="Anexar Logo"
									disabled={false}
									customWidth="100%"
								/>
							</div>
						</div>

						<div className="mt-5 flex items-center justify-center gap-5">
							<DefaultButton
								label="Editar"
								backgroundColorHex="#EF0037"
								customWidth="15%"
							/>
						</div>
					</form>
				</div>
			</div>

			<Footer />
		</div>
	);
}
