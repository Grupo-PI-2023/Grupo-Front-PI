'use client';

import Navbar from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import Footer from '@/components/COMPONENTES/Footer';
import SubmeterArquivo from '@/components/SubmeterArquivo';


export default function SubmeterArquivoPage() {
	
	return (
		<div>
			<Navbar />
                <SubmeterArquivo />
			<Footer />
		</div>
	);
}
 