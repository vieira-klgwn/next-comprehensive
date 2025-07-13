import React, { Suspense } from 'react'
import UsersTable from './components/UsersTable';
import Link from 'next/link';
import LoadingUI from '../components/LoadingUI';





interface Props{
    searchParams : {
        sortOrder: string;
    }
}

//You can only use Props for params and searchParamas in page.tsx files 

const UsersPage = async ({searchParams,}:{searchParams: Promise <{sortOrder : string}>}) => {
    const {sortOrder} = await searchParams;

    console.log(sortOrder)
    return(
        <>
            <button className='btn m-8'><Link href='/users/new'>Add new user</Link></button>


        <Suspense fallback={<LoadingUI/>}>
            <UsersTable sortOrder={sortOrder}/>
        </Suspense>
        
        </>

    
    )
  
}

export default UsersPage;
