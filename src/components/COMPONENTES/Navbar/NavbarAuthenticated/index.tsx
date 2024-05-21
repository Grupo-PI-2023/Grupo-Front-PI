'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { FaRegUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoHome, GoSearch } from 'react-icons/go';

import logo from '@/imgs/logo.svg';

import { navigationAuthenticatedRoutes } from '../routes';
import * as S from './styles';

export default function NavbarAuthenticated() {
	const router = useRouter();
	const [currentOption, setCurrentOption] = useState('/evento/criar-evento');
	const [query, setQuery] = useState('');
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		const currentRoute = window.location.pathname;
		setCurrentOption(currentRoute);
	}, []);

	const handleOptionClick = (option: any) => {
		setCurrentOption(option);
		router.push(`${option}`);
	};

	return (
		<div className="fixed left-0 right-0 top-0 z-50 bg-[#F4F4F4] px-16 py-6 text-2xl shadow-md">
			<div className="flex items-center justify-between">
				<div className="flex gap-5">
					<GiHamburgerMenu
						className="cursor-pointer"
						onClick={() => setOpenMenu(!openMenu)}
					/>
					<GoHome className="cursor-pointer" />
					<GoSearch className="cursor-pointer" />
				</div>
				<a href="/">
					<Image
						src={logo}
						alt="Logo Engetec"
						height={50}
						className="cursor-pointer"
					/>
				</a>
				<FaRegUser className="cursor-pointer" />
			</div>
			<div
				className={`
            absolute top-0 
			transition-all duration-500 ease-in-out
            ${openMenu ? 'fixed left-0' : 'left-[-100vw]'}
            bg-opacity-0s flex h-[100vh] w-[100vw]
            flex-col items-center justify-start gap-5 overflow-auto bg-[#fcfcfc00]`}
				onClick={() => setOpenMenu(!openMenu)}
			>
				<div
					className="absolute left-0 flex h-full w-[25%] flex-col items-center justify-start gap-5 overflow-auto bg-[#fcfcfc] bg-opacity-100 shadow-2xl pb-10"
					onClick={(e) => e.stopPropagation()}
				>
					<div
						className="relative left-[40%] cursor-pointer py-3"
						onClick={(e) => setOpenMenu(!openMenu)}
					>
						X
					</div>
					{navigationAuthenticatedRoutes.map((item, i) => (
						<S.OptionMenu
							key={i}
							onClick={() => {
								handleOptionClick(item.link);
								setOpenMenu(false);
							}}
							className="cursor-pointer text-base"
							selected={currentOption === item.link}
						>
							{item.title}
						</S.OptionMenu>
					))}
				</div>
			</div>
		</div>
	);
}
