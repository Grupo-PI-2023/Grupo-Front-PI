'use client';

import { useState } from 'react';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import NavBarRate from '@/components/Rate/NavBarRate';

export default function ViewRateArticlePage() {
	const [currentOption, setCurrentOption] = useState('rate');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};

	return (
		<div>
			<NavbarAuthenticated />
			<NavBarRate
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
			<Footer />
		</div>
	);
}
