"use client";

import EventsCard from "@/components/EventsCard";
import Footer from "@/components/Footer";
import NavbarAuthenticated from "@/components/NavbarAuthenticated";
import Pagination2 from "@/components/Pagitation/Pagination2";
import SearchFilter from "@/components/SearchFilter";
import Title from "@/components/Title";

export default function Evento() {
	return (
		<div>
			<NavbarAuthenticated />

			<div className="mt-36 flex h-[1280px] flex-col items-center justify-items-stretch">
				<Title
					title="Meus Eventos"
					colorHex="red"
					subtitle="Todos os eventos que você organiza ou administra."
				/>

				<div className="flex w-[1000px] justify-end">
					<SearchFilter />
				</div>

				<EventsCard />
			</div>

			<Pagination2 />

			<Footer />
		</div>
	);
}
