import {ApolloServer} from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone"
import { typeDefs} from "./schema/schema.ts"
import { Query } from "./resolvers/query.ts";



const server= new ApolloServer({
    typeDefs,
    resolvers:{
        Query
    },
});

const {url}= await startStandaloneServer(server,{listen:{port:4000,},});
console.log(`Server ready at localhost 3000`)