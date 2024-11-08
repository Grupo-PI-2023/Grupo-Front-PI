'use client';

import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { BsStar } from 'react-icons/bs';

import { login } from '@/_actions/login';
import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NormalInput from '@/components/NormalInput';
import { showToast } from '@/contexts/ToastProvider';

export default function LoginPage() {
	const router = useRouter();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const result = await login(formData);
		if (result.success) {
			showToast('success', result.message);
			localStorage.setItem('authenticated', 'true');
			switch (result.role[0]) {
				case 'Admin':
					router.push('/eventos');
				case 'Editor':
					router.push('/eventos');
				case 'Avaliador':
					router.push('/eventos');
				case 'Autor':
					router.push('/eventos');
				default:
					router.push('/eventos');
			}
		} else {
			showToast('error', result.message);
		}
	};

	return (
		<div className="flex h-screen flex-col justify-items-center ">
			<Navbar />
			<div className="container">
				<div className="w-[60vw]">
					<form
						className="form flex flex-col items-center bg-white px-5 shadow-md"
						onSubmit={handleSubmit}
					>
						<h1
							className="text-center text-2xl font-bold text-black"
							style={{ color: '#5321BF' }}
						>
							Login
						</h1>
						<NormalInput
							id="email"
							name="email"
							label="E-mail"
							placeholder="E-mail de Usuário"
						/>
						<NormalInput
							id="password"
							name="senha"
							label="Senha"
							type="password"
							placeholder="Senha de Usuário"
						/>
						<div className="mb-6">
							<p className="text-center text-xs font-normal text-slate-400">
								Não possui cadastro？
								<a
									className="cursor-pointer font-bold text-[#4B00E0] underline"
									href="/eventos"
								>
									Cadastrar aqui
								</a>
							</p>
						</div>

						<DefaultButton
							label="Avançar"
							backgroundColorHex="#5321BF"
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
