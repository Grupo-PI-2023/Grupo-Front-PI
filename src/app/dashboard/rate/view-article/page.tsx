'use client';

import Footer from '@/components/COMPONENTES/Footer';
import ViewArticle from '@/components/ViewArticle';
import NavbarAuthenticated from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';

export default function ViewArticlePage() {
	
	return (
		<div>
			<NavbarAuthenticated />
            <ViewArticle />    
			<Footer />
		</div>
	);
}
 