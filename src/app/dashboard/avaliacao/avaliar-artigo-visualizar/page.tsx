'use client';

import { useState } from 'react';

import { IoMdDownload } from 'react-icons/io';
import { MdStarBorder } from 'react-icons/md';

import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import NormalInput from '@/components/NormalInput';
import TextAreaInput from '@/components/TextAreaInput';
import Title from '@/components/Title';
import Rating from '@/components/Avaliations/Rating';
import Form from '@/components/Avaliations/Form';
export default function ViewArticlePage() {
    const [resumo, setResumo] = useState('');
    const [abstract, setAbstract] = useState('');
    const [areas, setAreas] = useState('');
    const [titulo, setTitulo] = useState('');
    const [knowlogyArea, setKnowlogyArea] = useState('');
    const [palavraChave, setPalavraChave] = useState('');
    const [keyword, setKeyword] = useState('');


    return (
        <div>
            <NavbarAuthenticated />
            <div className='container mx-auto flex flex-col mt-[210px] items-center'>
                <div className="w-3/5">
                    <Title
                        title="Avaliação do Artigo"
                        subtitle="Avaliação realizada pelo Gabriel Oliveira"
                        colorHex="#4B00E0"
                    />
                    <div data-message-author-role="user" data-message-id="aaa297db-ff8a-407e-8b32-636d76c946b6" dir="auto" className="min-h-8 text-message flex w-full flex-col items-end gap-2 whitespace-normal break-words [.text-message+&amp;]:mt-5">
                        <div className="flex w-full flex-col gap-1 empty:hidden items-center rtl:items-center px-16">
                            <div className="relative w-[90%] rounded-3xl px-5 py-2.5 bg-gray-300 dark:bg-token-main-surface-secondary">
                                <div className="whitespace-pre-wrap">
                                    Os exemplos e casos de uso mencionados no artigo são relevantes e ilustram de forma eficaz como a IoT está impactando positivamente a sociedade e impulsionando a inovação nos negócios. A argumentação é coerente e embasada, o que fortalece a validade das conclusões apresentadas.
                                    Em termos técnicos, a escrita do artigo é clara e acessível, tornando-o compreensível mesmo para leitores com conhecimento básico sobre o assunto. A estrutura do artigo é bem organizada, facilitando a leitura e a assimilação dos conteúdos abordados.</div><div className="absolute bottom-0 right-full top-0 -mr-3.5 hidden pr-5 pt-1 [.group\/conversation-turn:hover_&amp;]:block"><span className="" data-state="closed"><button aria-label="Editar mensagem" className="flex h-9 w-9 items-center justify-center rounded-full text-token-text-secondary transition hover:bg-token-main-surface-tertiary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 4.29291C15.0641 2.52167 17.9359 2.52167 19.7071 4.2929C21.4784 6.06414 21.4784 8.93588 19.7071 10.7071L18.7073 11.7069L11.6135 18.8007C10.8766 19.5376 9.92793 20.0258 8.89999 20.1971L4.16441 20.9864C3.84585 21.0395 3.52127 20.9355 3.29291 20.7071C3.06454 20.4788 2.96053 20.1542 3.01362 19.8356L3.80288 15.1C3.9742 14.0721 4.46243 13.1234 5.19932 12.3865L13.2929 4.29291ZM13 7.41422L6.61353 13.8007C6.1714 14.2428 5.87846 14.8121 5.77567 15.4288L5.21656 18.7835L8.57119 18.2244C9.18795 18.1216 9.75719 17.8286 10.1993 17.3865L16.5858 11L13 7.41422ZM18 9.5858L14.4142 6.00001L14.7071 5.70712C15.6973 4.71693 17.3027 4.71693 18.2929 5.70712C19.2831 6.69731 19.2831 8.30272 18.2929 9.29291L18 9.5858Z" fill="currentColor">
                                    </path>
                                    </svg>
                                    </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulário de avaliação de 1 a 5 */}
                    <Form />
                    <div className="mt-12 flex flex-col items-center">
                        <DefaultButton label="Voltar" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
