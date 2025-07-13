import React from 'react'
import AddtoCart from './AddtoCart'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <button className='btn btn-primary '>Daisy try it</button>
    <Link href='/users' className='btn'>Go to users</Link>
    <AddtoCart />
    
    </>
  )
}

export default page
