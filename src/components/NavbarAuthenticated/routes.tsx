import { ReactElement } from "react";

type navItemType = {
	link: string;
	title: string;
	icon?: ReactElement;
};

export const navigationAuthenticatedRoutes: navItemType[] = [
	{
<<<<<<< Updated upstream
		link: "/",
		title: "Página Inicial",
=======
		link: '/eventos',
		title: 'Página Inicial',
>>>>>>> Stashed changes
	},
	{
		link: "/components-example",
		title: "Exemplo de uso dos componentes",
	},
	{
<<<<<<< Updated upstream
		link: "/dashboard/evento/criar-evento",
		title: "Criar Evento",
	},
	{
		link: "/dashboard/evento/criar-area",
		title: "Criar Áreas",
	},
	{
		link: "/dashboard/evento/criar-arquivos",
		title: "Criar Arquivos",
	},
	{
		link: "/dashboard/evento/meus-eventos",
		title: "Menu do Evento",
	},
	{
		link: "/dashboard/evento/eventos-criados",
		title: "Eventos Criados",
	},
	{
		link: "/dashboard/artigos/artigos-enviados",
		title: "Artigos Enviados",
	},
	{
		link: "/dashboard/artigos/artigos-finalizados",
		title: "Artigos Finalizados",
	},
	{
		link: "/dashboard/artigos/artigos-para-avaliar/principal",
		title: "Artigos para Avaliar",
	},
	{
		link: "/dashboard/artigos/artigos-para-avaliar/todos-arquivos",
		title: "Todos artigos - Avaliação",
	},
	{
		link: "/dashboard/artigos/menu-submissao",
		title: "Menu de Submissão",
	},
	{
		link: "/dashboard/artigos/submeter-artigo",
		title: "Submeter Artigo",
	},
	{
		link: "/dashboard/editar/editar-artigos",
		title: "Editar Artigo",
	},
	{
		link: "/dashboard/adicionar-palestrante",
		title: "Adicionar Palestrante",
	},
	{
		link: "/dashboard/avaliacao/avaliar-artigo",
		title: "Avaliar Artigo",
	},
	{
		link: "/dashboard/avaliacao/visualizar-artigo",
		title: "Visualizar Artigo ",
	},
	{
		link: "/dashboard/cadastrar-instituicao",
		title: "Cadastrar Instituição",
	},
	{
		link: "/dashboard/certificados",
		title: "Certificados",
=======
		link: '/dashboard/meus-arquivos',
		title: 'Meus Arquivos',
		subtitle: [
			{
				name: 'Arquivos Submetidos',
				link: '/dashboard/meus-arquivos',
			},
			{
				name: 'Arquivos Finalizados',
				link: '/dashboard/meus-arquivos/arquivos-finalizados',
			},
		],
	},

	{
		link: '/dashboard/avaliar-artigo',
		title: 'Avaliar Arquivo',
	},
	{
		link: '/dashboard/meus-eventos-criados',
		title: 'Meus Eventos Criados',
	},
	{
		link: '/dashboard/gerenciamento-avaliacoes',
		title: 'Gerenciamento de Avaliações',
		subtitle: [],
	},
	{
		link: '/dashboard/gerenciamento-site',
		title: 'Gerenciamento de Site',
		subtitle: [
			{
				name: 'Cadastrar Admin',
				link: '/dashboard/gerenciamento-site/cadastrar-admin',
			},
			{
				name: 'Cadastrar Instituição',
				link: '/dashboard/gerenciamento-site/cadastrar-instituicao',
			},
			{
				name: 'Cadastrar Comissão',
				link: '/dashboard/gerenciamento-site/cadastrar-comissao',
			},
			{
				name: 'Cadastrar Áreas',
				link: '/dashboard/gerenciamento-site/cadastrar-area',
			},
		],
	},
	{
		link: '/dashboard/certificados',
		title: 'Certificados',
>>>>>>> Stashed changes
	},
];
