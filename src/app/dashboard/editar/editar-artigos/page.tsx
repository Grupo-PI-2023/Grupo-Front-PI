'use client';

import Footer from '@/components/Footer';
import EditarArtigos from '@/components/FormsArtigos/editar';
import NavbarAuthenticated from '@/components/Navbar/NavbarAuthenticated';

export default function EditarComissaoPage() {
	return (
		<div>
			<NavbarAuthenticated />

			<EditarArtigos />

			<Footer />
		</div>
	);
}
