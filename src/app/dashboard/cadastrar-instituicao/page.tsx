import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import FormularioCadastrarInstituicao from '@/components/Forms-Instituicao/cadastrar';
import Menu from '@/components/Artigos/ArtigosMenu/Menu';

export default async function Support() {
	return (
		<div>
			<Navbar />
				<FormularioCadastrarInstituicao />
			<Footer />
		</div>
	);
}