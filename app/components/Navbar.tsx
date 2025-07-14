"use client"
import Link from 'next/link'
import React from 'react'
import SignIn from './SignInButtonNextAuth'
import { useSession } from 'next-auth/react'
import LoadingUI from './LoadingUI'
import Image from 'next/image'

const Navbar = () => {
  const {status,data:session} = useSession();
  if (status==="loading") 
    return(<LoadingUI/>)

  return (
    <div className=' p-6 flex bg-transparent gap-4'>
      <Link href="/users">Users</Link>
      <Link href="/products">Products</Link>
      {status==='authenticated' && 
      <div className='flex gap-6'>
        <Link href='/api/auth/signout' className='btn btn-info' >Sign Out</Link>
        <Image className=' w-7 rounded-full' src={session.user?.image!} alt='user-avatar' width={100} height={100}/>
      </div>
      }
      {status==='unauthenticated' && <Link href='/api/auth/signin'>Log In</Link>}
      
    </div>
  )
}

export default Navbar
