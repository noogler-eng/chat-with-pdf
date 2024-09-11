import { Pinecone } from '@pinecone-database/pinecone';
import downloadFileFromUpload from './getUpload';
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
export const getPinconeClinet = async()=>{
    if(!process.env.PINECONE_DB_API_KEY){
        throw new Error("unable to fetch env.");
    }

    const pc = new Pinecone({ apiKey: process.env.PINECONE_DB_API_KEY || "" });
    return pc;
}
 

export const loadPdfIntoPinecone = async({file_key, file_name}: {
    file_key: string,
    file_name: string
})=>{
    
    const fileName = await downloadFileFromUpload(file_key) || "";
    if(!fileName) throw new Error("unable to fetch filename");
    const loader = new PDFLoader(fileName);
    // getting the pages, reading buffer or metadata or pages within pdf
    const pages = await loader.load();  
    return pages;
}