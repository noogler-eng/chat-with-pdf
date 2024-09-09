'use client'
import { useUser, UserButton } from '@clerk/clerk-react'

export default function Navbar(){

    const { isSignedIn, user, isLoaded } = useUser()

    return <div className='flex items-center justify-end p-4'>
        <div>
            {isSignedIn ? <UserButton/> : null}
        </div>
    </div>
}