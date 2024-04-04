'use client';

import Footer from '@/components/Footer';
import EventosCriados from '@/components/EventosCriados/Content';
import NavbarAuthenticated from '@/components/Navbar/NavbarAuthenticated';

export default function Evento() {

	return (
		<div>
			<NavbarAuthenticated />
				<EventosCriados />
			<Footer />
		</div>
	);
}
