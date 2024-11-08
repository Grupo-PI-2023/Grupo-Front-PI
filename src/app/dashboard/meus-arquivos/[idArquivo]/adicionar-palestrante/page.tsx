'use client';

import { useState } from 'react';

import { FaRegUser } from 'react-icons/fa';

import CheckboxInput from '@/components/CheckboxInput';
import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import NormalInput from '@/components/NormalInput';
import Select from '@/components/Select';
import Title from '@/components/Title';
import alunos from '@/mocks/Aluno';

export default function AdicionarPalestrantePage() {
	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
<<<<<<<< Updated upstream:src/app/dashboard/adicionar-palestrante/page.tsx
	const [palestrante, setPalestrante] = useState(false);
========
	const router = useRouter();

	const handleAddAuthor = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(
			'idArquivo: ',
			params.idArquivo,
			'idPalestrantes: ',
			selectedSpeakers
		);
		router.push('/dashboard/meus-arquivos');
		// backend tasks
	};

	const [selectedSpeakers, setSelectedSpeakers] = useState<number[]>([]);
	const handleCheckboxChangeSpeaker = (studentId: number) => {
		setSelectedSpeakers((prevSelected) =>
			prevSelected.includes(studentId)
				? prevSelected.filter((id) => id !== studentId)
				: [...prevSelected, studentId]
		);
	};
>>>>>>>> Stashed changes:src/app/dashboard/meus-arquivos/[idArquivo]/adicionar-palestrante/page.tsx

	return (
		<div>
			<Navbar />
			<div className="container mb-6 mt-52 flex justify-center ">
				<form className="w-[60vw] ">
					<Title
						title="Adicionar Palestrante"
						colorHex="#EF0037"
						subtitle="Selecione o apresentador do artigo para apresenta-lo durante o evento"
					/>

					{alunos.map((aluno, key) => (
						<div
							className="card  my-10 flex flex-wrap justify-center gap-5 rounded-md"
							key={key}
						>
							<div className="mb-5 flex w-[45%] items-center gap-5 text-[1.8rem]">
								<FaRegUser />
								<p>Autor</p>
								<CheckboxInput
									label="Palestrante"
									disabled={false}
									id={`palestrante-${key}`}
									isChecked={aluno.palestrante}
									onChange={() =>
										setPalestrante(aluno.palestrante)
									}
								/>
							</div>

							<Select
								options={checkboxPeriodo.map((tur, i) => ({
									label: tur,
									value: i,
								}))}
								preSelect={aluno.periodo}
								disabled={true}
								label="Turno"
								id="turno"
							/>

							<NormalInput
								disabled={true}
								id="fullName"
								label="Nome completo"
								placeholder="Nome de Autor"
								value={aluno.nome}
							/>

							<NormalInput
								disabled={true}
								id="curso"
								label="Curso"
								placeholder="Curso atual"
								value={aluno.curso}
							/>

							<NormalInput
								disabled={true}
								id="email"
								label="E-mail"
								placeholder="emailexemplo@email.com"
								value={aluno.email}
							/>

							<NormalInput
								disabled={true}
								id="instituicao"
								label="Instituição Referente"
								placeholder="Instituição do autor"
								value={aluno.instituicao}
							/>
						</div>
					))}

					<div className="flex w-full items-center justify-center gap-5">
						<DefaultButton
							label="Voltar"
							backgroundColorHex="#8A8A8A"
						/>
						<DefaultButton
							label="Finalizar"
							backgroundColorHex="#4B00E0"
						/>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}
