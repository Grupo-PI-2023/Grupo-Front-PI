'use client'
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import ArtigosCards from '@/components/Artigos/ArtigosCards/Cards'

export default async function EditarArtigosPage() {
	return (
		<div className='h-full flex flex-col justify-items-center justify-center'>
			<Navbar />
			<div className='flex flex-col mt-28 items-center justify-center'>
                <ArtigosCards />
            </div>
			<Footer />
		</div>
	);
}
