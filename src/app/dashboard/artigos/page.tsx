import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import Layout from '@/components/Artigos/ArtigosLayout/Layout';
import Menu from '@/components/Artigos/ArtigosMenu/Menu';

export default async function Artigos() {
	return (
		<div className=''>
			<Navbar />
				<Menu />
				<Layout />
			<Footer />
		</div>
	);
}