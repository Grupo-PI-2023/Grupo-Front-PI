'use client';

import React, { useState } from 'react';

import { CiFilter } from 'react-icons/ci';
import { GoXCircle } from 'react-icons/go';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { PiEyeBold } from 'react-icons/pi';

import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import NavBarRate from '@/components/Rate/NavBarRate';

import database from './events.json';

export default function ArtigosAvaliarPrincipal() {
	const [currentOption, setCurrentOption] = useState('rate');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};

	return (
		<div>
			<Navbar />
			<NavBarRate
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
			<Footer />
		</div>
	);
}
