'use client';

import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';

export default function Evento() {
	return (
		<div>
			<NavbarAuthenticated />
			<Menu />;
			<Footer />
		</div>
	);
}
