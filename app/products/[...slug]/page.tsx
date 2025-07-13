import React from 'react'

interface Props{
    params: {
        slug: string[]
    }
}

const page =async ({params,}:{params: Promise <{slug: string[]}>}) => {
    const {slug} = await params;
  
   5
    return(
        <div>You're seeing a slug {slug[0]} and slug {slug[1]}</div>
    )
}

export default page
