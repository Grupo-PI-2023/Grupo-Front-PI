import { FaRegEye } from 'react-icons/fa';

import Rating from '@/components/Avaliations/Rating';
import Title from '@/components/Title';

const handleRatingChange = (value: any) => {
	console.log('Nota selecionada:', value);
};
export default function EventsCard() {
	return (
		<>
			<div className="container mx-auto mt-[210px] flex flex-col items-center">
				<Title
					title="Avaliar Artigo"
					subtitle="A média é calculada conforme as perguntas são respondidas"
					colorHex="#4B00E0"
				/>

				<div className="align-center mb-5 mt-12 flex w-[340px] -translate-x-6 justify-center space-x-3 rtl:space-x-reverse">
					<button
						type="button"
						className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600 active:bg-slate-600"
						aria-current="true"
						aria-label="Slide 1"
						data-carousel-slide-to="0"
					></button>
					<button
						type="button"
						className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
						aria-current="false"
						aria-label="Slide 2"
						data-carousel-slide-to="1"
					></button>
				</div>

				<div
					className="flex w-3/5 flex-row items-end justify-end"
					style={{ marginTop: '-35px' }}
				>
					<div className="mr-5 flex flex-row items-center gap-2 rounded-xl ring-1 ring-black ">
						<button className="ml-2 p-1 text-[12px] font-medium text-[#000000]">
							Ver Artigo
						</button>
						<FaRegEye className="mr-4" />
					</div>
				</div>

				<form
					className="mt-12 w-3/5 justify-center rounded-xl  border border-slate-900 bg-transparent p-5 shadow-md"
					style={{ marginTop: '15px' }}
				>
					<div className="flex w-full flex-row items-center justify-center">
						<div className="rounded-xl border-2 border-cyan-400 px-4 py-4">
							<p className="font-bold">Média 0</p>
						</div>
					</div>
					<div className="form -mt-2">
						<span className="mb-2 w-full text-left text-sm font-bold text-gray-600">
							1. Tema(atual e relevante)
						</span>
						<Rating
							title="Avaliação de Produto"
							onRatingChange={handleRatingChange}
						/>

						<span className="mb-2 mt-12 w-full text-left text-sm font-bold text-gray-600">
							2. Objetivos (claros e bem definidos)
						</span>
						<Rating
							title="Avaliação de Objetivos"
							onRatingChange={handleRatingChange}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							3. Revisão de Literatura (reflete o estado-da-arte do conhecimento
							na área)
						</span>
						<Rating
							title="Avaliação de Revisão"
							onRatingChange={handleRatingChange}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							4. Consistência conceitual ou teórica do trabalho (adequada e bem
							estruturada)
						</span>
						<Rating
							title="Avaliação de Consistência"
							onRatingChange={handleRatingChange}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							5. Método de Pesquisa utilizado (claramente definido e consistente
							com os objetivos do trabalho)
						</span>
						<Rating
							title="Avaliação de Método"
							onRatingChange={handleRatingChange}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							6. Conclusões (fundamentadas nos dados da pesquisa, clara e
							objetivas)
						</span>
						<Rating
							title="Avaliação de Conclusões"
							onRatingChange={handleRatingChange}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							7. Contribuição científica (para o conhecimento na área temática)
						</span>
						<Rating
							title="Avaliação de Contribuição"
							onRatingChange={handleRatingChange}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							8. Análise de dados e resultados (interpretação correta dos dados
							e articulada com a base teórica)
						</span>
						<Rating
							title="Avaliação de Análise"
							onRatingChange={handleRatingChange}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							9. Redação e organização do texto (ortografia, gramática, clareza,
							objetividade e estrutura formal)
						</span>
						<Rating
							title="Avaliação de organização"
							onRatingChange={handleRatingChange}
						/>
					</div>
				</form>
				<div className="mt-8 flex flex-row items-center justify-center gap-6">
					<button
						className="w-40 rounded-xl border p-2.5 text-center text-sm font-medium text-white"
						type="submit"
						style={{ backgroundColor: '#8A8A8A' }}
					>
						Voltar
					</button>

					<button
						className="w-40 rounded-xl border p-2.5 text-center text-sm font-medium text-white"
						type="submit"
						style={{ backgroundColor: '#4B00E0' }}
					>
						Avançar
					</button>
				</div>
			</div>
		</>
	);
}
