'use client';

import { useState } from 'react';

import { BsHeart, BsStar } from 'react-icons/bs';

import CheckboxInput from '@/components/CheckboxInput';
import ClipInput from '@/components/ClipInput';
import DefaultButton from '@/components/DefaultButton';
import FileInput from '@/components/FileInput';
import FixedSelect from '@/components/FixedSelect';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NormalInput from '@/components/NormalInput';
import OutlineButton from '@/components/OutlineButton';
import Select from '@/components/Select';
import TextAreaInput from '@/components/TextAreaInput';
import Title from '@/components/Title';

export default function UseComponentsPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [check, setChecked] = useState(true);

	return (
		<div className="">
			<Navbar />
			<div className="container">
				<div className="w-[60vw]">
					<Title
						title="Título"
						colorHex="#5321BF"
						subtitle="Exemplos de uso dos componentes"
					/>
					<form className="form flex-col items-center bg-white">
						{/* <p>Possui todos os atributos de um input comum:</p> */}
						<NormalInput
							id="email"
							label="E-mail"
							placeholder="E-mail de Usuário"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<NormalInput
							id="password"
							label="Senha"
							placeholder="Senha de Usuário"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							hidden
						/>

						<TextAreaInput label="Text Area" id="textAreas" rows={7} />
						<FileInput id="file" label="File Input" disabled={false} />
						{}
						<CheckboxInput
							disabled={false}
							id="check"
							label="Check INput"
							isChecked={check}
							onChange={() => setChecked(check)}
						/>
						<ClipInput label="Clip INput" id="clip" />
						<FixedSelect
							id="fixedSelect"
							isDisabled={false}
							label="Fixed Select"
							options={[]}
						/>
						<Select
							disabled={false}
							id="select"
							label="Select Simples"
							options={[]}
							preSelect={0}
						/>

						{/* <p>Botao default com fundo colorido, tem todos os atributos de um botao tem a opcao de ter ou nao um icon:</p> */}
						<DefaultButton
							label="Preenchido"
							backgroundColorHex="#5321BF"
							type="submit"
						/>
						<DefaultButton
							label="Preenchido"
							backgroundColorHex="#ec4aef"
							icon={<BsHeart />}
							type="submit"
						/>
						{/* <p>Botao outline - fundo colorido - tem a opcao de ter ou nao um icon:</p> */}
						<OutlineButton
							label="Outline"
							outlineColorHex="#5321BF"
							textColorHex="#5321BF"
							type="submit"
						/>
						<OutlineButton
							label="Outline"
							outlineColorHex="#ec4aef"
							textColorHex="#5321BF"
							icon={<BsStar />}
							type="submit"
						/>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}
