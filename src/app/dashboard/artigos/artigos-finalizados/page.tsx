'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import Title from '@/components/Title';

export default function EditarArtigosPage() {
	const initialValues = {
		texto1: 'Este artigo tem como objetivo analisar as estratégias para o sucesso empresarial na era digital, destacando a importância da transformação digital como um meio fundamental para as organizações se adaptarem e prosperarem em um ambiente de negócios cada vez mais digitalizado.',
		texto2: 'This article aims to analyze strategies for business success in the digital age, highlighting the importance of digital transformation as a fundamental means for organizations to adapt and thrive in an increasingly digitized business environment.',
		texto3: 'A análise das estratégias para o sucesso empresarial na era digital é abrangente e embasada, fornecendo insights valiosos para os gestores e líderes que buscam se adaptar e aproveitar as oportunidades trazidas pela digitalização.',
		texto4: 'A pesquisa realizada é embasada e atualizada, permitindo uma compreensão aprofundada dos desafios e oportunidades que a transformação digital oferece. As palavras-chave selecionadas estão diretamente relacionadas ao assunto central do artigo, fornecendo uma visão clara do conteúdo abordado.',
		input1: 'Transformação Digital: Uma Análise das Estratégias para o Sucesso Empresarial na Era Digital',
		input2: 'Clara Santos, Gustavo Oliveira, Marina Almeida',
		input3: 'Clara Santos',
		input4: 'Estratégias, Sucesso Empresarial, Era Digital, Transformação Organizacional, Inovação Tecnológica, Mudança Digital',
		input5: 'Strategies, Business Success, Digital Age, Organizational Transformation, Technological Innovation, Digital Change',
		input6: 'Tecnologia,',
		input7: 'Tecnologia, Análise Estratégicas',
		input8: '13:30 até 14:30',
		input9: '03',
	};

	const handleVoltarClick = () => {
		/*  Implemente a lógica para voltar para a página anterior*/
	};

	return (
		<div>
			<Navbar />
			<main>
				<div className="container flex-col items-center">
					<Title
						title="Artigos"
						subtitle="Visualizar Informações"
						colorHex="#ef0037"
					/>

					<form className="w-[60%] rounded-xl bg-white p-8 shadow-lg">
						<div className="grid grid-cols-2 gap-8">
							<div className="col-span-1 grid grid-cols-1 gap-4">
								<div>
									<label
										htmlFor="texto1"
										className="mb-2 block font-medium"
									>
										Resumo:
									</label>
									<textarea
										id="texto1"
										name="texto1"
										className="h-48 w-full overflow-y-hidden rounded-lg border border-[#828282] px-4 py-2 text-[18px] font-medium"
										placeholder="Texto 1"
										defaultValue={initialValues.texto1}
									></textarea>
								</div>
								<div>
									<label
										htmlFor="texto2"
										className="mb-2 block font-normal"
									>
										Abstract:
									</label>
									<textarea
										id="texto2"
										name="texto2"
										className="h-48 w-full overflow-y-hidden rounded-lg border border-[#828282] px-4 py-2 text-[18px] font-medium"
										placeholder="Texto 1"
										defaultValue={initialValues.texto2}
									></textarea>
								</div>

								<div>
									<label
										htmlFor="texto3"
										className="mb-2 block font-normal"
									>
										Comentário do primeiro avaliador:
									</label>
									<textarea
										id="texto3"
										name="texto3"
										className="h-48 w-full overflow-y-hidden rounded-lg border bg-[#C6C6C6] px-4 py-2 text-[18px] font-medium"
										placeholder="Texto 1"
										defaultValue={initialValues.texto3}
									></textarea>
								</div>

								<div>
									<label
										htmlFor="texto4"
										className="mb-2 block font-normal"
									>
										Comentário do segundo avaliador:
									</label>
									<textarea
										id="texto4"
										name="texto4"
										className="h-48 w-full overflow-y-hidden rounded-lg border bg-[#C6C6C6] px-4 py-2 text-[18px] font-medium"
										placeholder="Texto 1"
										defaultValue={initialValues.texto4}
									></textarea>
								</div>
								<button
									onClick={handleVoltarClick}
									className="inline-flex items-center justify-between rounded-full bg-[#5000F0] px-4 py-2 text-center font-bold text-gray-800 hover:bg-gray-400"
								>
									<span></span>
									<span className="font-normal text-white">
										Baixar Artigo
									</span>
									<img
										src="/assets/Artigos/BaixarArtigo.png"
										className="mr-2 h-4 w-4"
									/>
								</button>
							</div>
							<div className="col-span-1 grid grid-cols-1 gap-4">
								<div className="mb-8">
									<label
										htmlFor="input1"
										className="mb-2 block font-normal"
									>
										Título:
									</label>
									<input
										type="text"
										id="input1"
										name="input1"
										className="h-16 w-full overflow-y-hidden rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="Input 1"
										defaultValue={initialValues.input1}
									/>
								</div>
								<div>
									<label
										htmlFor="input2"
										className="mb-2 block font-normal"
									>
										Autores:
									</label>
									<input
										type="text"
										id="input2"
										name="input2"
										className="h-12 w-full overflow-y-hidden rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="Input 2"
										defaultValue={initialValues.input2}
									/>
								</div>
								<div className="mb-8">
									<label
										htmlFor="input3"
										className="mb-2 block font-normal"
									>
										Apresentador:
									</label>
									<input
										type="text"
										id="input3"
										name="input3"
										className="h-12 w-full overflow-y-hidden rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="Input 3"
										defaultValue={initialValues.input3}
									/>
								</div>
								<div className="mb-8">
									<label
										htmlFor="input4"
										className="mb-2 block font-normal"
									>
										Palavras-Chaves:
									</label>
									<input
										type="text"
										id="input4"
										name="input4"
										className="h-12 w-full overflow-y-hidden rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="Input 4"
										defaultValue={initialValues.input4}
									/>
								</div>
								<div className="mb-8">
									<label
										htmlFor="input1"
										className="mb-2 block font-normal"
									>
										Keyword:
									</label>
									<input
										type="text"
										id="input1"
										name="input1"
										className="h-16 w-full overflow-y-hidden rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="Input 1"
										defaultValue={initialValues.input5}
									/>
								</div>
								<div>
									<label
										htmlFor="input2"
										className="mb-2 block font-normal"
									>
										Áreas de conhecimento:
									</label>
									<input
										type="text"
										id="input2"
										name="input2"
										className="h-12 w-full rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="Input 2"
										defaultValue={initialValues.input6}
									/>
								</div>
								<div className="mb-8">
									<label
										htmlFor="input3"
										className="mb-2 block font-normal"
									>
										Subárea:
									</label>
									<input
										type="text"
										id="input3"
										name="input3"
										className="h-12 w-full rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="Input 3"
										defaultValue={initialValues.input7}
									/>
								</div>
								<div className="mt-8 flex w-full justify-between gap-10">
									<div className="w-full">
										<label
											htmlFor="input4"
											className="mb-2 block font-normal"
										>
											Horário da sessão:
										</label>
										<input
											type="text"
											id="input4"
											name="input4"
											className="h-12 w-full rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
											placeholder="Input 4"
											defaultValue={initialValues.input8}
										/>
									</div>

									<div className="w-full">
										<label
											htmlFor="input4"
											className="mb-2 block font-normal"
										>
											Sala:
										</label>
										<input
											type="text"
											id="input4"
											name="input4"
											className="h-12 w-full rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
											placeholder="Input 4"
											defaultValue={initialValues.input9}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-24 flex justify-center">
							<button
								onClick={handleVoltarClick}
								className="inline-flex items-center rounded-xl bg-[#8A8A8A] px-20 py-2 font-bold text-gray-800 hover:bg-gray-400"
							>
								<span className="text-white">Voltar</span>
							</button>
						</div>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	);
}
