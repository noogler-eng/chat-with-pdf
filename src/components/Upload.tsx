"use client";
import { UploadDropzone } from "@/utils/uploadthing";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../hooks/use-toast";
import axios from "axios";
 
export default function MyDropzone() {

  // mutate is function call here
  const {mutate}= useMutation({
    mutationFn: async([file_key, file_name]:[file_key: string, file_name: string])=>{
      const response = await axios.post('/api/create-chat', {file_key, file_name})
      return response.data;
    }
  });
  const { toast } = useToast()


  return (
    <main className="flex flex-col items-center justify-between p-4 rounded-xl bg-gray-100 w-8/12">
      <div className="bg-gray-200 w-full">
        <UploadDropzone 
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            try{
              const name = res[0].name || "";
              const key = res[0].key || "";
              const data: any = [key, name];
              mutate(data, {
                onSuccess: (data)=>{
                  console.log("mutate is succesfull");
                  console.log(data);
                  toast({
                    title: "file has been uploaded",
                    description: new Date().toDateString(),
                  })
                },
                onError: (error)=>{
                  console.log(error);
                  console.log("mutate is unsuccesfull")
                  toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                  })
                }
              });
            }catch(error){
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
              })
            }
          }}
          onUploadError={(error: Error) => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            })
          }} className="p-8"/>
      </div>
    </main>
  );
}