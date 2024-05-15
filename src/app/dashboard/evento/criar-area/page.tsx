'use client';

import { useState } from 'react';

import SelectArea from '@/components/CriarAreaConhecimento/SelectArea';
import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import TabbarAuthenticated from '@/components/Tabbar/TabbarAuthenticated';

export default function AreaConhecimento() {
	const [currentOption, setCurrentOption] = useState('criar-grande-area');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	return (
		<div>
			<NavbarAuthenticated />
			<TabbarAuthenticated
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
            <SelectArea currentOption={currentOption}
				handleOptionClick={handleOptionClick} />
			<Footer />
		</div>
	);
}