'use client'
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react';
import { useRouter } from "next/navigation";
import Image from "next/image"
import { useUser } from '@clerk/clerk-react'
import Loader from "@/components/Loader";
import MyDropzone from "@/components/Upload";


export default function Home() {

  const navigate = useRouter();
  const { isSignedIn, user, isLoaded } = useUser()

  if(!isLoaded){
    return <div className="min-h-screen flex items-center justify-center">
      <Loader/>
    </div>
  }
 
  return <div className="min-h-screen flex items-center justify-center flex-col gap-10">
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-8xl">chat with my pdf</h1>
    </div>
    {isSignedIn ?  <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex gap-4">
        <Button onClick={()=>{
          navigate.push('/chat')
        }} className="bg-black text-white rounded-xl hover:text-black">go to chat!</Button>
        <Button onClick={()=>{
          navigate.push('/subscription')
        }} className="bg-black text-white rounded-xl hover:text-black">manage subscription</Button>
      </div>
      <p className="text-2xl">Hi, {user.fullName?.toString()}</p>
      <p className="w-8/12 text-center">
        <span className="underline">why us? </span> trusted by million of user, we are solving problem of reading documentation
        as with the help of this we can directly ask importat question or can ask outline!
      </p>
      <MyDropzone/>
      </div>: <div>
      <Button onClick={()=>{
        navigate.push('/sign-in')
      }} className="bg-black text-white rounded-xl hover:text-black"><LogOut/> login to get started</Button>
    </div>}
    <div>
      <Image src='' width={300} height={300} alt="alt"/>
    </div>
  </div>
}
