//api/create-chat/
// method-post()

import { NextResponse } from "next/server";
import { loadPdfIntoPinecone } from "@/lib/pincecone/pineconeDb";

export async function POST(req: Request, res: NextResponse){
    try{
        const body = req.json();
        const {file_key, file_name}: any = body;
        // sending data as a single argument as an object
        await loadPdfIntoPinecone({file_key, file_name});
        
        return NextResponse.json({
            msg: "the data has been reached to pineconedb"   
        }, {status: 200})
    }catch(error){
        return NextResponse.json({
            msg: error   
        }, {status: 500})
    }
}