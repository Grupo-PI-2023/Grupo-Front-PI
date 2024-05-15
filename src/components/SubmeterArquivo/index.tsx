import React, { ReactElement, useState } from 'react';

import { FaRegUser, FaTimes } from 'react-icons/fa';
import Select from 'react-select';

import { LabelValue } from '@/components/TabBarForms/FormsComissao';
import SelectCom from '@/components/COMPONENTES/Select';
import FileInput from '@/components/COMPONENTES/FileInput';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import TextAreaInput from '@/components/COMPONENTES/TextAreaInput';
import Title from '@/components/COMPONENTES/Title';
import FormButtons from '@/components/COMPONENTES/FormButtons';
import Areas from '@/components/SubmeterArquivo/Areas';

import mockedOptionAreas from '@/mocks/OptionsAreas';
import grandeAreas from '@/mocks/Areas';
import { Arquivo } from '@/repository/arquivo/index.repository';

export default function SubmeterArquivo() {
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

	const [titulo, setTitulo] = useState('');

	const [resumo, setResumo] = useState('');
	const [abstract, setAbstract] = useState('');
	const [palavras, setPalavras] = useState('');
	const [words, setWords] = useState('');

	const [arquivos, setArquivos] = useState<Arquivo[]>([]);
	const [showCard, setShowCard] = useState(false);

	const [ass, setAss] = useState(['']);

	const [realGrandeAreas, setRealGrandeAreas] = useState<
		(string | undefined)[]
	>([]);
	const [grandeArea, setGrandeAreas] =
		useState<LabelValue[]>(mockedOptionAreas);
	const [realAreas, setRealAreas] = useState<(string | undefined)[]>([]);
	const [areas, setAreas] = useState<LabelValue[]>(mockedOptionAreas);
	const [realSubAreas, setRealSubAreas] = useState<(string | undefined)[]>([]);
	const [subareas, setSubAreas] = useState<LabelValue[]>(mockedOptionAreas);
	const [especialidades, setEspecialidades] = useState(['']);
	const handleEspecialidades = (
		setSubArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const lastArea =
			setSubArea === setEspecialidades
				? especialidades[especialidades.length - 1]
				: ass[ass.length - 1];
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
	const handleEspecialidadeChange = (
		index: number,
		value: string,
		setSubArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const newAreas = [
			...(setSubArea === setEspecialidades ? especialidades : ass),
		];
		newAreas[index] = value;
		setSubArea(newAreas);
	};




	// const [name, setName] = useState('');
	// const [email, setEmail] = useState('');
	// const [curso, setCurso] = useState('');
	// const [instituicao, setInst] = useState('');
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


	type Formulario = {
		id: number;
	  };
	const [autores, setAutores] = useState<Formulario[]>([]);
	const [idCounter, setIdCounter] = useState(0);

	const handleAddAutores = () => {
		const id = idCounter;
		const novoFormulario = { id };
		setAutores([...autores, novoFormulario]);
		setIdCounter(idCounter + 1);
	};
	const excluirFormularioAutor = (index: number) => {
		const novosAutores = autores.filter((_, i) => i !== index);
		setAutores(novosAutores);
	};
	
	
	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-[60vw] ">
				<Title
					color="#4B00E0"
					title="Submeter Arquivos"
					subtitle="Submeta o arquivo para participar do evento CultureFest"
				/>
				<form className="mt-8 w-full" onSubmit={handleSubmitForm}>
					<div className="mb-8 flex flex-wrap justify-center gap-5">
						<NormalInput
							id="title"
							label="Título"
							placeholder="Título do artigo"
							value={titulo}
							onChange={(e) => setTitulo(e.target.value)}
						/>

						<NormalInput
							id="palavras"
							label="Palavras-Chaves"
							placeholder="Artigo, Análise Científica, etc..."
							value={palavras}
							onChange={(e) => setPalavras(e.target.value)}
						/>

						<TextAreaInput
							id="resumo"
							label="Resumo"
							placeholder="Resumo do artigo"
							value={resumo}
							onChange={(e) => setResumo(e.target.value)}
							rows={5}
						/>

						<TextAreaInput
							id="abstract"
							label="Abstract"
							placeholder="Summary of article"
							value={abstract}
							onChange={(e) => setAbstract(e.target.value)}
							rows={5}
						/>

						<NormalInput
							id="words"
							label="Key-Words"
							placeholder="Plástico, Polímeros, Isopor"
							value={words}
							onChange={(e) => setWords(e.target.value)}
						/>

						{/* areas  */}
						<Areas/>
						
					</div>

					{/* uploads  */}
					<div className="mb-8 flex flex-wrap justify-center gap-5">
						<FileInput id="artigoCompleto" label="Artigo Completo" />
						<FileInput id="artigoSemAutor" label="Artigo sem autoria" />
					</div>

					{/* forms autores  */}
					{autores.map((formulario) => (
						<div
						className="relative mb-8 flex flex-wrap justify-center gap-5 rounded-md bg-[#DEDEDE] pt-8"
						key={formulario.id}
					>
						<button
							className="absolute right-4 top-4 m-0 flex h-[2rem] w-[2.2rem] items-center justify-center rounded-full border-[1px] border-slate-900 p-0"
							onClick={() => excluirFormularioAutor(formulario.id)}
						>
							<p className="text-xl font-bold ">X</p>
						</button>
			
						<div className="mb-5 flex w-[45%] items-center gap-5 text-[1.8rem]">
							<FaRegUser />
							<p>Autor</p>
						</div>
			
						<SelectCom
							options={turno.map((tur, i) => ({ label: tur, value: i }))}
							preSelect={0}
							disabled={false}
							id={`turno-${formulario.id}`}
							label="Turno"
						/>
			
						<NormalInput
							label="Nome completo"
							id={`fullName-${formulario.id}`}
							placeholder="Nome do autor"
						/>
			
						<NormalInput
							label="Curso"
							id={`curso-${formulario.id}`}
							placeholder="Curso atual"
						/>
			
						<NormalInput
							label="E-mail"
							id={`email-${formulario.id}`}
							placeholder="emailexemplo@email.com"
						/>
			
						<NormalInput
							label="Instituição Referente"
							id={`instituicao-${formulario.id}`}
							placeholder="Instituição do autor"
						/>
					</div>
					))}
					<div
						className="mb-8 flex cursor-pointer flex-wrap items-center justify-center gap-5 rounded-md bg-[#DEDEDE] px-4 py-3"
						onClick={handleAddAutores}
					>
						<button className="m-0 flex h-[2rem] w-[2.2rem] items-center justify-center rounded-full border-[1px] border-slate-900 p-0">
							<p className="text-xl font-bold ">+</p>
						</button>
						<p>Adicionar mais autores</p>
					</div>
					
					{/* submit button  */}
					<FormButtons label='Enviar' labelBack='Voltar' />
				</form>
			</div>
		</div>
	);
}

