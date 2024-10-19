import React, { useState } from 'react';

const Rating = ({ title = "Avaliação", onRatingChange }) => {
    const [selectedRating, setSelectedRating] = useState(null); // Guarda o valor selecionado

    const handleRatingChange = (value) => {
        setSelectedRating(value); // Atualiza o valor selecionado
        if (onRatingChange) onRatingChange(value); // Notifica mudança de valor
    };

    return (
        <fieldset className="flex items-center justify-between w-full gap-4 p-4">
            {/* Label para "Muito Ruim" */}
            <span className="font-bold text-sm text-gray-600">Ruim<br className='flex justify-center' /><span style={{ marginLeft: '8px' }}>(1)</span></span>

            {/* Inputs de Radio em Linha */}
            <div className="flex gap-12 flex-row-reverse">
                {[1, 2, 3, 4, 5].map((value) => (
                    <React.Fragment key={value}>
                        <input
                            type="radio"
                            id={`radio-${value}-${title}`}
                            name={`rating-${title}`} // Todos compartilham o mesmo nome
                            value={value}
                            checked={selectedRating === value} // Apenas um pode ser selecionado
                            onChange={() => handleRatingChange(value)}
                            className="hidden peer" // Esconde o input
                        />
                        <label
                            htmlFor={`radio-${value}-${title}`}
                            className={`w-8 h-8 rounded-full border-2 border-black cursor-pointer
                peer-checked:bg-black peer-checked:border-black
                bg-white hover:bg-gray-200 transition`}
                        ></label>
                    </React.Fragment>
                ))}
            </div>

            {/* Label para "Muito Bom" */}
            <span className="font-bold text-sm text-gray-600">Muito Bom <br className='flex justify-center' /><span style={{ marginLeft: '25px' }}>(5)</span></span>
        </fieldset>
    );
};

export default Rating;
