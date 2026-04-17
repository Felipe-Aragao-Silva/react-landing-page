// Dados dos membros da equipe da landing page

export interface Membro {
  id: number;
  nome: string;
  cargo: string;
  descricao: string;
  cor:string 
}

export const equipe: Membro[] = [
    {   
        id: 1, 
        nome: "André Luiz", 
        cargo: "CEO & Fundador",  
        descricao: "Especialista em gestão educacional com 15 anos de experiência no setor técnico.",
        cor: '#DBE1FF'
    },  

    {   
        id: 2, 
        nome: "Carla Mendes", 
        cargo: "CTO", 
        descricao: "Engenheira de software focada em arquiteturas escaláveis e segurança de dados.",
        cor:'#DCE9FF'
    },  

    {   
        id: 3, 
        nome: "Paulo Neto", 
        cargo: "Head de Produto", 
        descricao: "Desingner UX apaixonado por criar interfaces que facilitam o dia a dia do professor.",
        cor:'#DCE9FF'
    },  

    {   
        id: 4, 
        nome: "Rita Costa", 
        cargo: "Sucesso do Cliente", 
        descricao: "Garante que cada escola parceira extraia o máximo potencial da nossa tecnologia.",
        cor:'#FFB59C'
    },  
]