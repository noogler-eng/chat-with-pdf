"use client";
 
import { UploadButton } from "@/utils/uploadthing";
 
export default function MyDropzone() {
  return (
    <main className="flex flex-col items-center justify-between p-4 rounded-xl bg-gray-100 w-8/12">
      <div className="p-12 bg-gray-200 w-full">
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
    </main>
  );
}