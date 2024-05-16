import { cardsData, cardsData2 } from "@/mocks/ArtigosCards";
import { useState } from "react";

export default function Card() {
  const [cards, setCards] = useState([...cardsData, ...cardsData2]);

  return (
    <>
      {/* Renderize os cards com base nos dados do array */}
      {cards.map((card) => (
        <div key={card.id} className='flex flex-col items-center mt-6 mb-6 w-2/6 ring-2 ring-[#FA023E] rounded-lg pr-2 p-6'>
          <div className='w-full'>
            <h3 className='text-[#FA023E] text-[21px] font-bold mb-2'>{card.title}</h3>
            <p className='mb-4 font-bold'>Status: <span className='font-normal'>{card.status}</span></p>
            <p className='font-bold'>Autores: <span className='font-normal'>{card.Autores}</span></p>
            {card.schedule && (
              <>
                <p className='font-bold'>Data de Envio: <span className='font-normal'>{card.schedule.DatadeEnvio}</span></p>
                {card.schedule.Apresentação && (
                  <p className='font-bold'>Apresentação: <span className='font-normal'>{card.schedule.Apresentação}</span></p>
                )}
              </>
            )}
            {card.sala && (
              <p className='font-bold'>Sala: <span className='font-normal'>{card.sala}</span></p>
            )}
          </div>

          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-row gap-2 ring-2 ring-black rounded-lg'>
              <button className='text-[#000000] text-[12px] p-1 ml-2 font-medium'>Ver evento</button>
              <img src='/assets/eye.svg' alt='Ver evento' />
            </div>

            <div className='flex flex-row gap-2 ring-2 ring-black rounded-lg'>
              <button className='text-[#000000] text-[12px] ml-2 font-medium'>Ver todas as edições</button>
              <img src='/assets/eye.svg' alt='Ver todas as edições' className="mr-5" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
