import { useState } from "react";

export default function Card() {

    const cardsData = [
        {
          id: 1,
          title: 'Tech Talks: Descobrindo as Fronteiras da Tecnologia',
          description: 'Prepare-se para uma experiência musical única e emocionante! Estamos entusiasmados em anunciar o incrível Festival Melodias Vibrantes, um evento que celebrará a diversidade musical e encantará os amantes de todos os gêneros. Além das performances épicas, o CultureFest também contará com uma série de atividades emocionantes para enriquecer a experiência dos participantes. Teremos oficinas interativas com músicos experientes, onde você poderá aprender técnicas, explorar seu próprio talento musical e descobrir os segredos dos bastidores da indústria.',
          imageUrl: '/assets/teste.png',
          startDate: '10/07/2023',
          endDate: '10/12/2023',
          schedule: {
            morning: '7 as 12h',
            afternoon: '13 as 18h'
          },
          duration: '250h'
        },
        {
          id: 2,
          title: 'Tech Talks: Descobrindo as Fronteiras da Tecnologia',
          description: 'O amor Perfeito  tem como objetivo proporcionar um momento de reflexão, crescimento pessoal e inspiração, onde cada participante será convidado a explorar e fortalecer sua relação consigo mesmo. Estaremos juntos nessa jornada de autodescoberta, com atividades enriquecedoras, palestras inspiradoras e momentos de conexão com outras pessoas que também valorizam o amor-próprio.',
          imageUrl: '/assets/teste2 (2).png',
          startDate: '15/08/2023',
          endDate: '20/08/2023',
          schedule: {
            morning: '8 as 13h',
            afternoon: '14 as 17h'
          },
          duration: '100h'
        },

        {
            id: 3,
            title: 'Tech Talks: Descobrindo as Fronteiras da Tecnologia',
            description: 'O amor Perfeito  tem como objetivo proporcionar um momento de reflexão, crescimento pessoal e inspiração, onde cada participante será convidado a explorar e fortalecer sua relação consigo mesmo. Estaremos juntos nessa jornada de autodescoberta, com atividades enriquecedoras, palestras inspiradoras e momentos de conexão com outras pessoas que também valorizam o amor-próprio.',
            imageUrl: '/assets/teste3.png',
            startDate: '15/08/2023',
            endDate: '20/08/2023',
            schedule: {
              morning: '8 as 13h',
              afternoon: '14 as 17h'
            },
            duration: '100h'
          },
        // Adicione mais objetos de card conforme necessário
      ];

     const [cards, setCards] = useState(cardsData);

     return (
    <>
    
       {/* Renderize os cards com base nos dados do array */}
       {cards.map((card) => (
        <div key={card.id} className='flex flex-col justify-self-center items-center mt-6 mb-6 w-[1000px] h-[420px] ring-2 ring-[#FA023E] rounded-lg pr-2'>
          <div className='mt-6 grid grid-cols-7 w-[100%] h-[50%]'>
            <div className='ml-6 col-span-2'>
              <img src={card.imageUrl} alt='Imagem do evento' />
            </div>

            <div className='col-span-4 -ml-[70px]'>
              <h3 className='text-[#FA023E] text-[21px] font-bold mb-2'>{card.title}</h3>
              <div className='grid grid-cols-2'>
                <div>
                  <p className='mb-4 font-bold'>Data de Inicio: <span className='font-normal'>{card.startDate}</span></p>
                  <p className='font-bold'>Período e horário:</p>
                  <p className='font-bold'>Manhã: <span className='font-normal'>{card.schedule.morning}</span></p>
                  <p className='font-bold'>Tarde: <span className='font-normal'>{card.schedule.afternoon}</span></p>
                </div>
                <div>
                  <p className='mb-4 font-bold'>Data de Finalização: <span className='font-normal'>{card.endDate}</span></p>
                  <p className='font-bold'>Carga horária: <span className='font-normal'>{card.duration}</span></p>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-row gap-2 ring-2 ring-black rounded-lg mr-5'>
                <button className='text-[#000000] text-[12px] p-1 ml-2 font-medium'>Ver evento</button>
                <img src='/assets/eye.svg' alt='Ver evento' />
              </div>

              <div className='flex flex-row gap-2 ring-2 ring-black rounded-lg mr-5'>
                <button className='text-[#000000] text-[12px] ml-2 font-medium'>Ver todas as edições </button>
                <img src='/assets/eye.svg' alt='Ver todas as edições' className="mr-5"/>
              </div>
            </div>
          </div>

          <div className='w-full h-[50%] flex justify-items-stretch'>
            <h3 className='ml-8 justify-self-start font-bold'>Descrição: </h3>
            <p className='-ml-20 mt-8 justify-self-start mr-5 mb-6'>{card.description}</p>
          </div>
        </div>
      ))}
      </>
     )
}