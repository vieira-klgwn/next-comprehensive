import { notFound } from 'next/navigation';
import React from 'react'


interface Props{
    params :{
      id : number;
    }
    
}

const page = ({params: {id} }: Props) => {
  if (id > 10) notFound();
  return (
    <div>
      This is the id  {id} !
    </div>
  )
}

export default page
