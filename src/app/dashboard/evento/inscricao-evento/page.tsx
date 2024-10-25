'use client';

import EventDetails from '@/components/EventDetails';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import OtherEvents from '@/components/OtherEvents';

export default function InscricaoEvento() {
	return (
		<div>
			<NavbarAuthenticated />

			<div className="container mt-44 w-[1280px]">
				<div className="flex flex-col gap-10">
					<EventDetails />
					<OtherEvents />
				</div>
			</div>

			<Footer />
		</div>
	);
}
