import React, { useEffect } from 'react'

const Category = () => {

    const getCategoryProducts = ()=>{
        let url = `https://my-json-server.typicode.com/MR-Gnani/React-LabelleBlanc/products/`
    }

    useEffect(()=>{
        getCategoryProducts()
    },[])

  return (
    <div>
      
    </div>
  )
}

export default Category
