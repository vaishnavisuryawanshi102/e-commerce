import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Products from './Products'



const Dashboard = ({ loggedUser, setLoggedUser,dispatch }) => {
    const [products, setproducts] = useState([])
    const [categories, setCategories] = useState([])

    

    async function fetchData() {
        await fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setproducts(data.products))
            .catch(err => console.log(err))
            await fetchCategories()
    }
    
    useEffect( () => {
        fetchData()
    }, [])
    //console.log(products)


    function fetchCategories() {
       
        const cats =[...new Set(products.map((p) => {
            return p.category
        }))]
        setCategories(cats)
    }
     
    useEffect(() => {
        fetchCategories()
    }, [products])

    return (
        <>
            <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
            <HeroSection />
            <Products Products={products} categories={categories} dispatch={dispatch} />

            


            <Footer />
        </>
    )
}

export default Dashboard
