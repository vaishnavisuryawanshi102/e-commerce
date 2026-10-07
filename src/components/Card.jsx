import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../theme/ThemeProvider'

const Card = ({ prod, dispatch }) => {

    const { theme } = useContext(ThemeContext)

    return (
        <div
            className={`card mb-2 ${
                theme === 'light'
                    ? 'text-bg-light'
                    : 'text-bg-secondary'
            }`}
            style={{ width: "18rem" }}
        >

            <img
                src={prod.thumbnail}
                className="card-img-top mt-1"
                alt={prod.title}
            />

            <div className="card-body">

                <div className="text-end">
                    <span
                        className={`badge ${
                            prod.availabilityStatus === "In Stock"
                                ? "text-bg-success"
                                : "text-bg-warning"
                        }`}
                    >
                        {prod.availabilityStatus}
                    </span>
                </div>

                <h5 className="card-title">
                    {prod.title}
                </h5>

                <p className="card-text">
                    {prod.description.slice(0, 55) + "..."}
                </p>

                <div>
                    {prod.tags?.map((t, i) => (
                        <span
                            key={i}
                            className="badge text-bg-warning me-1"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <p>
                    Price: $ {prod.price}
                </p>

                <button
                    className="btn btn-primary"
                    onClick={() =>
                        dispatch({
                            type: "AddToCart",
                            payload: {
                                prodID: prod.id,
                                title: prod.title,
                                price: prod.price,
                                discountPercentage:
                                    prod.discountPercentage
                            }
                        })
                    }
                >
                    Add To Cart
                </button>

                {" "}

                <Link to={`/product-details/${prod.id}`}>
                    More Info
                </Link>

            </div>
        </div>
    )
}

export default Card