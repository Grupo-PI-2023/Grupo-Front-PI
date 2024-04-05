'use client';

import CadastroComissao from '../FormsComissao/cadastrar';
import CadastroConvidado from '../FormsConvidado/cadastrar';
import CadastroUser from '../FormsUser/cadastrar';
import * as S from './styles';

type TabbarProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
};

export default function Tabbar({
	currentOption,
	handleOptionClick,
}: TabbarProps) {
	const renderContent = () => {
		switch (currentOption) {
			case 'cadastrar-user':
				return <CadastroUser />;
			case 'cadastrar-convidado':
				return <CadastroConvidado />;
			case 'cadastrar-comissao':
				return <CadastroComissao.CadastroComissao />;
			case 'cadastrar-comissao-for-adm':
				return <CadastroComissao.CadastroComissaoForAdm />;
			default:
				return null;
		}
	};
	return (
		<div>
			<div className="fixed left-0 right-0 top-24 z-40 bg-[#F4F4F4] px-28 pb-5 pt-8 shadow">
				<div className="flex flex-wrap items-center justify-center gap-5">
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('cadastrar-user')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'cadastrar-user'}
						>
							Cadastrar Usuário Aluno
						</S.OptionMenu>
						<S.IconUser selected={currentOption === 'cadastrar-user'} />
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('cadastrar-convidado')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'cadastrar-convidado'}
						>
							Cadastrar Convidado
						</S.OptionMenu>
						<S.IconInvite selected={currentOption === 'cadastrar-convidado'} />
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('cadastrar-comissao')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'cadastrar-comissao'}
						>
							Cadastrar Comissão
						</S.OptionMenu>
						<S.IconComission
							selected={currentOption === 'cadastrar-comissao'}
						/>
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('cadastrar-comissao-for-adm')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'cadastrar-comissao-for-adm'}
						>
							Cadastrar Comissão Para Admin
						</S.OptionMenu>
						<S.IconComission
							selected={currentOption === 'cadastrar-comissao-for-adm'}
						/>
					</div>
				</div>
			</div>
			{renderContent()}
		</div>
	);
}
