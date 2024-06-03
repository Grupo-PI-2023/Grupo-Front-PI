import React from 'react';

const Formulario: React.FC = () => {
    // Informações pré-preenchidas
    const initialValues = {
        texto1: 'Este artigo tem como objetivo analisar as estratégias para o sucesso empresarial na era digital, destacando a importância da transformação digital como um meio fundamental para as organizações se adaptarem e prosperarem em um ambiente de negócios cada vez mais digitalizado.',
        texto2: 'This article aims to analyze strategies for business success in the digital age, highlighting the importance of digital transformation as a fundamental means for organizations to adapt and thrive in an increasingly digitized business environment.',
        texto3: 'A análise das estratégias para o sucesso empresarial na era digital é abrangente e embasada, fornecendo insights valiosos para os gestores e líderes que buscam se adaptar e aproveitar as oportunidades trazidas pela digitalização.',
        texto4: 'A pesquisa realizada é embasada e atualizada, permitindo uma compreensão aprofundada dos desafios e oportunidades que a transformação digital oferece. As palavras-chave selecionadas estão diretamente relacionadas ao assunto central do artigo, fornecendo uma visão clara do conteúdo abordado.',
        input1: 'Transformação Digital: Uma Análise das Estratégias para o Sucesso Empresarial na Era Digital',
        input2: 'Clara Santos, Gustavo Oliveira, Marina Almeida',
        input3: 'Clara Santos',
        input4: 'Estratégias, Sucesso Empresarial, Era Digital, Transformação Organizacional, Inovação Tecnológica, Mudança Digital',
        input5: 'Tecnologia',
        input6: 'Tecnologia,',
        input7: 'Tecnologia, Análise Estratégicas',
        input8: '13:30 até 14:30',
        input9: '03',

    };

    const handleVoltarClick = () => {
        // Implemente a lógica para voltar para a página anterior
    };

    return (
        <form className="bg-white w-[90%] p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1 grid grid-cols-1 gap-4 w-[200%]">
                    <div className=''>
                        <label htmlFor="texto1" className="block mb-2 font-medium">Avaliador:</label>
                        <select name="cars" id="cars" className='border-2 border-gray-100 p-2 rounded-xl w-full'>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>                    
                        </div>
                    <div className='w-full'>
                    <label htmlFor="input1" className="block mb-2 font-normal">Área:</label>
                        <input type="text" id="input1" name="input1" className="w-[100%] bg-[#C6C6C6] text-black w-full h-10 px-4 py-2 text-[14px] border border-[#828282] rounded-xl overflow-y-hidden" placeholder="Input 1" defaultValue={initialValues.input5} />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Formulario;