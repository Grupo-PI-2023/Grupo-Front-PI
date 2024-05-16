import Footer from '@/components/COMPONENTES/Footer';
import MenuSubmissao from '@/components/COMPONENTES/MenuSubmissao';
import NavbarAuthenticated from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';

export default async function MenuArtigos() {
	return (
		<div>
			<NavbarAuthenticated />
			<MenuSubmissao />;
			<Footer />
		</div>
	);
}
