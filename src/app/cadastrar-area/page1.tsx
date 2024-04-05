'use client';

import { useState } from 'react';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/Navbar/NavbarAuthenticated';
import CriarArea from '@/components/CriarAreaConhecimento';
import TabbarAuthenticated from '@/components/Tabbar/TabbarAuthenticated';
import React from 'react';

export default function CadastrarArea() {

	return (
		<div>
			<NavbarAuthenticated />
			<TabbarAuthenticated currentOption={''} handleOptionClick={function (option: string): void {
				throw new Error('Function not implemented.');
			} } />
			<CriarArea />
			<Footer />
		</div>
	);
}
