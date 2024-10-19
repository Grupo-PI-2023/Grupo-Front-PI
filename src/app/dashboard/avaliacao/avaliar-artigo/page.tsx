'use client';

import { useState } from 'react';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import NavBarRate from '@/components/Rate/NavBarRate';
import Rating from '@/components/Avaliations/Rating';
import NavBarRateAvaliar from '../../../../components/Rate/NavBarRateAvaliar';

export default function ViewRateArticlePage() {
	const [currentOption, setCurrentOption] = useState('rate');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};


	return (
		<div>
			<NavbarAuthenticated />
			<NavBarRateAvaliar
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>

			<Footer />
		</div>
	);
}
