export interface Postagem {
  id?: number;
  autora: string;
  conteudo: string;
  resumo: string;       
  categoria: string;
  dataPublicacao: string;
  emDestaque: boolean;
  curtidas: number;
}
