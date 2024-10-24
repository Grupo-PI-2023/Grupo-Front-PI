import { useState } from "react";

import { FaRegEdit } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

import { cardsData2 } from "@/mocks/ArtigosCards";

export default function Card() {
	const [cards, setCards] = useState([...cardsData2]);

	return (
		<>
			{/* Renderize os cards com base nos dados do array */}
			{cards.map((card, index) => (
				<div
					key={card.id}
					className={`mb-6 mt-6 flex w-[1000px] items-center gap-10 rounded-lg p-6 shadow-lg ${
						index === cards.length - 1
							? "ring-2 ring-purple-700"
							: "ring-2 ring-[#FA023E]"
					}`}
				>
					<div className="w-full">
						<h3
							className={`${
								index === cards.length - 1 ? "text-[#4B00E0]" : "text-[#FA023E]"
							} mb-5 text-[23px] font-medium`}
						>
							{card.title}
						</h3>
						<p className="mb-4 font-bold">
							Tipo do Arquivo: <span className="font-normal">{card.type}</span>
						</p>
						<p className="mb-4 font-bold">
							Status: <span className="font-normal">{card.status}</span>
						</p>
						<p className="font-bold">
							Autores: <span className="font-normal">{card.Autores}</span>
						</p>

						{card.schedule && (
							<>
								<div className="mt-4 flex gap-10">
									<p className="font-bold">
										Data de Envio:{" "}
										<span className="font-normal">
											{card.schedule.DatadeEnvio}
										</span>
									</p>
									{card.schedule.DatadeEnvio && (
										<p className="font-bold">
											Apresentação:{" "}
											<span className="font-normal">
												{card.schedule.DatadeEnvio}
											</span>
										</p>
									)}
									{card.sala && (
										<p className="font-bold">
											Sala: <span className="font-normal">{card.sala}</span>
										</p>
									)}
								</div>
							</>
						)}
					</div>

					<div>
						<div className="flex w-full flex-col items-end gap-4">
							{index === cards.length - 1 ? (
								<>
									<div className="mb-2 rounded-lg bg-[#00B7FF]">
										<button className="text-nowrap px-2 py-1 text-[14px] font-medium text-[#000000]">
											Adicionar Apresentador
										</button>
									</div>

									<div className="flex w-[120px] items-center justify-center gap-1 rounded-full text-[#000000] ring-2 ring-black">
										<button className="p-1 text-[14px] font-medium">
											Ver artigo
										</button>
										<IoEyeOutline />
									</div>
								</>
							) : (
								<div className="flex w-[120px] items-center justify-center gap-1 rounded-full text-[#000000] ring-2 ring-black">
									<button className="p-1 text-[14px] font-medium">
										Ver artigo
									</button>
									<IoEyeOutline />
								</div>
							)}

							<div className="flex w-[120px] items-center justify-center gap-1 rounded-full px-4 text-[#4B00E0] ring-2 ring-[#4B00E0]">
								<button className="p-1 text-[14px] font-medium">Baixar</button>
								<IoMdDownload />
							</div>

							<div className="flex w-[120px] items-center justify-center gap-1 rounded-full px-4 text-[#126A10] ring-2 ring-[#126A10]">
								<button className="p-1 text-[14px] font-medium">Editar</button>
								<FaRegEdit />
							</div>

							<div className="flex w-[120px] items-center justify-center gap-1 rounded-full px-4 text-[#BF0000] ring-2 ring-[#BF0000]">
								<button className="p-1 text-[14px] font-medium">Excluir</button>
								<RiDeleteBin6Line />
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
