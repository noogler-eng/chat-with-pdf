//api/create-chat/
// method-post()

import { NextResponse } from "next/server";
import { loadPdfIntoPinecone } from "@/lib/pincecone/pineconedb";

export async function POST(req: Request, res: NextResponse){
    try{
        const body = await req.json();
        const {file_key, file_name}: any = body;
        const pages = await loadPdfIntoPinecone({file_key, file_name});
        console.log('pages: ',pages);
        
        return NextResponse.json({
            msg: "the data has been reached to pineconedb"   
        }, {status: 200})
    }catch(error){
        return NextResponse.json({
            msg: error   
        }, {status: 500})
    }
}