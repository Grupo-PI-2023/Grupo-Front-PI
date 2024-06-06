import { useState } from 'react';

import { FaRegEdit } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { cardsData } from '@/mocks/ArtigosCards';

export default function Card() {
	const [cards, setCards] = useState([...cardsData]);

	return (
		<>
			{/* Renderize os cards com base nos dados do array */}
			{cards.map((card) => (
				<div
					key={card.id}
					className="mb-6 mt-6 flex grid w-[950px] grid-cols-2 flex-col items-center justify-center gap-10 rounded-lg p-6 pr-2 shadow-lg ring-2 ring-[#FA023E]"
				>
					<div className="w-[181%]">
						<h3 className="mb-2 text-[23px] font-medium text-[#FA023E]">
							{card.title}
						</h3>
						<p className="mb-4 font-bold">
							Tipo do Arquivo: <span className="font-normal">{card.type}</span>
						</p>
						<p className="mb-4 ml-6 font-bold">
							Status: <span className="font-normal">{card.status}</span>
						</p>
						<p className="ml-6 font-bold">
							Autores: <span className="font-normal">{card.Autores}</span>
						</p>

						{card.schedule && (
							<>
								<div className="ml-6 mt-4 flex gap-10">
									<p className="font-bold">
										Data de Envio:{' '}
										<span className="font-normal">
											{card.schedule.DatadeEnvio}
										</span>
									</p>
									{card.schedule.DatadeEnvio && (
										<p className="font-bold">
											Apresentação:{' '}
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

					<div className="ml-[325px] flex w-[110px]">
						<div className="flex w-full flex-col gap-4">
							<div className="flex flex-row gap-2 rounded-full ring-2 ring-black">
								<button className="ml-2 p-1 text-[12px] font-medium text-[#000000]">
									Ver artigo
								</button>
								<IoEyeOutline />
							</div>

							<div className="flex flex-row gap-2 rounded-full px-4 ring-2 ring-[#4B00E0]">
								<button className="ml-2 p-1 text-[14px] font-medium text-[#4B00E0]">
									Baixar
								</button>
								<IoMdDownload />
							</div>

							<div className="flex flex-row gap-2 rounded-full px-4 ring-2 ring-[#126A10]">
								<button className="ml-2 p-1 text-[14px] font-medium text-[#126A10]">
									Editar
								</button>
								<FaRegEdit />
							</div>

							<div className="flex flex-row gap-2 rounded-full px-4 ring-2 ring-[#BF0000]">
								<button className="ml-2 p-1 text-[14px] font-medium text-[#BF0000]">
									Excluir
								</button>
								<RiDeleteBin6Line />
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
