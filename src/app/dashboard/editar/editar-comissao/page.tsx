'use client';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/Navbar/NavbarAuthenticated';
import EditarComissao from '@/components/FormsComissao/editar';

export default function EditarComissaoPage() {

	return (
		<div>
			<NavbarAuthenticated />

                <EditarComissao
                />
            
			<Footer />
		</div>
	);
}
