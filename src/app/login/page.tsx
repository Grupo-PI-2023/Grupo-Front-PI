import Footer from '@/components/Footer';
import LoginForm from '@/components/Forms-Login';
import Navbar from '@/components/Navbar';

export default async function LoginPage() {
	return (

			<div className="flex h-screen flex-col justify-items-center "> 
				<Navbar />
				<div className="flex h-full items-center justify-center">
					<h1>Login Page</h1>
					<LoginForm />
				</div>
				<Footer />
			</div> 

	);
}
