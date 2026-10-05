# Portfólio | Thiago de Lima Silva

Portfólio pessoal em Angular com Bootstrap (apenas reboot e grid). Todo o conteúdo fica em arquivos de dados, então atualizar o site não exige mexer nos componentes.

## Onde editar o conteúdo

| O que mudar | Arquivo |
| --- | --- |
| Nome, frases animadas, texto "Sobre mim", ficha, foto e redes | `src/app/core/data/perfil.ts` |
| Grupos de habilidades | `src/app/core/data/habilidades.ts` |
| Projetos (título, descrição, stack, destaque, link do repositório) | `src/app/core/data/projetos.ts` |
| Foto | `public/images/thiago.webp` |
| Cores e fontes | variáveis em `:root`, em `src/styles.scss` |

## Estrutura

```
src/app/
  core/
    models.ts            interfaces (Perfil, Projeto, GrupoDeHabilidades...)
    data/                conteúdo do portfólio
  components/
    topo/                navegação fixa
    hero/                nome, cargo, frases animadas e foto
    sobre/               texto e ficha
    habilidades/         grupos de tecnologias
    projetos/            lista de projetos
    contato/             redes e rodapé
```

## Comandos

```bash
npm install
npm start        # http://localhost:4200
npm run build    # saída em dist/portfolio
npm test
```

O Angular 22 exige Node.js 22.22.3 ou superior (ou 24.15+).
