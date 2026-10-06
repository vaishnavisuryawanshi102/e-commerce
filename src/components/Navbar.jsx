import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Products from './Products'
import { ThemeContext } from '../theme/ThemeProvider'

const Dashboard = ({ loggedUser, setLoggedUser, dispatch }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const {theme} = useContext(ThemeContext)


  async function fetchData() {
    await fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.log(err))
      await fetchCategories()
  }

  useEffect(() => {
     fetchData()
  }, [])
  // console.log(products)



  function fetchCategories() {
    console.log(products)
    const cats = [...new Set(products.map((p) => {
      return p.category
    }))]
    setCategories(cats)
  }



  useEffect(()=>{
    fetchCategories()
  },[products])
  
  return (
    <section className={`${theme == 'light' ? 'bg-light' : 'bg-dark'}`}>
      <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <HeroSection />
      <Products products={products} categories={categories} dispatch={dispatch} />

      <Footer />
    </section>
  )
}

export default Dashboard