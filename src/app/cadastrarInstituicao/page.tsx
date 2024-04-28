import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/NavbarAuthenticated';
import Form from '@/components/FormCadastrarInstituicao/Form';
import Menu from '@/components/ArtigosMenu/Menu';

export default async function Support() {
	return (
		<div className='w-full flex flex-col justify-items-center min-h-screen'>
			<Navbar />
				<Form />
			<Footer />
		</div>
	);
}