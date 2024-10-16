'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { TfiPlus } from 'react-icons/tfi';
import Select from 'react-select';

import AlertCard from '@/components/AlertCard';
import CheckInput from '@/components/CheckInput';
import DefaultButton from '@/components/DefaultButton';
import IncrementInput from '@/components/IncrementInput';
import NormalInput from '@/components/NormalInput';
import DefaultSelect from '@/components/Select';
import { OptionsType } from '@/components/Select';
import Title from '@/components/Title';
import { Area } from '@/lib/repository/area/index.repository';
import { Comissao } from '@/lib/repository/comission/index.repository';

export default function FormUsuario() {
	type Option = { label: string; value: string };

	// Estrutura de dados: Grande Área -> Áreas -> Subáreas
	const data: Record<string, Record<string, string[]>> = {
		'Ciências Exatas e da Terra': {
			Matemática: ['Álgebra', 'Geometria', 'Cálculo'],
			Física: ['Física Teórica', 'Física Aplicada'],
		},
		'Ciências Humanas': {
			História: ['História Antiga', 'História Moderna'],
			Filosofia: ['Filosofia Antiga', 'Filosofia Contemporânea'],
		},
	};
	const [selectedGrandeArea, setSelectedGrandeArea] = useState<Option | null>(
		null
	);
	const [selectedArea, setSelectedArea] = useState<Option | null>(null);

	const grandeAreasOptions: Option[] = Object.keys(data).map((key) => ({
		label: key,
		value: key,
	}));

	const areasOptions: Option[] = selectedGrandeArea
		? Object.keys(data[selectedGrandeArea.value]).map((key) => ({
				label: key,
				value: key,
		  }))
		: [];

	const instituicoesMock: OptionsType[] = [
		{
			label: 'Fatec Zona Leste',
			value: 0,
		},
		{
			label: 'Fatec São Paulo',
			value: 1,
		},
		{
			label: 'Fatec Zona Oeste',
			value: 2,
		},
	];

	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [cpf, setCpf] = useState('');
	const [email, setEmail] = useState('');
	const [instituicao, setInst] = useState('');
	const [turno, setTurno] = useState<string | undefined>('');
	const [lattes, setLattes] = useState('');
	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
	const [confirmpassword, setConfirmpassword] = useState('');
	const checkboxNames = ['Organizador', 'Avaliador'];
	const [checkboxes, setCheckboxes] = useState(checkboxNames.map(() => false));
	const [showCard, setShowCard] = useState(false);

	const [realAreas, setRealAreas] = useState<(string | undefined)[]>([]);

	const [subareas, setSubAreas] = useState(['']);

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

	useEffect(() => {
		async function getAreas() {
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
					// setSelectedGrandeArea(areasValueLabel)
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
		<div className="container-submenu">
			<div className="w-[60vw]">
				<AlertCard message="Comissao cadastrada com sucesso" show={showCard} />
				<Title
					title="Cadastrar Comissão"
					subtitle="Cadastro como parte da comissão, possível mais de uma função"
					colorHex="#4B00E0"
				/>

				<form className="form bg-white shadow-md" onSubmit={handleSubmit}>
					<div className="flex w-full flex-wrap justify-center gap-5">
						<NormalInput
							id="fullName"
							label="Nome completo"
							placeholder="Nome do aluno"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<NormalInput
							id="email"
							label="E-mail"
							placeholder="emailuser@email.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							required
						/>

						<NormalInput
							id="password"
							label="Senha"
							placeholder="Senha do Usuário"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<NormalInput
							id="confirmPassword"
							label="Confirmar Senha"
							placeholder="Senha do Usuário"
							type="password"
							value={confirmpassword}
							onChange={(e) => setConfirmpassword(e.target.value)}
							required
						/>
						<NormalInput
							id="cpf"
							label="CPF"
							placeholder="CPF do Usuário"
							type="text"
							value={cpf}
							onChange={(e) => setCpf(e.target.value)}
							required
						/>

						<DefaultSelect
							label="Instituição Referente"
							options={instituicoesMock}
							disabled={false}
							preSelect={0}
							id="institution"
						/>

						<div className="mb-5 w-[45%]">
							<label className="mb-2 text-sm font-medium">
								Função no Evento
							</label>
							<div className="flex items-center gap-3 py-2.5">
								{checkboxNames.map((name, index) => (
									<CheckInput
										id={`${name}-${index}`}
										key={index}
										label={name}
										disabled={false}
										selected={false}
									/>
								))}
							</div>
						</div>

						<div className="mb-5 w-[45%]">
							<label className="mb-2 text-sm font-medium">Período:</label>
							<div className="flex items-center gap-3 py-2.5">
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

						<NormalInput
							id="link"
							label="Link Lattes"
							placeholder="https://link.lattes.da.comissão.com"
							value={lattes}
							onChange={(e) => setLattes(e.target.value)}
							required
							type="url"
						/>

						<div className="mb-5 flex w-[45%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="areas">
								Grandes Áreas de Conhecimento
							</label>
							<div className="w-full">
								<Select
									options={grandeAreasOptions}
									value={selectedGrandeArea}
									onChange={(option) => {
										setSelectedGrandeArea(option);
										setSelectedArea(null);
									}}
									styles={customStyles}
									placeholder="Selecione uma Grande Área"
								/>
							</div>
						</div>
						<div className="mb-5 flex w-[45%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="areas">
								Áreas de Conhecimento
							</label>
							<div className="w-full">
								<Select
									options={areasOptions}
									value={selectedArea}
									onChange={(option) => {
										setSelectedArea(option);
									}}
									isDisabled={!selectedGrandeArea}
									placeholder="Selecione uma Área"
									styles={customStyles}
								/>
							</div>
						</div>

						<IncrementInput
							label="Sub Áreas de Conhecimento"
							arrayValue={subareas}
							setArrayValue={setSubAreas}
							customWidth="45%"
							placeholder="SubAreas de Conhecimento da Comissão"
						/>
					</div>

					<div className="mb-5 flex w-full items-center justify-center gap-5 ">
						<label className="text-sm font-medium">
							Cadastrar mais Instituições
						</label>

						<button
							className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-red-500"
							type="button"
						>
							<TfiPlus height="40px" color="white" />
						</button>
					</div>

					<div className="mb-5 flex w-[45%] flex-col">
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
					<div className="flex w-full items-center justify-center gap-5">
						<DefaultButton
							label="Voltar"
							backgroundColorHex="#8A8A8A"
							type="submit"
						/>
						<DefaultButton
							label="Cadastrar"
							backgroundColorHex="#4B00E0"
							type="submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
