'use client';

import Hibrido from './Modalidades/Hibrido';
import Online from './Modalidades/Online';
import Presencial from './Modalidades/Presencial';

export type DataLocalProps = {
	handleNextClick: (option: string) => void;
};

export default function DataLocal({ handleNextClick }: DataLocalProps) {
	const modalidade: string = 'Online'; // variavel muda de acordo com o que foi cadastrado
	const modalidadesType = {
		Hibrido: <Hibrido handleNextClick={handleNextClick} />,
		Presencial: <Presencial handleNextClick={handleNextClick} />,
		Remoto: <Online handleNextClick={handleNextClick} />,
	};

	switch (modalidade) {
		case 'Presencial':
			return modalidadesType.Presencial;
		case 'Hibrido':
			return modalidadesType.Hibrido;
		default:
			return modalidadesType.Remoto;
	}
}
