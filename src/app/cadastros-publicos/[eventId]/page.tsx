'use client';

import { useState } from 'react';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import Tabbar from '@/components/TabbarPublicRegisters';

export default function CadastroPublicUsers({
	params,
}: {
	params: {
		eventId: string;
	};
}) {
	const [currentOption, setCurrentOption] = useState('cadastrar-user');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};

	return (
		<div>
			<NavbarAuthenticated />
			<Tabbar
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
				eventId={params.eventId}
			/>
			<Footer />
		</div>
	);
}
