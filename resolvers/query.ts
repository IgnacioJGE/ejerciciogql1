import { Character } from "../types.ts"
import axios from "npm:axios"



export const Query={
    character: async (_:unknown, 
        args:{id:string}
    ):Promise<Character>=>{
        const url = 'https://rickandmortyapi.com/graphql';

        const query = `
        query ($idpj: ID!) {
          character(id: $idpj) {
            id
            name
            episode {
              id
              name
              episode
            }
          }
        }
        `;
        const personaje=await axios.post('https://rickandmortyapi.com/graphql', {
            query: query,
            variables: {idpj:args.id
          }})
          const personajemostrar= personaje.data.data.character

          return personajemostrar
          
    },
    charactersByIds: async (_:unknown, 
        args:{ids:string[]}
    ):Promise<Character[]>=>{
        const url = 'https://rickandmortyapi.com/graphql';

        const query = `
        query ($idpj: ID!) {
          character(id: $idpj) {
            id
            name
            episode {
              id
              name
              episode
            }
          }
        }
        `;
        const arraypersonajes:Character[]=[]
        for (let index = 0; index <args.ids.length; index++) {
            const personaje=await axios.post('https://rickandmortyapi.com/graphql', {
                query: query,
                variables: {idpj:args.ids.at(index)
              }})
              const personajemostrar= personaje.data.data.character
              arraypersonajes.push(personajemostrar)

        }


          return arraypersonajes
          
    },
}