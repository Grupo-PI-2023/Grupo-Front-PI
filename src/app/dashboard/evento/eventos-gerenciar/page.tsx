'use client';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import Pagination1 from '@/components/Pagitation/Pagination1';
import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';

import EventsCardGerenciar from './EventsCardGerenciar';

export default function EventoGerenciar() {
	return (
		<div>
			<NavbarAuthenticated />

			<div className="mt-36 flex h-[1280px] flex-col items-center justify-items-stretch">
				<Title
					title="Eventos"
					colorHex="red"
					subtitle="Todos os eventos para gerenciar as avaliações"
				/>

				<div className="ml-[780px] flex flex-col gap-4">
					<SearchFilter />
				</div>

				<EventsCardGerenciar />
			</div>

			<Pagination1
				currentPage={3}
				totalPages={3}
				onPageChange={function (pageNumber: number): void {
					throw new Error('Function not implemented.');
				}}
			/>

			<Footer />
		</div>
	);
}
