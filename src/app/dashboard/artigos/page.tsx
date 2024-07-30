'use client';

import React from 'react';
import { useState } from 'react';

import CheckboxInput from '@/components/CheckboxInput';
import DefaultButton from '@/components/DefaultButton';
import FileInput from '@/components/FileInput';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import NormalInput from '@/components/NormalInput';
import Pagination1 from '@/components/Pagitation/Pagination1';
import Select from '@/components/Select';
import Table from '@/components/Table';
import TextAreaInput from '@/components/TextAreaInput';
import Title from '@/components/Title';

export default function ArtigosPage() {
	const [precisaDeAvaliacao, setPrecisaDeAvaliacao] = useState(true);
	const [precisaDeApresentacao, setPrecisaDeApresentacao] = useState(true);
	const [normas, setNormas] = useState('');
	const [limite, setLimite] = useState('');
	const [dataInicio, setDataInicio] = useState('');
	const [dataFinal, setDataFinal] = useState('');
	const [data1, setData1] = useState('');
	const [data2, setData2] = useState('');

	const handleCheckboxChangeAvaliacao = (
		isChecked: boolean | ((prevState: boolean) => boolean)
	) => {
		setPrecisaDeAvaliacao(isChecked);
	};

	const handleCheckboxChangeApresentacao = (
		isChecked: boolean | ((prevState: boolean) => boolean)
	) => {
		setPrecisaDeApresentacao(isChecked);
	};

	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const totalPages = 3;

	const checkboxTipo = ['Análise Ciêntifica', 'option2', 'option3'];
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

	return (
		<div>
			<Navbar />
			<div className="container relative flex-col items-center justify-center">
				<Title
					title="Artigos"
					subtitle="Artigos que serão submetidos pelos participantes"
					colorHex="#ef0037"
				/>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-20">
					<div>
						{precisaDeAvaliacao && (
							<>
								<Select
									id="select"
									label="Tipo de Artigo"
									options={tipo.map((tipo, i) => ({ label: tipo, value: i }))}
									preSelect={0}
									customWidth="100%"
									disabled={false}
								/>

								<TextAreaInput
									label="Normas de publicação"
									name="normas"
									id="normas"
									placeholder="Normas de publicação"
									rows={4}
									value={normas}
									onChange={(e) => setNormas(e.target.value)}
									customWidth="100%"
								/>

								<NormalInput
									label="Limite de artigos por avaliador"
									type="text"
									name="limite"
									id="limite"
									placeholder="Limite de artigos por avaliador"
									value={limite}
									onChange={(e) => setLimite(e.target.value)}
									customWidth="100%"
								/>

								<div className="flex gap-10">
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
								</div>
							</>
						)}
					</div>

					<div>
						<div className="flex gap-10">
							<NormalInput
								label="Data 1"
								type="Date"
								name="date1"
								id="date1"
								value={data1}
								onChange={(e) => setData1(e.target.value)}
								customWidth="100%"
							/>
							<NormalInput
								label="Data 2"
								type="Date"
								name="date2"
								id="date2"
								value={data2}
								onChange={(e) => setData2(e.target.value)}
								customWidth="100%"
							/>
						</div>
						<div className="mb-5 flex flex-col gap-2">
							<div className="flex flex-col">
								<FileInput
									id="file1"
									label="Upload artigo 1"
									disabled={false}
									customWidth="100%"
								/>
								<FileInput
									id="file2"
									label="Upload artigo 2"
									disabled={false}
									customWidth="100%"
								/>
							</div>
						</div>

						<div className="mb-4 flex w-full flex-col gap-10">
							<CheckboxInput
								id="checkbox1"
								label="Precisa de Avalicação"
								isChecked={!precisaDeAvaliacao}
								onChange={handleCheckboxChangeAvaliacao}
								disabled={false}
							/>
							<CheckboxInput
								id="checkbox2"
								label="Precisa de Apresentação"
								onChange={handleCheckboxChangeApresentacao}
								isChecked={precisaDeApresentacao}
								disabled={false}
							/>
						</div>
					</div>
				</div>

				<div className="mt-8">
					<DefaultButton
						label="Cadastrar Artigo"
						backgroundColorHex="#0391C9"
						customWidth="100%"
					/>
				</div>

				<div className="mt-4 flex gap-5">
					<DefaultButton
						label="Voltar"
						backgroundColorHex="#8A8A8A"
						customWidth="150px"
					/>
					<DefaultButton
						label="Avançar"
						backgroundColorHex="#4B00E0"
						customWidth="150px"
					/>
				</div>

				<div className="mt-16 flex w-full items-center justify-center">
					<Table />
				</div>

				<Pagination1
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</div>
			<Footer />
		</div>
	);
}
