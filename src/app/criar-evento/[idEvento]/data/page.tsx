'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import Hibrido from '@/components/TabbarAuthenticated/TabBarFormsAuthenticated/Forms-DataLocal/Modalidades/Hibrido';
import Online from '@/components/TabbarAuthenticated/TabBarFormsAuthenticated/Forms-DataLocal/Modalidades/Online';
import Presencial from '@/components/TabbarAuthenticated/TabBarFormsAuthenticated/Forms-DataLocal/Modalidades/Presencial';

export type DataLocalProps = {
	handleNextClick: (option: string) => void;
};

export default function DataLocalPage() {
	const searchParams = useSearchParams();

	// URL -> `/cadastrar/12345/data?modalidade=Onlie`
	const modalidade = searchParams?.get('modalidade'); // variavel muda de acordo com o que foi cadastrado
	const router = useRouter();
	const handleNextClick = (option: string) => {
		router.push('/cadastrar/12345/arquivos');
	};

	const modalidadesType = {
		Hibrido: <Hibrido handleNextClick={handleNextClick} />,
		Presencial: <Presencial handleNextClick={handleNextClick} />,
		Remoto: <Online handleNextClick={handleNextClick} />,
	};

	switch (modalidade) {
		case 'Presencial':
			return (
				<div>
					<NavbarAuthenticated />
					{modalidadesType.Presencial}
					<Footer />
				</div>
			);
		case 'Hibrido':
			return (
				<div>
					<NavbarAuthenticated />
					{modalidadesType.Hibrido}
					<Footer />
				</div>
			);
		default:
			return (
				<div>
					<NavbarAuthenticated />
					{modalidadesType.Remoto}
					<Footer />
				</div>
			);
	}
}
