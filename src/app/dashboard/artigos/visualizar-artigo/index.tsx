import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';

export default async function VisualizarArtigoPage() {
	return (
		<div className='h-screen flex flex-col justify-items-center '>
			<Navbar />
			<div className='h-full flex justify-center items-center'>
                <h1>Visualizar Artigos Page</h1>
            </div>
			<Footer />
		</div>
	);
}
