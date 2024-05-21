'use client';

import Footer from '@/components/COMPONENTES/Footer';
import EditarArtigos from '@/components/FormsArtigos/editar';
import NavbarAuthenticated from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';

export default function EditarComissaoPage() {
	return (
		<div>
			<NavbarAuthenticated />

			<EditarArtigos />

			<Footer />
		</div>
	);
}
