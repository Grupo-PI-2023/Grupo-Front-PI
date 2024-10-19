'use client';

import React from 'react';

import Image from 'next/image';

import { FaRegEye } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { LuCalendarClock } from 'react-icons/lu';
import { LuPencilLine } from 'react-icons/lu';
import { TfiEmail } from 'react-icons/tfi';

import ImgCultureFest from '../../assets/CultureFest.png';
import DefaultButton from '../DefaultButton';

function AlertCard() {
	return (
		<section className="flex items-baseline gap-12">
			<div className="flex flex-col items-center gap-6">
				<button className="flex items-center gap-2 rounded-full border border-black px-3 py-1 text-sm text-black">
					Ver todas as edições <FaRegEye />
				</button>
				<p className="mt-4 flex items-center gap-2 text-base text-black">
					<TfiEmail /> cultureFest@gmail.com
				</p>
				<Image
					src={ImgCultureFest}
					alt="CultureFest Logo"
					className="w-[800px]"
				/>
				<DefaultButton
					label="Inscrever-se"
					backgroundColorHex="#4B00E0"
					textColorHex="#fff"
					customWidth="128px"
				/>
			</div>
			<div>
				<h1 className="my-4 text-4xl font-bold">CultureFest</h1>
				<h2 className="mb-2 flex items-center gap-2 text-lg font-semibold">
					<LuPencilLine className="text-[#4B00E0]" /> Descrição
				</h2>
				<p className="mb-6 text-base text-gray-700">
					Prepare-se para uma experiência musical única e emocionante! Estamos
					entusiasmados em anunciar o incrível Festival Melodias Vibrantes, um
					evento que celebrará a diversidade musical e encantará os amantes de
					todos os gêneros. <br />
					<br /> Além das performances épicas, o CultureFest também contará com
					uma série de atividades emocionantes para enriquecer a experiência dos
					participantes. Teremos oficinas interativas com músicos experientes,
					onde você poderá aprender técnicas, explorar seu próprio talento
					musical e descobrir os segredos dos bastidores da indústria.
				</p>

				<div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
					<div className="rounded-lg border border-[#B9012D] p-4 shadow-md">
						<h2 className="mb-4 flex items-center justify-center gap-2 text-center text-lg font-semibold">
							<LuCalendarClock className="text-[#B9012D]" /> Data e Hora
						</h2>
						<div className="flex items-center justify-between text-base">
							<div className="flex flex-col gap-2">
								<p>
									<a className="font-bold">Data de Início:</a> 10/07/2023
								</p>
								<p>
									<a className="font-bold">Data de Finalização:</a> 15/07/2023
								</p>
							</div>
							<div className="flex flex-col gap-2">
								<p>
									<a className="font-bold">Horário:</a> 7h às 18h
								</p>
								<p>
									<a className="font-bold">Carga Horária:</a> 90h
								</p>
							</div>
						</div>
					</div>
					<div className="rounded-lg border border-[#B9012D] p-4 shadow-md">
						<h2 className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold">
							<IoLocationOutline className="text-[#B9012D]" /> Localização
						</h2>
						<p className="text-base">
							<a className="font-bold">Físico:</a> SP - São Paulo
						</p>
						<p className="text-base">
							Fatec Zona Leste - Av. Águia de Haia, Endereço 6
						</p>
						<p className="text-base">
							<a className="font-bold">Remoto:</a> Webex
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AlertCard;
