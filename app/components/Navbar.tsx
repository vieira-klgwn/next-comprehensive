import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' p-6 flex bg-transparent gap-4'>
      <Link href="/users">Users</Link>
      <Link href="/products">Products</Link>
    </div>
  )
}

export default Navbar
