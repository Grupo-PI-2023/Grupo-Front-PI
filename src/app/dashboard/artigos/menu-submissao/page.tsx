'use client';

import Footer from '@/components/Footer';
import MenuSubmissao from '@/components/MenuSubmissao';
import NavbarAuthenticated from '@/components/Navbar/NavbarAuthenticated';

export default function PageMenuSubmissao() {
	return (
		<div>
			<NavbarAuthenticated />
			<MenuSubmissao />;
			<Footer />
		</div>
	);
}
