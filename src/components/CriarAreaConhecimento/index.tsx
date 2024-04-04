'use client';

import { useEffect, useState } from 'react';


export default function CriarArea() {

	const [tableData, setTableData] = useState<string[]>([]);

	const handleAddOnTable = () => {
	const newRow = ``;
    setTableData([...tableData, newRow]);
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
		const newData = [...tableData];
		newData[index] = e.target.value;
		setTableData(newData);
	  };

	  //Função nao funciona
	const handleRemoveArea = (
		index: number,
		setTableData: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		setTableData((prevAreas) => prevAreas.filter((_, i) => i !== index));
	};

	return (
		<div className="container mb-12 mt-52 flex flex-col items-center">
			<div className="w-1/2">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}>
					Criar Áreas de Conhecimento
				</h1>
				<h2
				className="text-center text-black">
				Crie todas as áreas de conhecimento que serão possíveis categorizar os arquivos durante o evento
				</h2>
			</div>

			<table className="mt-12 w-3/5" id="table-areaConhecimento">
				<thead style={{ backgroundColor: '#E4E4E4' }}>
					<tr className="h-14">
						<th className="text-start ps-16" scope="col">Tipo</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td className='w-full h-16'>
						<button className='fixed p-2' 
						>
							<img src="/remove-ellipse.svg" alt="remove" /></button>
						<input
							className=" w-11/12 h-8 rounded-lg	border-black border-2 bg-white text-sm outline-none ms-12 mr-20 ps-4"
							type="text"
							name="area"
							placeholder="Digite a área de conhecimento"
							/>
							
						</td>
					</tr>

					{tableData.map((rowData, index) => (
            		<tr key={index}
					style={{
						backgroundColor: !(index % 2 === 0) ? '#fff' : '#E4E4E4',
					}}
					className="h-14"
					>
              		<td className='w-full h-16'>
					  <button className='fixed p-2' onChange={() => handleRemoveArea(index, setTableData)}><img src="/remove-ellipse.svg" alt="remove" /></button>
                	<input
					className=" w-11/12 h-8 rounded-lg	border-black border-2 text-sm outline-none ms-12 mr-20 ps-4"
					style={{
						backgroundColor: !(index % 2 === 0) ? '#fff' : '#E4E4E4',
					}}
					name="area"
                  	type="text"
					placeholder="Digite a área de conhecimento"
                  	value={rowData}
                  	onChange={(e) => handleInputChange(e, index)}
                	/>
              		</td>
            		</tr>
          			))}
					
					<tr>
						<td scope='row' 
						className='w-full h-16'
						style={{
						backgroundColor: '#C6C6C6'}}>
						<button type="button"
						className='p-2 mr-6	'
						onClick={handleAddOnTable}>
							<img src="/add.svg" alt="add" />
						</button>
						Adicionar mais áreas </td>
					</tr>
					
				</tbody>
			</table>

			<div className="mt-20 flex items-center justify-center gap-6">
				<button
					className="w-56
                    rounded-xl border-none p-2 text-center text-base font-medium text-white"
					style={{ backgroundColor: '#8A8A8A' }}
					type="submit"
				>
					Voltar
				</button>
				<button
					className="w-56
                    rounded-xl border-none p-2 text-center text-base font-medium text-white"
					style={{ backgroundColor: '#EF0037' }}
					type="button"
				>
					Salvar
				</button>
			</div>
		</div>
	);
}
