import { UTApi } from "uploadthing/server";
import axios from 'axios';
import fs from 'fs';

export const utapi = new UTApi({
    apiKey: process.env.UPLOADTHING_SECRET
});

export default async function downloadFileFromUpload(file_key: string){

    try{
        const fileDataUrl: any = await utapi.getFileUrls([file_key]);
        const response = await axios.get(fileDataUrl.data[0].url, { responseType: 'arraybuffer' });
        const fileData = Buffer.from(response.data, 'binary');
        if (!fs.existsSync("/temp/pdf")) {
            fs.mkdirSync("/temp/pdf", { recursive: true });
        }
        const fileName = `/temp/pdf/${Date.now()}.pdf`;
        await fs.writeFileSync(fileName, fileData);
        console.log('PDF file saved!');
        return fileName;
    }catch(error){
        console.log('pdf download error: ', error);
    }
}