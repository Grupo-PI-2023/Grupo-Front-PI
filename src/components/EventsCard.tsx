import { useState } from "react";

import Image from "next/image";

import { FaRegEye } from "react-icons/fa";

import { cardsData } from "@/mocks/EventCards";

export default function EventsCard() {
	return (
		<>
			{cardsData.map((card) => (
				<div
					key={card.id}
					className="my-6 flex h-[420px] w-[1000px] flex-col items-center justify-self-center rounded-lg p-6 ring-2 ring-[#FA023E]"
				>
					<div className="grid h-[50%] w-[100%] grid-cols-7">
						<div className="col-span-2">
							<Image src={card.imageUrl} alt="Imagem do evento 1" />
						</div>

						<div className="col-span-4 -ml-[80px]">
							<h3 className="mb-2 text-[21px] font-bold text-[#FA023E]">
								{card.title}
							</h3>
							<div className="grid grid-cols-2">
								<div>
									<p className="mb-4 font-bold">
										Data de Inicio:{" "}
										<span className="font-normal">{card.startDate}</span>
									</p>
									<p className="font-bold">Período e horário:</p>
									<p className="font-bold">
										Manhã:{" "}
										<span className="font-normal">{card.schedule.morning}</span>
									</p>
									<p className="font-bold">
										Tarde:{" "}
										<span className="font-normal">
											{card.schedule.afternoon}
										</span>
									</p>
								</div>
								<div>
									<p className="mb-4 font-bold">
										Data de Finalização:{" "}
										<span className="font-normal">{card.endDate}</span>
									</p>
									<p className="font-bold">
										Carga horária:{" "}
										<span className="font-normal">{card.duration}</span>
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<div className="flex flex-row items-center justify-center gap-3 rounded-lg py-1.5 ring-2 ring-black">
								<button className="text-[12px] font-medium text-[#000000]">
									Ver evento
								</button>
								<FaRegEye className="w-3" />
							</div>

							<div className="flex flex-row items-center justify-center gap-3 rounded-lg py-1 ring-2 ring-black">
								<button className="text-[12px] font-medium text-[#000000]">
									Ver todas as <br /> edições
								</button>
								<FaRegEye className="w-3" />
							</div>
						</div>
					</div>

					<div className="mt-6 flex h-[50%] w-full justify-items-stretch">
						<h3 className="justify-self-start font-bold">Descrição: </h3>
						<p className="-ml-20 mt-8 justify-self-start">{card.description}</p>
					</div>
				</div>
			))}
		</>
	);
}
