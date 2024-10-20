'use client';

import { useState } from 'react';

import { BsHourglassSplit } from 'react-icons/bs';
import { CiCircleRemove } from 'react-icons/ci';
import { CiCircleCheck } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';

import ClipInput from '@/components/ClipInput';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';
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

	const [pendentes, setPendentes] = useState(true);
	const [accepted, setAccepted] = useState(false);
	const [declined, setDeclines] = useState(false);

	return (
		<div>
			<Navbar />

			<div className="container mb-6 flex flex-col items-center">
				<div className="w-1/2">
					<Title
						title="Cadastrar Usuários"
						subtitle="Cadastre os membros da equipe"
						colorHex="#ef0037"
					/>
				</div>

				<div className="flex items-center justify-center gap-6 rounded-2xl border-neutral-400 bg-neutral-50 p-3 font-semibold shadow-xl">
					<div className="cursor-pointer">Editores Chefe</div>
					<div className="cursor-pointer rounded-[10px] bg-[#DD4467] p-1.5 text-white">
						Avaliadores
					</div>
				</div>

				<div
					className="mt-8 flex h-96 w-3/4 flex-col items-center justify-center rounded-2xl border border-neutral-400 bg-neutral-50"
					// style={{ backgroundColor: '#E4E4E4' }}
				>
					<form className="fle flex-col">
						<div className="flex flex-col gap-4">
							<label className="mr-64 text-base" htmlFor="cad">
								Cadastrar Manualmente:
							</label>
							<button className="mb-10 rounded-xl border-2 border-solid  border-black bg-transparent p-4 text-center text-lg text-black">
								Editor Chefe
							</button>
							<ClipInput
								label="Enviar Link para Cadastro:"
								type="text"
								name="link"
								id="link"
								placeholder="https://www.LinkFalso.com/falsidadeF.jkjdskksjadhf.."
								readOnly
								customWidth="100%"
							/>

							<div className="mt-6 flex items-center justify-center gap-6">
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

				{pendentes ? (
					<table
						className="mt-12 w-3/4 text-center"
						style={{ border: '1px solid #BCBCBC', borderRadius: '10px' }}
					>
						<thead style={{ backgroundColor: '#DD4467', color: 'white' }}>
							<tr className="h-14">
								<th scope="col"></th>
								<th scope="col">Função</th>
								<th scope="col" className="">
									Nome
								</th>
								<th scope="col" className="">
									E-mail
								</th>
								<th scope="col" className="">
									Ações
								</th>
							</tr>
						</thead>
						<tbody>
							{UsersFunction.map((user, i) => (
								<tr
									key={i}
									className="h-20"
									style={{
										backgroundColor: i % 2 == 0 ? '' : '#E4E4E4',
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
											<CiCircleCheck className="text-[2.3rem] text-green-600" />
											<CiCircleRemove className="text-[2.3rem] text-red-600" />
										</div>
									</td>
									<td className="font-semibold">{user.function}</td>
									<td className="font-semibold">{user.name}</td>
									<td className="font-semibold">{user.email}</td>
									<td className="font-semibold">
										<div className="flex flex-col items-center gap-2">
											<button className="mt-2 flex w-32 items-center justify-around rounded-xl border-2 border-solid  border-black bg-transparent p-2 text-center text-sm text-black">
												<p>Ver mais</p>

												<FaEye className="text-[1.4rem]" />
											</button>
											<button className="mb-2 mt-2 w-32 rounded-xl border-2 border-solid  border-rose-500 bg-transparent p-2 text-center text-sm text-rose-500">
												Mudar Função
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					''
				)}
				{accepted ? (
					<table
						className="mt-12 w-3/4 text-center"
						style={{ border: '1px solid #BCBCBC', borderRadius: '10px' }}
					>
						<thead style={{ backgroundColor: '#DD4467', color: 'white' }}>
							<tr className="h-14">
								<th scope="col"></th>
								<th scope="col">Função</th>
								<th scope="col" className="">
									Nome
								</th>
								<th scope="col" className="">
									E-mail
								</th>
								<th scope="col" className="">
									Ações
								</th>
							</tr>
						</thead>
						<tbody>
							{UsersFunction.map((user, i) => (
								<tr
									key={i}
									className="h-20"
									style={{
										backgroundColor: i % 2 == 0 ? '' : '#E4E4E4',
									}}
								>
									<td className="">
										<div
											className="ml-4"
											style={{
												display: 'flex',
												gap: '20px',
												justifyContent: 'center',
											}}
										>
											<CiCircleRemove className="text-[2.3rem] text-red-600" />
										</div>
									</td>
									<td className="font-semibold">{user.function}</td>
									<td className="font-semibold">{user.name}</td>
									<td className="font-semibold">{user.email}</td>
									<td className="font-semibold">
										<div className="flex flex-col items-center gap-2">
											<button className="mt-2 flex w-32 items-center justify-around rounded-xl border-2 border-solid border-black bg-transparent p-2 text-center text-sm text-black">
												<p>Ver mais</p>
												<FaEye className="text-[1.4rem]" />
											</button>
											<button className="mb-2 mt-2 w-32 rounded-xl border-2 border-solid border-rose-500 bg-transparent p-2 text-center text-sm text-rose-500">
												Mudar Função
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					''
				)}

				{declined ? (
					<table
						className="mt-12 w-3/4 text-center"
						style={{ border: '1px solid #BCBCBC', borderRadius: '10px' }}
					>
						<thead style={{ backgroundColor: '#DD4467', color: 'white' }}>
							<tr className="h-14">
								<th scope="col"></th>
								<th scope="col">Função</th>
								<th scope="col" className="">
									Nome
								</th>
								<th scope="col" className="">
									E-mail
								</th>
								<th scope="col" className="">
									Ações
								</th>
							</tr>
						</thead>
						<tbody>
							{UsersFunction.map((user, i) => (
								<tr
									key={i}
									className="h-20"
									style={{
										backgroundColor: i % 2 == 0 ? '' : '#E4E4E4',
									}}
								>
									<td className="">
										<div
											className="ml-4"
											style={{
												display: 'flex',
												gap: '20px',
												justifyContent: 'center',
											}}
										>
											<CiCircleCheck className="text-[2.3rem] text-green-600" />
										</div>
									</td>
									<td className="font-semibold">{user.function}</td>
									<td className="font-semibold">{user.name}</td>
									<td className="font-semibold">{user.email}</td>
									<td className="font-semibold">
										<div className="flex flex-col items-center gap-2">
											<button className="mt-2 flex w-32 items-center justify-around rounded-xl border-2 border-solid border-black bg-transparent p-2 text-center text-sm text-black">
												<p>Ver mais</p>
												<FaEye className="text-[1.4rem]" />
											</button>
											<button className="mb-2 mt-2 w-32 rounded-xl border-2 border-solid border-rose-500 bg-transparent p-2 text-center text-sm text-rose-500">
												Mudar Função
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					''
				)}
			</div>
			<Footer />
		</div>
	);
}
