import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default async function Support() {
	return (
		<div className="flex h-screen flex-col justify-items-center ">
			<Navbar />
			<div className="flex h-full items-center justify-center">
				<h1>Support Page</h1>
			</div>
			<Footer />
		</div>
	);
}
