import { createServer } from "@graphql-yoga/common";

const typeDefs = `
type Pessoa {
    id: ID!
    nome: String!
    idade: Int
    livros:[Livro!]!
}

type Livro {
    id: ID!
    titulo: String!
    edicao: Int!
    autor: Pessoa!
}

type Comentario {
    id: ID!
    texto: String!
    nota: Int!
}

type Query {
    livros:[Livro!]!
}
`;

const resolvers = {
    Query: {
        livros(){
            return livros;
        }
    },
    Livro: {
        autor(parent, args, ctx, info) {
            return pessoas.find((pessoa) => {
                return pessoa.id === parent.autor
            })
        }
    },
    Pessoa: {
        livros(parent, args, ctx, info) {
            return livros.filter((livro) => {
            return livro.autor === parent.id
            })
        }
    }
};

const pessoas = [{
    id: '1',
    nome: 'Cormen',
    idade: 19
    },
    {
    id: '2',
    nome: 'Velleman',
    idade: 22
    }
   ];

const livros = [{
    id: '100',
    titulo: 'Introduction to Algorithms',
    edicao: 3,
    autor:'1'
    },
    {
    id: '101',
    titulo: 'How to Prove it',
    edicao: 2,
    autor: '2'
    }
];
   

const server = createServer({
    schema: {
        typeDefs,
        resolvers
    }
});


server.start(()=>{
    'Servidor no ar...'
});