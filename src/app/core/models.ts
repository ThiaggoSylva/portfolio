export interface Link {
  rotulo: string;
  url: string;
  usuario?: string;
}

export interface ItemDeFicha {
  rotulo: string;
  valor: string;
}

export interface Perfil {
  nome: string;
  cargo: string;
  frases: string[];
  resumo: string;
  sobre: string[];
  ficha: ItemDeFicha[];
  foto: { src: string; alt: string };
  links: Link[];
}

export interface GrupoDeHabilidades {
  titulo: string;
  itens: string[];
}

export interface Projeto {
  titulo: string;
  descricao: string;
  stack: string[];
  contexto?: string;
  destaque?: string;
  repositorio?: string;
}

export interface ItemDeNavegacao {
  id: string;
  rotulo: string;
}
