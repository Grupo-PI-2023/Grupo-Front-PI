'use client';

import { useState } from 'react';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/Navbar/NavbarAuthenticated';
import TabbarAuthenticated from '@/components/Tabbar/TabbarAuthenticated';
import SelectArea from '@/components/CriarAreaConhecimento/SelectArea';

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