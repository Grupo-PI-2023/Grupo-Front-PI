'use client';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/Navbar/NavbarAuthenticated';
import EditarSessao from '@/components/Forms-Sessao/editar';

export default function EditarSessaoPage() {

	return (
		<div>
			<NavbarAuthenticated />

                <EditarSessao
                />
            
			<Footer />
		</div>
	);
}
