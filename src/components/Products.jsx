import React, { useEffect, useState } from 'react'
import Card from './card'


const Products = ({Products, categories, dispatch}) => {
    //console.log("categories")
    const[searchTitle, setSearchTitle] = useState('')
    const[filteredProducts, setFilterProducts] = useState(Products)
    const[category, setCategory] = useState('')

    function handleSearch(e){
        const v = e.target.value
        setSearchTitle(v)
        console.log(searchTitle)
        const fitProd=Products.filter((p)=>{
        const prodByTitle = p.title.toLowerCase().includes(v.toLowerCase())
        const prodByCat = category === '' || p.category == category
        return prodByTitle && prodByCat
    })
        setFilterProducts(fitProd)

    }


    function handleFilterCategory(e){
       const cat = e.target.value

       setCategory(cat)
       const fitProd=Products.filter((p)=>{
       const prodByTitle = p.title.toLowerCase().includes(searchTitle.toLowerCase())
       const prodByCat =  cat === '' || p.category == cat
       return prodByTitle && prodByCat
       })
       setFilterProducts(fitProd)
    }
    

    useEffect(()=>{
        console.log(searchTitle)
    },[searchTitle])

    useEffect(()=>{
        setFilterProducts(Products)
    },[Products])

    console.log(category)
  return (
    <>
        <div>
            <input type="text" value={searchTitle} onChange={(e)=>handleSearch(e)}/>
           
            <select name="" id="" onChange ={handleFilterCategory}>
                <option value="">Select Category</option>
                {categories.map((c,i)=><option key={i} value={c}>{c}</option>)}
            </select>
        </div>
        <div className="container">
            <div className="row">
                {filteredProducts.length > 0 ? <>
                
                
                {
                    filteredProducts.map((prod,i)=>(
                        <div key={i} className="col-12 col-md-6 col-lg-3">
                              
                           <Card prod={prod} dispatch={dispatch}/>
                        </div>

                    ))
                }
                </> : <p>No Product Found</p>}

            </div>
      </div>
    
     </>
    )
}

export default Products
