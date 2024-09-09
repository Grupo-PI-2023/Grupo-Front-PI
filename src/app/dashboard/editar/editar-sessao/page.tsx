'use client';

import { useState } from 'react';

import { toNumber } from 'lodash';
import { CiClock2, CiFilter, CiSearch } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import OutlineButton from '@/components/OutlineButton';
import Select from '@/components/Select';
import Title from '@/components/Title';
import { Sessao } from '@/lib/repository/sessao/index.repository';
import { sessaoMocks } from '@/mocks/SessaoEditar';

export default function EditarSessaoPage() {
	const [sessoes, setSessoes] = useState<Sessao[]>([]);

	const handleAddOnTable = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSessoes((prev) => [
			...prev,
			{
				horario: toNumber('12'),
				tempoApresentacao: toNumber('14'),
				tempoSessao: toNumber('32'),
				comissaoId: 'laurins',
			},
			{
				horario: toNumber('10'),
				tempoApresentacao: toNumber('14'),
				tempoSessao: toNumber('32'),
				comissaoId: 'marcio',
			},
			{
				horario: toNumber('14'),
				tempoApresentacao: toNumber('14'),
				tempoSessao: toNumber('32'),
				comissaoId: 'julia martins',
			},
			{
				horario: toNumber('09'),
				tempoApresentacao: toNumber('14'),
				tempoSessao: toNumber('32'),
				comissaoId: 'aaa',
			},
		]);
	};
	const handleSubmmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const checkboxChair = ['João', 'Cleber', 'Matilda'];
	const [chair, setChair] = useState(checkboxChair);

	return (
		<div>
			<NavbarAuthenticated />

			<div className="container flex-col items-center">
				<div className="w-1/2">
					<Title
						title="Sessão 1"
						subtitle="Detalhes da sessão"
						colorHex="#ef0037"
					/>
				</div>

				<table className="w-1/2 text-center  ">
					<thead>
						<tr className="h-14 text-left">
							<th scope="col" className="">
								Sala:
							</th>
							<th scope="col" className="">
								Andar:
							</th>
							<th scope="col" className="">
								Limite de Pessoas:
							</th>
							<th scope="col" className="">
								Horário:
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="h-14">
							<td scope="col" className="">
								<p className="mr-2 h-full w-max rounded-md bg-[#D8D8D8] px-5">
									03
								</p>
							</td>
							<td scope="col" className="">
								<p className="mr-2 h-full w-max rounded-md bg-[#D8D8D8] px-5">
									2
								</p>
							</td>
							<td scope="col" className="">
								<p className="mr-2 h-full w-max rounded-md bg-[#D8D8D8] px-5">
									13
								</p>
							</td>
							<td scope="col" className="">
								<p className="mr-2 flex h-full w-max items-center gap-4 rounded-md bg-[#D8D8D8] px-5">
									13:30 até 14:30
									{<CiClock2 />}
								</p>
							</td>
						</tr>
					</tbody>
				</table>

				<div className="mt-10 flex w-1/2 items-center justify-center text-center">
					<Select
						options={chair.map((chair, i) => ({
							label: chair,
							value: i,
						}))}
						preSelect={0}
						disabled={false}
						label={'Chair:'}
						id={'chair'}
					/>
				</div>

				<div className="mt-8 flex items-center justify-center gap-6">
					<OutlineButton
						label="Trocar Sessão do Chair"
						outlineColorHex="#000"
						textColorHex="#000"
						customWidth="100%"
					/>
				</div>

				<div className="mt-14 flex w-2/3 items-center justify-between">
					<h1 className="text-start text-2xl font-bold text-black">
						Gerenciamento dos participantes
					</h1>
					<div className="flex flex-col gap-3">
						<div className="flex items-center justify-between gap-4">
							Filtrar
							<CiFilter />
						</div>
						<div className="flex items-center justify-center gap-4">
							Procurar
							<CiSearch />
						</div>
					</div>
				</div>

				<table className="mt-12 w-2/4 text-center">
					<thead style={{ backgroundColor: '#E4E4E4' }}>
						<tr className="h-14">
							<th scope="col" className="">
								Função
							</th>
							<th scope="col" className="">
								Nome
							</th>
							<th scope="col" className="">
								Email
							</th>
							<th scope="col" className="">
								Ações
							</th>
						</tr>
					</thead>
					<tbody>
						{sessaoMocks.map((item, index) => {
							return (
								<tr
									key={index}
									className="h-14"
									style={{
										backgroundColor: !(index % 2 === 0)
											? '#E4E4E4'
											: '#fff',
									}}
								>
									<td>{item.funcao}</td>
									<td>{item.nome}</td>
									<td>{item.email}</td>
									<td
										className="my-2 flex h-full w-max gap-5 
								rounded-md px-5
								"
									>
										<OutlineButton
											label="Ver mais"
											outlineColorHex="#8A8A8A"
											icon={<FaEye />}
											customWidth="100%"
										/>
										<OutlineButton
											label="Mudar Função"
											outlineColorHex="red"
											customWidth="100%"
											textColorHex="red"
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<Footer />
		</div>
	);
}
