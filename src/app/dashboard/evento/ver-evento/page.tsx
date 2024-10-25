'use client';

import EventInformations from '@/components/EventInformations';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import OtherEvents from '@/components/OtherEvents';

export default function VerEvento() {
	return (
		<div>
			<NavbarAuthenticated />

			<div className="container mt-44 w-[1280px]">
				<EventInformations />
			</div>

			<Footer />
		</div>
	);
}
