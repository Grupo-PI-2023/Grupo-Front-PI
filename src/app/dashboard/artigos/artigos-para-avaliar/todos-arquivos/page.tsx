import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import TodosOsArtigosParaAvaliar from '@/components/Artigos/TodosArtigosParaAvaliar';

import React from 'react';

export default async function ArtigosAvaliarTodos() {
	return (
		<div>
			<Navbar />
            <TodosOsArtigosParaAvaliar />
			<Footer />
		</div>
	);
}