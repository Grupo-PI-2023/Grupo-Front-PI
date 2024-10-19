'use client';

import EventDetails from '@/components/EventDetails';
import EventsCard from '@/components/EventsCard';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import OtherEvents from '@/components/OtherEvents';
import Pagination2 from '@/components/Pagitation/Pagination2';
import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';

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
