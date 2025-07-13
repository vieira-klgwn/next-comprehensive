import React from 'react'

interface Props{
    params: {
        id: number;
        photoId:number;
    }
}

const page = async ({params: {id,photoId}}: Props) => {

  return (
    <div>
      This is the id {id} and this is the photo id {photoId} !
      
      
    </div>
    //This can only work if the slug name of the folder has the same name as that of the  prop name in the interface
  )
}

export default page
