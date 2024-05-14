import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/NavbarAuthenticated';

export default async function Artigos() {
	return (
		<div className="flex h-screen flex-col justify-items-center ">
			<Navbar />
			<div className="flex h-full items-center justify-center">
				<h1>Artigos Page</h1>
			</div>
			<Footer />
		</div>
	);
}
