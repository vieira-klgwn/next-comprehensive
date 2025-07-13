import React from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';


interface User {
    id: number;
    name: string;
    email:string;
    

}
interface Props{
    sortOrder: string;
}

const UsersTable = async ({sortOrder}: Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: 'no-store' });
    const users: User[] = await res.json();
    
    const sortedUsers= sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name);
    
    
    return (

        <div>
            <Link href='/products' className='btn'>Go to products</Link>
            <h1 className='font-bold text-2xl p-6'>Users</h1>
            <table className='table table-zebra'>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th><a href="/users?sortOrder=name">Name</a></th>
                    <th><a href="/users?sortOrder=email">Email</a></th>
                </tr>
                </thead>
                <tbody>
                    {sortedUsers.map(sortedUser => <tr key={sortedUser.id}>
                    <td>{sortedUser.id}</td>
                    <td>{sortedUser.name}</td>
                    <td>{sortedUser.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable
