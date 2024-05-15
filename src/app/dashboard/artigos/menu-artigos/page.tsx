import Footer from '@/components/Footer';
import MenuSubmissao from '@/components/MenuSubmissao';
import NavbarAuthenticated from '@/components/Navbar/NavbarAuthenticated';

export default async function MenuArtigos() {
	return (
		<div>
			<NavbarAuthenticated />
			<MenuSubmissao />;
			<Footer />
		</div>
	);
}
