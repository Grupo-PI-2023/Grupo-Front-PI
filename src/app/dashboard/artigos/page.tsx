import React from 'react';

import Layout from '@/components/Artigos/ArtigosLayout/Layout';
import Menu from '@/components/Artigos/ArtigosMenu/Menu';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';

export default async function Artigos() {
	return (
		<div className="flex flex-col justify-items-center justify-center">
			<Navbar />
			<Layout />
			<Footer />
		</div>
	);
}
