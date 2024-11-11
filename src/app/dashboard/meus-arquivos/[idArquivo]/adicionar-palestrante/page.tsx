'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { FaRegUser } from 'react-icons/fa';

import CheckInput from '@/components/CheckInput';
import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import NormalInput from '@/components/NormalInput';
import Select from '@/components/Select';
import Title from '@/components/Title';
import { cardsData2 } from '@/mocks/ArtigosCards';

export default function AdicionarPalestrantePage({
	params,
}: {
	params: {
		idArquivo: string;
	};
}) {
	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
<<<<<<<< HEAD:src/app/dashboard/meus-arquivos/[idArquivo]/adicionar-palestrante/page.tsx
<<<<<<<< Updated upstream:src/app/dashboard/adicionar-palestrante/page.tsx
	const [palestrante, setPalestrante] = useState(false);
========
========
>>>>>>>> merge-of-prs:src/app/areal-dashboard/meus-arquivos/[idArquivo]/adicionar-palestrante/page.tsx
	const router = useRouter();

	const handleAddAuthor = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(
			'idArquivo: ',
			params.idArquivo,
			'idPalestrantes: ',
			selectedSpeakers
		);
<<<<<<<< HEAD:src/app/dashboard/meus-arquivos/[idArquivo]/adicionar-palestrante/page.tsx
		router.push('/dashboard/meus-arquivos');
========
		router.push('/areal-dashboard/meus-arquivos');
>>>>>>>> merge-of-prs:src/app/areal-dashboard/meus-arquivos/[idArquivo]/adicionar-palestrante/page.tsx
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
<<<<<<<< HEAD:src/app/dashboard/meus-arquivos/[idArquivo]/adicionar-palestrante/page.tsx
>>>>>>>> Stashed changes:src/app/dashboard/meus-arquivos/[idArquivo]/adicionar-palestrante/page.tsx
========
>>>>>>>> merge-of-prs:src/app/areal-dashboard/meus-arquivos/[idArquivo]/adicionar-palestrante/page.tsx

	return (
		<div>
			<Navbar />
			<div className="container mb-6 mt-52 flex justify-center ">
				<form className="w-[60vw]" onSubmit={handleAddAuthor}>
					<Title
						title="Adicionar Palestrante"
						colorHex="#EF0037"
						subtitle="Selecione o apresentador do artigo para apresenta-lo durante o evento"
					/>

					{cardsData2[0].authors?.map((aluno, key) => (
						<div
							className="card  my-10 flex flex-wrap justify-center gap-5 rounded-md"
							key={key}
						>
							<div className="mb-5 flex w-[45%] items-center gap-5 text-[1.8rem]">
								<FaRegUser />
								<p>Autor</p>
								<CheckInput
									label="Palestrante"
									key={aluno.id}
									name={aluno.name}
									value={aluno.name}
									checked={selectedSpeakers.includes(aluno.id)}
									onChange={() => handleCheckboxChangeSpeaker(aluno.id)}
								/>
							</div>

							<Select
								options={checkboxPeriodo.map((tur, i) => ({
									label: tur,
									value: i,
								}))}
								preSelect={0}
								disabled={true}
								label="Turno"
								id="turno"
							/>
							<NormalInput
								disabled={true}
								id="fullName"
								label="Nome completo"
								placeholder="Nome de Autor"
								value={aluno.name}
							/>

							<NormalInput
								disabled={true}
								id="curso"
								label="Curso"
								placeholder="Curso atual"
								value={aluno.curse}
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
								value={aluno.institution}
							/>
						</div>
					))}

					<div className="flex w-full items-center justify-center gap-5">
						<DefaultButton label="Voltar" backgroundColorHex="#8A8A8A" />
						<DefaultButton
							label="Finalizar"
							backgroundColorHex="#4B00E0"
							type="submit"
						/>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}