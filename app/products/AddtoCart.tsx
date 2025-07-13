"use client"
import React from 'react'

const AddtoCart = () => {
  return (
    <div>
      <button className="btn bg-amber-50  p-6 m-4 rounded-2xl text-black" onClick={() => console.log("Product Added")}>Add to cart</button>
    </div>
  )
}

export default AddtoCart
