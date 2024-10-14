'use client';

import { useState } from 'react';

import { BsHourglassSplit } from 'react-icons/bs';
import { CiCircleRemove } from 'react-icons/ci';
import { CiCircleCheck } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';

import ClipInput from '@/components/ClipInput';
import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';
import useClipboard from '@/hooks/useClipboard';
import { UsersFunction } from '@/mocks/UserFunctions';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function CadastrarUsuario({
	handleNextClick,
}: CriarEventoProps) {
	const handleNextButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleNextClick();
	};

	const handlePendente = () => {
		setPendentes(true);
		setAccepted(false);
		setDeclines(false);
	};

	const handleAceitos = () => {
		setPendentes(false);
		setAccepted(true);
		setDeclines(false);
	};

	const handleRecusados = () => {
		setPendentes(false);
		setAccepted(false);
		setDeclines(true);
	};

	const handleOrganizador = () => {
		setOrganizador(true);
		setAvaliador(false);
	};

	const handleAvaliador = () => {
		setOrganizador(false);
		setAvaliador(true);
	};

	const handleAccept = (index: number) => {
		const updatedUsers = [...users];
		updatedUsers[index].situation = 'accept';
		setUsers(updatedUsers);
		console.log(updatedUsers[index]);
	};

	const handleDecline = (index: number) => {
		const updatedUsers = [...users];
		updatedUsers[index].situation = 'declined';
		setUsers(updatedUsers);
	};

	const [pendentes, setPendentes] = useState(true);
	const [accepted, setAccepted] = useState(false);
	const [declined, setDeclines] = useState(false);

	const [organizador, setOrganizador] = useState(true);
	const [avaliador, setAvaliador] = useState(false);
	const [users, setUsers] = useState(UsersFunction);

	return (
		<div className="container mb-6 mt-52 flex flex-col items-center">
			<div className="w-1/2">
				<Title
					title="Cadastrar Usuários"
					subtitle="Gerencie os membros da equipe"
					colorHex="#ef0037"
				/>
			</div>

			<div
				className="mt-8 flex h-96 w-3/4 flex-col items-center justify-center rounded-lg border border-neutral-400 bg-neutral-50"
				// style={{ backgroundColor: '#E4E4E4' }}
			>
				<div
					className="mb-4 flex w-[29%] items-center justify-around rounded-2xl border border border-transparent bg-[#F4F4F4] p-2"
					style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
				>
					{organizador ? (
						<>
							<p className="cursor-default p-1.5">Organizador</p>
							<p
								className="cursor-pointer rounded-xl bg-[#DD4467] p-1.5 text-white"
								onClick={handleAvaliador}
							>
								Avaliadores
							</p>
						</>
					) : (
						<>
							<p
								className="cursor-pointer rounded-xl bg-[#DD4467] p-1.5 text-white"
								onClick={handleOrganizador}
							>
								Organizador
							</p>
							<p className="cursor-default p-1.5">Avaliadores</p>
						</>
					)}
				</div>
				<form className="fle flex-col">
					<div className="flex flex-col gap-3">
						<label className="mr-64 text-base" htmlFor="cad">
							Cadastrar Manualmente:
						</label>
						{organizador ? (
							<button className="mb-6 rounded-xl border-2 border-solid  border-black bg-transparent p-4 text-center text-lg text-black">
								Organizador{' '}
							</button>
						) : (
							<button className="mb-6 rounded-xl border-2 border-solid  border-black bg-transparent p-4 text-center text-lg text-black">
								Avaliadores{' '}
							</button>
						)}
						<ClipInput
							label="Enviar Link para Cadastro:"
							type="text"
							name="link"
							id="link"
							placeholder="https://link.com"
							readOnly
							customWidth="100%"
						/>
						{/* <label className="mr-64 mt-4 text-base" htmlFor="link">
							Enviar Link para Cadastro:
						</label>

						<div className="w-full cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2">
							<input
								className="w-full cursor-pointer rounded-md border-0 bg-white text-sm outline-none"
								type="text"
								name="link"
								id="link"
								placeholder="https://link.com"
								readOnly
							/>
						</div>
						<button
							className="absolute ml-96 mt-44 w-28 rounded-xl bg-[#B7B7B7] py-2 text-center text-base"
							onClick={() => copyToClipboard(generatedLink)}
							type="button"
						>
							Copiar
						</button> */}

						<div className="mt-3 flex items-center justify-center gap-6">
							<button
								className="w-44
                    rounded-xl border-none p-2 text-center text-base font-medium text-white"
								style={{ backgroundColor: '#8A8A8A' }}
								type="submit"
							>
								Voltar
							</button>
							<button
								className="w-44
                    rounded-xl border-none p-2 text-center text-base font-medium text-white"
								style={{ backgroundColor: '#4B00E0' }}
								type="submit"
								onClick={handleNextButtonClick}
							>
								Avançar
							</button>
						</div>
					</div>
				</form>
			</div>

			<div className="mt-14 flex w-3/4 flex-col">
				<h1 className="text-start text-2xl font-bold text-black ">
					Gerenciamento dos usuários
				</h1>
			</div>

			<div className="mt-4 flex w-3/4 justify-between">
				<div className="flex items-center justify-center gap-3 rounded-lg border-none p-3 shadow-xl">
					<div>
						{pendentes ? (
							<button className="flex flex-row items-center ">
								<BsHourglassSplit className="text-[2rem]" />
								<p>Pendentes</p>
							</button>
						) : (
							<button
								onClick={handlePendente}
								className="flex items-center gap-2 rounded-xl border-0 border-none p-2 text-white"
								style={{ backgroundColor: '#DD4467' }}
							>
								<BsHourglassSplit className="text-[2rem] text-white" />

								<p className="">Pendentes</p>
							</button>
						)}
					</div>
					<div>
						{accepted ? (
							<button className="flex flex-row items-center gap-2">
								<CiCircleCheck className="text-[1.8rem]" />
								<p>Aceitos</p>
							</button>
						) : (
							<button
								onClick={handleAceitos}
								className="flex items-center gap-2 rounded-xl border-0 border-none p-2 text-white"
								style={{ backgroundColor: '#DD4467' }}
							>
								<CiCircleCheck className="text-[1.8rem] text-white" />
								<p className="">Aceitos</p>
							</button>
						)}
					</div>
					<div>
						{declined ? (
							<button className="flex flex-row items-center gap-2">
								<CiCircleRemove className="text-[2rem]" />
								<p>Recusados</p>
							</button>
						) : (
							<button
								onClick={handleRecusados}
								className="flex items-center gap-2 rounded-xl border-0 border-none p-2 text-white"
								style={{ backgroundColor: '#DD4467' }}
							>
								<CiCircleRemove className="text-[2rem] text-white" />
								<p className="">Recusados</p>
							</button>
						)}
					</div>
				</div>
				<div className="flex flex-col gap-6">
					<SearchFilter />
				</div>
			</div>
			<div className="mt-12 w-3/4 overflow-hidden rounded-md border border-[#BCBCBC]">
				<table className="w-full text-center">
					<thead className="rounded-t-md bg-[#DD4467] text-white">
						<tr className="h-14">
							<th scope="col" className=""></th>
							<th scope="col">Nome</th>
							<th scope="col" className="">
								Email
							</th>
							<th scope="col" className="">
								Subárea
							</th>
							<th scope="col" className="">
								Instituição
							</th>
						</tr>
					</thead>
					<tbody className="rounded-b-md">
						{users.map((user, i) => {
							if (user.situation === 'pending' && pendentes) {
								return (
									<tr
										key={i}
										className="h-20"
										style={{
											backgroundColor: i % 2 === 0 ? '' : '#E4E4E4',
										}}
									>
										<td>
											<div
												style={{
													display: 'flex',
													gap: '20px',
													justifyContent: 'center',
												}}
											>
												<CiCircleCheck
													className="cursor-pointer text-[2rem] text-green-600"
													onClick={() => handleAccept(i)}
												/>
												<CiCircleRemove
													className="cursor-pointer text-[2rem] text-red-600"
													onClick={() => handleDecline(i)}
												/>
											</div>
										</td>
										<td>{user.name}</td>
										<td>{user.email}</td>
										<td>{user.area}</td>
										<td>{user.instituition}</td>
									</tr>
								);
							} else if (user.situation === 'accept' && accepted) {
								return (
									<tr
										key={i}
										className="h-20"
										style={{
											backgroundColor: i % 2 === 0 ? '' : '#E4E4E4',
										}}
									>
										<td>
											<div
												style={{
													display: 'flex',
													gap: '20px',
													justifyContent: 'center',
												}}
											>
												<CiCircleRemove
													className="cursor-pointer text-[2rem] text-red-600"
													onClick={() => handleDecline(i)}
												/>
											</div>
										</td>
										<td>{user.name}</td>
										<td>{user.email}</td>
										<td>{user.area}</td>
										<td>{user.instituition}</td>
									</tr>
								);
							} else if (user.situation === 'declined' && declined) {
								return (
									<tr
										key={i}
										className="h-20"
										style={{
											backgroundColor: i % 2 === 0 ? '' : '#E4E4E4',
										}}
									>
										<td>
											<div
												style={{
													display: 'flex',
													gap: '20px',
													justifyContent: 'center',
												}}
											>
												<CiCircleCheck
													className="cursor-pointer text-[2rem] text-green-600"
													onClick={() => handleAccept(i)}
												/>
											</div>
										</td>
										<td>{user.name}</td>
										<td>{user.email}</td>
										<td>{user.area}</td>
										<td>{user.instituition}</td>
									</tr>
								);
							}
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
