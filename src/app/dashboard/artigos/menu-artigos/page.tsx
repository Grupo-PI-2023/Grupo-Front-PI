import React from 'react';

import { FaRegStar, FaStoreAlt } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { LiaArchiveSolid } from 'react-icons/lia';
import { MdOutlineDateRange } from 'react-icons/md';
import { PiBrain } from 'react-icons/pi';
import { RiCompass2Line } from 'react-icons/ri';
import { TfiMenuAlt } from 'react-icons/tfi';

import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';

export default async function MenuArtigos() {
	return (
		<div>
			<Navbar />
			<div className="absolute left-1/2 top-28 z-50 flex w-3/4 -translate-x-1/2 transform justify-center bg-white p-4 shadow-md">
				<nav className="flex w-full flex-row items-center justify-between">
					<a
						href="#"
						className="text-1xl text-font-dosis leading-2xl flex cursor-pointer items-center gap-2 font-medium text-[#000000]"
					>
						<span>
							<TfiMenuAlt />
						</span>
						Menu
					</a>
					<a
						href="#"
						className="text-1xl text-font-dosis leading-2xl flex cursor-pointer items-center gap-2 font-medium text-[#00B7FF]"
					>
						<span>
							<FaRegStar />
						</span>
						Criar Evento
					</a>
					<a
						href="#"
						className="text-1xl text-font-dosis leading-2xl flex cursor-pointer items-center gap-2 font-medium text-[#EF0037]"
					>
						<span>
							<MdOutlineDateRange />
						</span>
						Data e Local
					</a>
					<a
						href="#"
						className="text-1xl text-font-dosis leading-2xl flex cursor-pointer items-center gap-2 font-medium text-[#000000]"
					>
						<span>
							<LiaArchiveSolid />
						</span>
						Arquivos
					</a>
					<a
						href="#"
						className="text-1xl text-font-dosis leading-2xl flex cursor-pointer items-center gap-2 font-medium text-[#000000]"
					>
						<span>
							<PiBrain />
						</span>
						Atividade
					</a>
					<a
						href="#"
						className="text-1xl text-font-dosis leading-2xl flex cursor-pointer items-center gap-2 font-medium text-[#000000]"
					>
						<span>
							<HiUsers />
						</span>
						Usuários
					</a>
					<a
						href="#"
						className="text-1xl text-font-dosis leading-2xl flex cursor-pointer items-center gap-2 font-medium text-[#000000]"
					>
						<span>
							<FaStoreAlt />
						</span>
						Salas
					</a>
					<a
						href="#"
						className="text-1xl text-font-dosis leading-2xl flex cursor-pointer items-center gap-2 font-medium text-[#000000]"
					>
						<span>
							<RiCompass2Line />
						</span>
						Sessões
					</a>
				</nav>
			</div>
			<Footer />
		</div>
	);
}
