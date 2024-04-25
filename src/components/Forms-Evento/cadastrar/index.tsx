'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { IoIosClose } from "react-icons/io";

import { Area } from '@/lib/repository/area/index.repository';
import { Comissao } from '@/lib/repository/comission/index.repository';
import { Event } from '@/lib/repository/event/index.repository';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import InputImg from '@/components/InputImg';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function CriarEvento({ handleNextClick }: CriarEventoProps) {
	const [image, setImage] = useState<any | null>(null);
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [descricao, setDescricao] = useState('');
	const [tipo, setTipo] = useState('');
	const [assuntoPrincipal, setAssuntoPrincipal] = useState('');
	// const [adm, setAdm] = useState('ec2b4562-3234-4df9-ba5b-4b9a8226e39b');

	// no proximo form terá:
	// const [local, setLocal] = useState('');
	// const [dataInicio, setDataInicio] = useState();
	// const [dataFinal, setDataFinal] = useState('');

	const handleNextButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleNextClick();
	};
	const [admins, setAdmins] = useState<Comissao[]>([
		{
			id: 'ec2b4562-3234-4df9-ba5b-4b9a8226e39b',
			name: 'Julia Martins',
			email: 'juliamartins@gmail.com',
			cpf: '',
			instituicao: '',
			lattes: '',
			senha: '',
			turno: '',
			adm: false,
			avaliador: false,
			chair: false,
			organizador: false,
		},
	]);

	const checkboxEvento = ['Público', 'Privado'];
	const [checkboxes, setCheckboxes] = useState(checkboxEvento.map(() => false));
	const checkboxGerar = ['Anais', 'Certificados'];
	const [checkboxesGerar, setCheckboxesGerar] = useState(
		checkboxGerar.map(() => false)
	);

	const [tags, setTags] = useState([]);

	const handleChange = (tags: any) => {
		setTags(tags);
	};

	const handleRenderTag = (props: any) => {
		const { tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other } = props;

		return (
			<span key={key} {...other}>
				{getTagDisplayValue(tag)}
				{!disabled && (
					<a className='ml-2 text-xs cursor-pointer' onClick={() => onRemove(key)}>x</a>
				)}
			</span>
		);
	};

	const handleCheckboxChangeEvento = (index: any) => {
		setCheckboxes((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};
	const handleCheckboxChangeGerar = (index: any) => {
		setCheckboxesGerar((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
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

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		localStorage.clear();
		const event: Event = {
			// comissaoId: adm,
			comissaoId: 'd885dda4-86e7-457d-9f8b-8e7a975e42e9',
			anais: checkboxesGerar[0],
			certificados: checkboxesGerar[1],
			assuntoPrincipal: assuntoPrincipal,
			periodo: 'Integral', // mockado
			descricao: descricao,
			emailEvento: email,
			nomeEvento: nome,
			privado: checkboxes[1],
			tipo,
			logo: file ? file.name : null,
		};
		localStorage.setItem('areas', JSON.stringify(tags));
		localStorage.setItem('event', JSON.stringify(event));
		handleNextClick();
	};

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-[60vw]">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Crie seu próprio evento!
				</h1>
				<form className="mt-8 w-full" onSubmit={handleSubmit}>
					<div className="flex justify-center gap-5">
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Nome do Evento
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="eventName"
										id="feventName"
										placeholder="Nome do Evento"
										value={nome}
										onChange={(e) => setNome(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="descricao">
									Descrição do Evento
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<textarea
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="descricao"
										id="descricao"
										placeholder="Descrição do Evento"
										rows={4}
										value={descricao}
										onChange={(e) => setDescricao(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="select">
									Selecione
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<select
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="select"
										id="select"
										value={tipo}
										onChange={(e) => setTipo(e.target.value)}
										required
									>
										<option value="Presencial">Presencial</option>
										<option value="Hibrido">Híbrido</option>
										<option value="Remoto">Remoto</option>
									</select>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="assunto">
									Assunto Principal
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="assunto"
										id="assunto"
										placeholder="Assunto Principal do Evento"
										value={assuntoPrincipal}
										onChange={(e) => setAssuntoPrincipal(e.target.value)}
										required
									/>
								</div>
							</div>
						</div>
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="emailEvent"
								>
									Email do Evento
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="emailEvent"
										id="emailEvent"
										placeholder="Email do Evento"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
							</div>

							<div className="mb-0.5">
								<label className="mb-2 text-sm font-medium" htmlFor="evento">
									Evento
								</label>
								<div className="flex items-center gap-3 py-2.5">
									{checkboxEvento.map((name, index) => (
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
							<div className="mb-5">
								<label className="mb-2 text-sm font-medium" htmlFor="gerar">
									Gerar
								</label>
								<div className="flex items-center gap-3 py-2.5">
									{checkboxGerar.map((name, index) => (
										<div key={index}>
											<div className="flex items-center">
												<input
													className="hidden"
													type="checkbox"
													name={`checkbox1-${index}`}
													id={`checkbox1-${index}`}
													checked={checkboxesGerar[index]}
													onChange={() => handleCheckboxChangeGerar(index)}
												/>
												<label
													className="flex cursor-pointer items-center"
													style={
														checkboxesGerar[index]
															? {
																color: '#4B00E0',
															}
															: {
																color: '#000',
															}
													}
													htmlFor={`checkbox1-${index}`}
												>
													<div
														className="mr-2 flex h-3.5 w-3.5 items-center justify-center"
														style={
															checkboxesGerar[index]
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
														{checkboxesGerar[index] && (
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

							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="areas">
									Áreas de Conhecimento
								</label>
								<div>
									<div className="mb-3 flex items-center">
										<div className="w-full rounded-md border border-gray-300 bg-white">
											<TagsInput className='w-full rounded-md border-0 bg-white text-sm outline-none px-4 py-1' addOnBlur={true}
												addOnPaste={true} value={tags} onChange={handleChange}
												inputProps={{
													className: "w-full outline-none py-2",
													placeholder: 'Adicionar áreas',
												}}
												tagProps={{
													className: "text-white rounded px-2 text-xs mr-2 bg-purple-500 text-center",
												}}
												removeKeys={[8, 46]}
												renderTag={handleRenderTag} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="mb-6 flex flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="file">
								Anexar Logo
							</label>

							<div className="flex  w-full items-center justify-center rounded-md border-0 bg-gray-200 px-4 py-5">
								<label htmlFor="fileInput" className="cursor-pointer">
									<FiUpload className="mx-2 h-5 w-5 text-black" />{' '}
								</label>
								{/* <InputImg
                                setImage={setImage}
                                className='container-img-profile-preview'
                                imgPreviewClassName='
								radius-[50%]
								h-[5rem]
								w-[5rem]
								cursor-pointer 
								object-cover
								'
                                imgPreview={image?.preview}
                            	/> */}

								<input
									type="file"
									id="fileInput"
									name="file"
									style={{ display: 'none' }}
									onChange={(e) => handleFileChange(e)}
									required
								/>
								<span className="text-sm">{file ? file.name : ''}</span>
								{file && (
									<button
										className="ml-2 mr-1 cursor-pointer rounded-full bg-red-500 px-1"
										onClick={handleFileDelete}
									>
										<FaTimes className="w-2 text-white" />
									</button>
								)}
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center gap-5">
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#EF0037' }}
							type="submit"
						// onClick={handleNextButtonClick}
						>
							Avançar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
