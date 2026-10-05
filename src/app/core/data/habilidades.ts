import { GrupoDeHabilidades } from '../models';

export const HABILIDADES: GrupoDeHabilidades[] = [
  {
    titulo: 'Back-end',
    itens: [
      'C#',
      '.NET e ASP.NET Core (MVC e Web API)',
      'Entity Framework Core',
      'ASP.NET Core Identity, JWT e MFA/TOTP',
      'MediatR e CQRS',
      'FluentResults e AutoMapper',
      'Python com Flask e SQLAlchemy',
    ],
  },
  {
    titulo: 'Front-end',
    itens: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5 e CSS3', 'Bootstrap 5'],
  },
  {
    titulo: 'Bancos de dados',
    itens: ['SQL Server', 'PostgreSQL', 'MySQL'],
  },
  {
    titulo: 'Arquitetura',
    itens: ['Clean Architecture', 'CQRS', 'Multi-tenancy', 'Processamento assíncrono com RabbitMQ'],
  },
  {
    titulo: 'Testes',
    itens: ['MSTest', 'Moq', 'Playwright', 'Testes de unidade, integração e E2E'],
  },
  {
    titulo: 'Infra e observabilidade',
    itens: ['Docker', 'GitHub Actions (CI/CD)', 'Azure', 'Serilog', 'New Relic'],
  },
];