type FormAutorType = {
	index: number;
	removeForm?(index: number): void;
};
function FormAutor({ index, removeForm }: FormAutorType) {
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
	return (
		<div
			className="relative mb-8 flex flex-wrap justify-center gap-5 rounded-md bg-[#DEDEDE] pt-8"
			key={index}
		>
			<button
				className="absolute right-4 top-4 m-0 flex h-[2rem] w-[2.2rem] items-center justify-center rounded-full border-[1px] border-slate-900 p-0"
				onClick={() => removeForm && removeForm(index)}
			>
				<p className="text-xl font-bold ">X</p>
			</button>

			<div className="mb-5 flex w-[45%] items-center gap-5 text-[1.8rem]">
				<FaRegUser />
				<p>Autor</p>
			</div>

			<SelectCom
				options={turno.map((tur, i) => ({ label: tur, value: i }))}
				preSelect={0}
				disabled={false}
				id={`turno-${index}`}
				label="Turno"
			/>

			<NormalInput
				label="Nome completo"
				id={`fullName-${index}`}
				placeholder="Nome do autor"
			/>

			<NormalInput
				label="Curso"
				id={`curso-${index}`}
				placeholder="Curso atual"
			/>

			<NormalInput
				label="E-mail"
				id={`email-${index}`}
				placeholder="emailexemplo@email.com"
			/>

			<NormalInput
				label="Instituição Referente"
				id={`instituicao-${index}`}
				placeholder="Instituição do autor"
			/>
		</div>
	);
}
