import { Perfil } from '../models';

export const PERFIL: Perfil = {
  nome: 'Thiago de Lima Silva',
  cargo: 'Programador Fullstack',
  frases: [
    'C# / .NET Developer',
    'Fullstack | React + Angular',
    'Clean Code & Boas Práticas',
    'Sempre aprendendo algo novo',
  ],
  resumo:
    'Construo sistemas do back-end ao front-end, unindo lógica sólida em C#/.NET com interfaces funcionais em React e Angular.',
  sobre: [
    'Trabalho construindo sistemas do backend ao frontend, unindo lógica sólida em C#/.NET com interfaces funcionais em React e Angular.',
    'Gosto de organizar código de forma limpa e de aprender ferramentas novas no processo. Meus projetos seguem Clean Architecture e têm testes automatizados, pipeline de CI/CD e observabilidade.',
  ],
  ficha: [
    { rotulo: 'Formação', valor: 'Tecnólogo em Análise e Desenvolvimento de Sistemas, Unigrande' },
    { rotulo: 'Curso', valor: 'Fullstack, Academia do Programador 2026' },
    { rotulo: 'Foco', valor: 'Back-end em .NET, APIs REST e interfaces modernas' },
    { rotulo: 'Fora do código', valor: 'Design e fotografia' },
    { rotulo: 'Idiomas', valor: 'Português e inglês intermediário (B1)' },
    { rotulo: 'Localização', valor: 'Ceará, Brasil' },
  ],
  foto: {
    src: 'images/thiago.webp',
    alt: 'Retrato de Thiago de Lima Silva',
  },
  links: [
    { rotulo: 'GitHub', usuario: 'ThiaggoSylva', url: 'https://github.com/ThiaggoSylva' },
    { rotulo: 'GitHub', usuario: 'GuardioesCodigo', url: 'https://github.com/GuardioesCodigo' },
    { rotulo: 'LinkedIn', usuario: 'thiaggo-sylva', url: 'https://www.linkedin.com/in/thiaggo-sylva' },
    { rotulo: 'Instagram', usuario: 'thiaggo.l_sylva', url: 'https://www.instagram.com/thiaggo.l_sylva' },
  ],
};
