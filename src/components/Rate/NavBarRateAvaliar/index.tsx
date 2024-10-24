'use client';

import { CiBoxList } from 'react-icons/ci';
import { HiOutlineBookOpen } from 'react-icons/hi';

import Form from '@/components/Rate/NavBarRateAvaliar/Form';
import RateArticle from '@/components/Rate/RateArticle';

import * as S from './styles';

type NavBarRateProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
};

const handleRatingChange = (value: any) => {
	console.log('Nota selecionada:', value);
};

export default function NavBarRate({
	currentOption,
	handleOptionClick,
}: NavBarRateProps) {
	const renderContent = () => {
		switch (currentOption) {
			case 'articles-rate':
				return (
					<>
						<Form />
					</>
				);
			case 'rate':
				return (
					<RateArticle handleOptionClick={() => handleOptionClick('rate')} />
				);
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="flex w-full justify-center">
				<div
					className="absolute z-30 mt-24 flex h-16 w-60 flex-row items-center
				justify-center gap-10 bg-[#F4F4F4] px-16 py-5 shadow-md"
				>
					<div className="flex flex-row items-center">
						<S.OptionMenu
							onClick={() => handleOptionClick('rate')}
							className="flex cursor-pointer gap-2 text-xs"
							selected={currentOption === 'rate'}
						>
							<CiBoxList className="h-5 w-5" />
							Artigos
						</S.OptionMenu>
					</div>

					<div className="flex items-center">
						<S.OptionMenu
							onClick={() => handleOptionClick('articles-rate')}
							className="flex cursor-pointer gap-2 text-xs"
							selected={currentOption === 'articles-rate'}
						>
							<HiOutlineBookOpen className="h-5 w-5" />
							Avaliação
						</S.OptionMenu>
					</div>
				</div>
				{renderContent()}
			</div>
		</div>
	);
}
