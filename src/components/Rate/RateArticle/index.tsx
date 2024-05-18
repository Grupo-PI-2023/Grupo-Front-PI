'use client';

import { useState } from "react";
import NavBarRate from "../NavBarRate";

type RateArticleProps = {
	handleOptionClick: (option: string) => void;
};

export default function RateArticle({ handleOptionClick }: RateArticleProps) {
	const [currentOption, setCurrentOption] = useState('rate');
	

	return (
		<div>
			<div className="container mb-6 mt-8 flex justify-center">
				
			</div>
        
		</div>
	);
}
