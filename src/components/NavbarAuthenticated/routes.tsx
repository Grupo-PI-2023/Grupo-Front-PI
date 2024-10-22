import { ReactElement } from 'react';

type navItemType = {
	link: string;
	title: string;
	icon?: ReactElement;
};

export const navigationAuthenticatedRoutes: navItemType[] = [
	{
		link: '/',
		title: 'Página Inicial',
	},
	{
		link: '/components-example',
		title: 'Exemplo de uso dos componentes',
	},
	{
		link: '/dashboard/evento/criar-evento',
		title: 'Criar Evento',
	},
	{
		link: '/dashboard/evento/criar-area',
		title: 'Criar Áreas',
	},
	{
		link: '/dashboard/evento/criar-arquivos',
		title: 'Criar Arquivos',
	},
	{
		link: '/dashboard/evento/meus-eventos',
		title: 'Menu do Evento',
	},
	{
		link: '/dashboard/evento/eventos-criados',
		title: 'Eventos Criados',
	},
	{
		link: '/dashboard/evento/inscricao-evento',
		title: 'Inscrição no Evento',
	},
	{
		link: '/dashboard/evento/ver-evento',
		title: 'Vizualizar Evento',
	},
	{
		link: '/dashboard/artigos/artigos-enviados',
		title: 'Artigos Enviados',
	},
	{
		link: '/dashboard/artigos/artigos-finalizados',
		title: 'Artigos Finalizados',
	},
	{
		link: '/dashboard/artigos/artigos-para-avaliar/principal',
		title: 'Artigos para Avaliar',
	},
	{
		link: '/dashboard/artigos/artigos-para-avaliar/todos-arquivos',
		title: 'Todos artigos - Avaliação',
	},
	{
		link: '/dashboard/artigos/menu-submissao',
		title: 'Menu de Submissão',
	},
	{
		link: '/dashboard/artigos/submeter-artigo',
		title: 'Submeter Artigo',
	},
	{
		link: '/dashboard/editar/editar-artigos',
		title: 'Editar Artigo',
	},
	{
		link: '/dashboard/adicionar-palestrante',
		title: 'Adicionar Palestrante',
	},
	{
		link: '/dashboard/avaliacao/avaliar-artigo',
		title: 'Avaliar Artigo',
	},
	{
		link: '/dashboard/avaliacao/visualizar-artigo',
		title: 'Visualizar Artigo ',
	},
	{
		link: '/dashboard/cadastrar-instituicao',
		title: 'Cadastrar Instituição',
	},
	{
		link: '/dashboard/cadastrar-comissao-by-editor-chefe',
		title: 'Cadastrar Comissão como Editor Chefe',
	},
	{
		link: '/dashboard/cadastrar-comissao-by-admin',
		title: 'Cadastrar Comissão como Admin',
	},
	{
		link: '/dashboard/certificados',
		title: 'Certificados',
	},
];
