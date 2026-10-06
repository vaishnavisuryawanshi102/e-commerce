import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";

const ProductDetails = () => {
  const [product, setProduct] = useState({})


  const { ProdID } = useParams()



  async function fetchData() {
    await fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        const pro = data.products.filter(p => p.id == ProdID)
        setProduct(pro[0])

      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log(product)







  return (
    <>
      <h3>{product?.title}</h3>
      <div className="container">
        <div className="row">
          {
            product?.reviews?.map((rev, i) => (
              <div className="col-12" key={i}>
                <div className="card">
                  <div className="card-body ">
                    <div>
                      {[1, 2, 3, 4, 5].map(s => (
                        <FaStar
                          key={s}
                          color={s <= rev.rating ? "gold" : "dark"}
                        />
                      ))}
                    </div>
                    <div className="card-title">

                      {rev.comment}
                    </div>
                    <span>{rev.reviewerName}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ProductDetails
