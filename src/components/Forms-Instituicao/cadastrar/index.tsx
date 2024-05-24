import React from 'react';

const FormularioCadastrarInstituicao = () => {
	return (
		<div className="container">
			<form className="card rounded-lg px-36 py-20 shadow-lg">
				<h1 className="mb-4 text-center text-3xl font-bold text-[#4B00E0]">
					Cadastrar Instituição
				</h1>
				<p className="mb-4 text-center text-sm font-medium text-gray-600">
					Irá ter que passar por uma aprovação para ter a instituição cadastrada
				</p>
				<div className="mb-4">
					<label
						htmlFor="nome"
						className="mb-2 block text-sm font-medium text-gray-800"
					>
						Nome:
					</label>
					<input
						type="text"
						id="nome"
						name="nome"
						className="w-full rounded-lg  border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="cpf"
						className="mb-2 block text-sm font-medium text-gray-800"
					>
						CNPJ:
					</label>
					<input
						type="text"
						id="cpf"
						name="cpf"
						className="w-full rounded-lg border border-gray-300 px-3 py-1 focus:border-blue-500 focus:outline-none"
					/>
				</div>
				<div className="flex w-full items-center justify-center">
					<button
						type="submit"
						className="rounded-lg bg-[#4B00E0] px-14 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
					>
						Cadastrar
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormularioCadastrarInstituicao;
