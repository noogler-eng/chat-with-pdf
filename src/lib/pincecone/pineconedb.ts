import { Pinecone } from '@pinecone-database/pinecone';

export const pc = new Pinecone({ apiKey:  process.env.PINECONE_DB_API_KEY || ""});


export const loadPdfIntoPinecone = async({file_key, file_name}: {
    file_key: string,
    file_name: string
})=>{
    

}