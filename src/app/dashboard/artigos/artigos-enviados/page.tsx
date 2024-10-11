"use client";

import { useState } from "react";
import React from "react";

import { CiFilter } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

import ArtigosCards from "@/components/ArtigosCards/Cards";
import ArtigosCards2 from "@/components/ArtigosCards/Cards2";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavbarAuthenticated";
import Pagination1 from "@/components/Pagitation/Pagination1";
import Title from "@/components/Title";

import Tabfiles from "../visualizar-artigo/artigos-concluidos/page";

export default function EditarArtigosPage() {
	const [currentOption, setCurrentOption] = useState<string>("dentro-do-prazo");

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};

	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const totalPages = 3;

	return (
		<div className="flex h-full flex-col justify-center justify-items-center">
			<Navbar />

			<div className="mt-28 flex flex-col items-center justify-center">
				<Tabfiles
					currentOption={currentOption}
					handleOptionClick={handleOptionClick}
				/>

				<div className="mt-24">
					<Title
						title="Artigos"
						subtitle="Todos os artigos enviados e relacionados à você"
						colorHex="#ef0037"
					/>
				</div>
				<div className="ml-[780px] flex flex-col gap-4">
					<div className="flex flex-row gap-2">
						<button className="leading-3xl font-medium text-[#000000]">
							Buscar
						</button>
						<IoSearchOutline size={30} />
					</div>
					<div className="flex flex-row gap-4">
						<button className="leading-3xl font-medium text-[#000000]">
							Filtrar
						</button>
						<CiFilter size={30} />
					</div>
				</div>

				{currentOption === "dentro-do-prazo" ? (
					<>
						<h1 className="-ml-[370px] mb-4 justify-self-center text-center text-[22px] font-bold text-red-500">
							Eventos:{" "}
							<span className="text-black">
								Tech Talks: Descobrindo as Fronteiras da Tecnologia
							</span>
						</h1>
						<ArtigosCards />
						<h1 className="-ml-[370px] mb-4 mt-16 justify-self-center text-center text-[22px] font-bold text-red-500">
							Eventos:{" "}
							<span className="text-black">
								Tech Talks: Descobrindo as Fronteiras da Tecnologia
							</span>
						</h1>
						<ArtigosCards2 />
					</>
				) : (
					<>
						<h1 className="-ml-[370px] mb-4 justify-self-center text-center text-[22px] font-bold text-red-500">
							Eventos:{" "}
							<span className="text-black">
								Tech Talks: Descobrindo as Fronteiras da Tecnologia
							</span>
						</h1>
						<ArtigosCards2 />
						<h1 className="-ml-[370px] mb-4 mt-16 justify-self-center text-center text-[22px] font-bold text-red-500">
							Eventos:{" "}
							<span className="text-black">
								Tech Talks: Descobrindo as Fronteiras da Tecnologia
							</span>
						</h1>
						<ArtigosCards />
					</>
				)}
			</div>

			<Pagination1
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
			<Footer />
		</div>
	);
}
