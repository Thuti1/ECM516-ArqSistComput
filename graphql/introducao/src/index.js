import { createServer } from "@graphql-yoga/node";

const typeDefs = `
type Livro {
    id: ID!
    titulo: String!
    genero: String!
    edicao: Int,
    preco: Float
},
 type Query {
    adicionar(numeros: [Float!]!): Float!
    notas: [Int!]!
    bemVindo(nome: String): String!
    effectiveJava:Livro!
 }
`;

const resolvers = {
    Query: {
        adicionar(parent, args, ctx, info) {
            return args.numeros.length === 0 ? 0 :
            args.numeros.reduce((ac, atual) => {
                return ac + atual;
            })
        },
        notas(parent,args, ctx, info) {
            return [10, 2, 7, 7, 8]
        },
        bemVindo(parent, args, ctx, info){
            return`Bem vindo ${args.nome ? args.nome: 'visitante'}`;
        },
        effectiveJava() {
            return {
                id: '123456',
                titulo: 'Effective Java',
                genero: 'Técnico',
                edicao: 3,
                preco: 43.9
            }
        }
        // id(){
        //     return "umachave";
        // },
        // location(){
        //     return "SP";
        // },
        // age() {
        //     return 22;
        // },
        // ofAge() {
        //     return true
        // },
        // salary() {
        //     return null; //corpo deve ficar vazio também
        // },
        // hello(){
        //     return "Minha primeira API GraphQL!";
        // },
        // name(){
        //     return "Um nome aqui";
        // },
    }
};

const server = createServer ({
    schema: {
        typeDefs,
        resolvers
    }
})

server.start(() => {
    'Servidor no ar...'
})