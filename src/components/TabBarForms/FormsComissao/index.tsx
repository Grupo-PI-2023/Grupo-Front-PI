'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { result } from 'lodash';
import { FaTimes } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Select from 'react-select';

import AlertCard from '@/components/COMPONENTES/AlertCard';
import { Area } from '@/lib/repository/area/index.repository';
import { Comissao } from '@/lib/repository/comission/index.repository';
import mockedOptionAreas from '@/mocks/OptionsAreas';
import mockedOptionTurnos from '@/mocks/OptionsTurnos';


export type LabelValue = {
	label: string;
	value: string | undefined;
};

export default function CadastroComissao() {

	const [isAdmin, setIsAdmin] = useState(false);

	const [passwordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [cpf, setCpf] = useState('');
	const [email, setEmail] = useState('');
	const [instituicao, setInst] = useState('');
	const [turno, setTurno] = useState<string | undefined>('');
	const [lattes, setLattes] = useState('');
	const [confirmpasswordVisible, setConfirmpasswordVisible] = useState(false);
	const [confirmpassword, setConfirmpassword] = useState('');
	// funcao no evento:
	const checkboxNames = ['Organizador', 'Chair', 'Avaliador', 'Admin'];
	const [checkboxes, setCheckboxes] = useState(checkboxNames.map(() => false));
	const [showCard, setShowCard] = useState(false);

	const handleCheckboxChange = (index: any) => {
		setCheckboxes((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};

	const [areas, setAreas] = useState<LabelValue[]>(mockedOptionAreas);
	const [realAreas, setRealAreas] = useState<(string | undefined)[]>([]);

	const [subareas, setSubAreas] = useState(['']);
	const [ass, setAss] = useState(['']);
	const handleAddSubArea = (
		setSubArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const lastArea =
			setSubArea === setSubAreas ? subareas[subareas.length - 1] : ass[ass.length - 1];
		if (lastArea.trim() !== '') {
			setSubArea((prevAreas) => [...prevAreas, '']);
		}
	};
	const handleRemoveSubArea = (
		index: number,
		setSubArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		setSubArea((prevAreas) => prevAreas.filter((_, i) => i !== index));
	};
	const handleSubAreaChange = (
		index: number,
		value: string,
		setSubArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const newAreas = [...(setSubArea === setSubAreas ? subareas : ass)];
		newAreas[index] = value;
		setSubArea(newAreas);
	};

	const customStyles = {
		control: (provided: any) => ({
			...provided,
			width: '100%',
			height: 'auto',
			borderRadius: '0.375rem',
			border: '1',
			background: 'white',
			fontSize: '0.875rem',
		}),
	};

	const handleTogglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};
	const handleToggleConfirmPasswordVisibility = () => {
		setConfirmpasswordVisible(!confirmpasswordVisible);
	};

	useEffect(() => {
		async function getAreas() {
			setIsAdmin(false);
			try {
				const id = localStorage.getItem('eventId');

				const result = await axios.get(
					`http://localhost:5002/area-event/${id}`
				);
				if (result.data.areas) {
					const areasComming: Area[] = result.data.areas;
					const areasValueLabel = areasComming.map((area) => {
						const labelvalue = { value: area.id, label: area.nome };
						return labelvalue;
					});
					console.log(areasValueLabel);
					setAreas(areasValueLabel);
				}
			} catch (error) {
				console.log(error);
			}
		}
		getAreas();
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const organizador = checkboxes.filter((item) =>
				item === checkboxes[0] ? true : false
			)[0];
			const adm = checkboxes.filter((item) =>
				item == checkboxes[3] ? true : false
			)[0];
			const chair = checkboxes.filter((item) =>
				item == checkboxes[1] ? true : false
			)[0];
			const avaliador = checkboxes.filter((item) =>
				item == checkboxes[2] ? true : false
			)[0];
			console.log(realAreas?.map((area) => area));
			const data: Comissao = {
				name,
				email,
				senha: password,
				cpf,
				instituicao,
				turno,
				lattes,
				// adm: checkboxes[3],
				// organizador: checkboxes[0],
				// chair: checkboxes[1],
				// avaliador: checkboxes[2],
				adm,
				organizador,
				chair,
				avaliador,
				// certificado: '',
				areaConhecimento: realAreas?.map((area) => area),
			};
			const result = await axios.post('http://localhost:5002/comissao', data);
			console.log(result);
			if (result.data.comissaoCreated) {
				// habilitar card de 3seg indicando cadastro realizado
				console.log(result);
				setShowCard(true);
				setTimeout(() => {
					setShowCard(false);
				}, 3000);
				setName('');
				setCpf('');
				setEmail('');
				setInst('');
				setPassword('');
				setConfirmpassword('');
				setLattes('');
				setCheckboxes(checkboxNames.map(() => false));
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-[60vw]">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#4B00E0' }}
				>
					Cadastrar Comissão
				</h1>
				<AlertCard message="Comissao cadastrada com sucesso" show={showCard} />
				<p className="text-center text-sm text-black">
					Cadastro como parte da comissão, possível mais de uma função
				</p>
				<form className="card mt-8" onSubmit={handleSubmit}>
					<div className="flex flex-wrap justify-center items-center gap-5">

							<div className="mb-5 w-[45%] flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="fullName">
									Nome completo
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="fullName"
										id="fullName"
										placeholder="Nome da Comissão"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="mb-5 w-[45%] flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="email">
									E-mail
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="email"
										name="email"
										id="email"
										placeholder="emailcomissao@email.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
							</div>

							{ !isAdmin && (
								<>
									<div className="mb-5 w-[45%] flex flex-col">
										<label className="mb-2 text-sm font-medium" htmlFor="password">
											Senha
										</label>
										<div className="flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2.5">
											<input
												className="w-11/12 rounded-md border-0 bg-white text-sm outline-none"
												type={passwordVisible ? 'text' : 'password'}
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												name="password"
												id="password"
												placeholder="Senha da Comissão"
												required
											/>
											{passwordVisible ? (
												<FiEye
													className="h-4 w-4 text-black"
													onClick={handleTogglePasswordVisibility}
												/>
											) : (
												<FiEyeOff
													className="h-4 w-4 text-black"
													onClick={handleTogglePasswordVisibility}
												/>
											)}
										</div>
									</div>
									<div className="mb-5 w-[45%] flex flex-col">
										<label className="mb-2 text-sm font-medium" htmlFor="password">
											Confirmar Senha
										</label>
										<div className="flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2.5">
											<input
												className="w-11/12 rounded-md border-0 bg-white text-sm outline-none"
												type={confirmpasswordVisible ? 'text' : 'password'}
												value={confirmpassword}
												onChange={(e) => setConfirmpassword(e.target.value)}
												name="password"
												id="password"
												placeholder="Senha da Comissão"
												required
											/>
											{confirmpasswordVisible ? (
												<FiEye
													className="h-4 w-4 text-black"
													onClick={handleToggleConfirmPasswordVisibility}
												/>
											) : (
												<FiEyeOff
													className="h-4 w-4 text-black"
													onClick={handleToggleConfirmPasswordVisibility}
												/>
											)}
										</div>
									</div>
								</>
							)}

							<div className="mb-5 w-[45%]">
								<label className="mb-2 text-sm font-medium" htmlFor="funcao">
									Função no Evento
								</label>
								<div className="flex items-center gap-3 py-2.5">
									{checkboxNames.map((name, index) => (
										<div key={index}>
											<div className="flex items-center">
												<input
													className="hidden"
													type="checkbox"
													name={`checkbox-${index}`}
													id={`checkbox-${index}`}
													checked={checkboxes[index]}
													onChange={() => handleCheckboxChange(index)}
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
							<div className="mb-5 w-[45%] flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="instituicao"
								>
									Instituição Referente
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="instituicao"
										id="instituicao"
										placeholder="Instituição da Comissão"
										value={instituicao}
										onChange={(e) => setInst(e.target.value)}
										required
									/>
								</div>
							</div>

							<div className="mb-5 w-[45%] flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="areas">
									Áreas de Conhecimento
								</label>
								<div className="w-full">
									<Select
										isMulti
										name="areas"
										options={areas}
										className="basic-multi-select border-gray-300"
										classNamePrefix="select"
										styles={customStyles}
										onChange={(choice) =>
											setRealAreas(choice.map((a) => a.value))
										}
									/>
								</div>
							</div>

							<div className="mb-5 w-[45%] flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="areas">
									Sub Áreas de Conhecimento
								</label>
								<div>
									<div className="mb-3 ">
										<div className="w-full px-4 py-2 flex items-center justify-around rounded-md border border-gray-300 bg-white">

											<input
												className="w-full bg-white text-sm outline-none"
												type="text"
												name="subareas"
												value={subareas[subareas.length - 1]}
												onChange={(e) =>
													handleSubAreaChange(
														subareas.length - 1,
														e.target.value,
														setSubAreas
													)
												}
												placeholder="Áreas de Conhecimento da Comissão"
												required
											/>

											<div
												className="cursor-pointer border-slate-900 border-[1px] h-[2rem] w-[2.2rem] rounded-full flex justify-center items-center m-0 p-0"
												onClick={() => handleAddSubArea(setSubAreas)}
											>
												<p className="text-xl font-bold ">+</p>
											</div>
										</div>
									</div>
									<div className="flex gap-2.5 flex-wrap">
										{subareas.map((area, index) => (
											<div
												key={index}
												className="flex items-center rounded-full border border-gray-300 bg-white px-2 py-0.5"
											>
												<div className="w-full">
													<input
														className="w-full rounded-md border-0 bg-white text-sm outline-none"
														type="text"
														name="subareas"
														value={area}
														onChange={(e) =>
															handleSubAreaChange(index, e.target.value, setSubAreas)
														}
														readOnly
														required
													/>
												</div>
												<div
													className="ml-2 cursor-pointer rounded-full px-1"
													style={{ backgroundColor: '#ef0037' }}
													onClick={() => handleRemoveSubArea(index, setSubAreas)}
												>
													<FaTimes className="w-2 text-white" />
												</div>
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="mb-5 w-[45%] flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="turno">
									Turno
								</label>
								<div className="w-full">
									<Select
										name="turnos"
										options={mockedOptionTurnos}
										className="basic-multi-select border-gray-300"
										classNamePrefix="select"
										styles={customStyles}
										onChange={(choice) => setTurno(choice?.label)}
									/>
								</div>
							</div>
							<div className="mb-5 w-[45%] flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="link">
									Link Lattes
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="url"
										name="link"
										id="link"
										placeholder="link Lattes da Comissão"
										value={lattes}
										onChange={(e) => setLattes(e.target.value)}
										required
									/>
								</div>
							</div>

							<div className="mb-5 flex w-[45%] items-center justify-around ">
							<label className="text-sm font-medium">
								Cadastrar mais Instituições
							</label>

							<button
								className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-red-500"
								type="button"
							>
								<p className="text-3xl text-white">+</p>
							</button>
						</div>

					</div>
					<div className="my-6">
						<p className="text-center text-xs font-normal text-slate-400">
							Já tem uma conta？
							<a
								className="cursor-pointer font-bold text-[#4B00E0] underline"
								href="/login"
							>
								Log in
							</a>
						</p>
					</div>
					<div className="flex items-center justify-center gap-5">
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							type="button"
							style={{ backgroundColor: '#8A8A8A' }}
						>
							Voltar
						</button>
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#4B00E0' }}
							type="submit"
						>
							Cadastrar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
