import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='min-h-screen flex items-center justify-center flex-col gap-8'>
    <SignIn/>
  </div>
}