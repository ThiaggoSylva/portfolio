import { Projeto } from '../models';

const ACADEMIA = 'Curso Fullstack, Academia do Programador 2026';

export const PROJETOS: Projeto[] = [
  {
    titulo: 'Escola de Cursos',
    descricao:
      'Sistema de gestão de uma escola: categorias, cursos, aulas, instrutores, alunos, turmas e matrículas, com login protegido por autenticação em dois fatores.',
    stack: [
      '.NET 10',
      'ASP.NET Core MVC',
      'EF Core',
      'SQL Server',
      'Identity com MFA/TOTP',
      'FluentResults',
      'Serilog e New Relic',
      'Bootstrap 5',
      'GitHub Actions',
      'Azure',
    ],
    contexto: ACADEMIA,
    repositorio: 'https://github.com/ThiaggoSylva/escola-de-cursos',
  },
  {
    titulo: 'e-Agenda',
    descricao:
      'Agenda pessoal com contatos, compromissos, categorias, despesas e tarefas, em Clean Architecture e com pipeline de CI/CD.',
    stack: ['ASP.NET Core MVC', 'Clean Architecture', 'Playwright', 'GitHub Actions'],
    destaque: '184 testes passando entre unidade, integração e E2E',
    contexto: ACADEMIA,
    repositorio: 'https://github.com/ThiaggoSylva/e-agenda-web-2026-10',
  },
  {
    titulo: 'Gerador de Provas',
    descricao:
      'Montagem de provas escolares a partir de disciplinas, matérias e questões, com exportação em PDF e listas dependentes carregadas via AJAX.',
    stack: ['Clean Architecture', 'QuestPDF', 'FluentResults', 'AutoMapper'],
    destaque: '49 testes de controller',
    contexto: ACADEMIA,
    repositorio: 'https://github.com/ThiaggoSylva/gerador-de-provas-2026',
  },
  {
    titulo: 'Gerador de Certificados',
    descricao:
      'API que gera um certificado em PDF para cada aluno de um curso e entrega tudo em um ZIP. O processamento é assíncrono: a API responde na hora e o cliente acompanha o status.',
    stack: [
      'Clean Architecture',
      'CQRS com MediatR',
      'EF Core e SQL Server',
      'QuestPDF',
      'MassTransit e RabbitMQ',
      'JWT',
      'Docker Compose',
    ],
    repositorio: 'https://github.com/GuardioesCodigo/GeradorDeCertificados',
  },
  {
    titulo: 'Delivery App',
    descricao:
      'API REST para clientes, estabelecimentos e cardápios de uma plataforma de pedidos e entregas, com endereços de entrega e bloqueio de conta após tentativas inválidas.',
    stack: ['.NET 10', 'ASP.NET Core Identity', 'JWT', 'PostgreSQL', 'Clean Architecture'],
    contexto: ACADEMIA,
    repositorio: 'https://github.com/ThiaggoSylva/delivery-app-2026',
  },
  {
    titulo: 'Controle de Bar',
    descricao:
      'Sistema de gestão de bar e restaurante multi-tenant, com isolamento dos dados de cada estabelecimento.',
    stack: ['ASP.NET Core', 'Clean Architecture', 'Multi-tenancy com Provider'],
    destaque: '99 testes passando',
  },
  {
    titulo: 'DIO Bank API',
    descricao:
      'API de usuários e posts com autenticação JWT, organizada em Blueprints e camadas de controllers, models e views.',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'JWT'],
    repositorio: 'https://github.com/ThiaggoSylva/Desenvolvimento_APIs_Com_Flask',
  },
];
