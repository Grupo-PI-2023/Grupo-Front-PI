<<<<<<< HEAD
'use client';

import CadastroEditorChefe from './TabBarForms/Forms-EditorChefe';
import CadastroComissao from './TabBarForms/FormsComissao';
import CadastroConvidado from './TabBarForms/FormsConvidado';
import CadastroUser from './TabBarForms/FormsUser';
import * as S from './styles';
=======
"use client";

import CadastroEditorChefe from "./TabBarForms/Forms-EditorChefe";
import CadastroComissao from "./TabBarForms/FormsComissao";
import CadastroUser from "./TabBarForms/FormsUser";
import * as S from "./styles";
>>>>>>> b4ffeac51ad7cd2b4945553f2a8cafc6e7a83689

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
<<<<<<< HEAD
			case 'cadastrar-user':
				return <CadastroUser />;
			case 'cadastrar-convidado':
				return <CadastroConvidado />;
			case 'cadastrar-comissao':
				return <CadastroComissao />;
			case 'cadastrar-editorchefe':
=======
			case "cadastrar-user":
				return <CadastroUser />;
			case "cadastrar-comissao":
				return <CadastroComissao />;
			case "cadastrar-editorchefe":
>>>>>>> b4ffeac51ad7cd2b4945553f2a8cafc6e7a83689
				return <CadastroEditorChefe />;
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
<<<<<<< HEAD
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
=======
							onClick={() => handleOptionClick("cadastrar-user")}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === "cadastrar-user"}
						>
							Cadastrar Usuário Aluno
						</S.OptionMenu>
						<S.IconUser selected={currentOption === "cadastrar-user"} />
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick("cadastrar-comissao")}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === "cadastrar-comissao"}
>>>>>>> b4ffeac51ad7cd2b4945553f2a8cafc6e7a83689
						>
							Cadastrar Comissão
						</S.OptionMenu>
						<S.IconComission
<<<<<<< HEAD
							selected={currentOption === 'cadastrar-comissao'}
=======
							selected={currentOption === "cadastrar-comissao"}
>>>>>>> b4ffeac51ad7cd2b4945553f2a8cafc6e7a83689
						/>
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
<<<<<<< HEAD
							onClick={() => handleOptionClick('cadastrar-editorchefe')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'cadastrar-editorchefe'}
=======
							onClick={() => handleOptionClick("cadastrar-editorchefe")}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === "cadastrar-editorchefe"}
>>>>>>> b4ffeac51ad7cd2b4945553f2a8cafc6e7a83689
						>
							Cadastrar Editor Chefe
						</S.OptionMenu>
						<S.IconEditor
<<<<<<< HEAD
							selected={currentOption === 'cadastrar-editorchefe'}
=======
							selected={currentOption === "cadastrar-editorchefe"}
>>>>>>> b4ffeac51ad7cd2b4945553f2a8cafc6e7a83689
						/>
					</div>
				</div>
			</div>
			{renderContent()}
		</div>
	);
}
