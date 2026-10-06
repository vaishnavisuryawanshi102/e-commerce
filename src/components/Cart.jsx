import React from 'react'

const Cart = ({ state, dispatch }) => {

    console.log("Cart State:", state)

    return (
        <>
            <div>
                <h2>Cart</h2>

                <h4>
                    Cart Items: {state.cartLength}
                </h4>

                {
                    state.cart.map((p, i) => (

                        <div key={i}>

                            <p>
                                {p.title}

                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "DecreaseQuantity",
                                            payload: {
                                                prodID: p.prodID
                                            }
                                        })
                                    }
                                >
                                    -
                                </button>

                                {" "}{p.quantity}{" "}

                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "IncreaseQuantity",
                                            payload: {
                                                prodID: p.prodID
                                            }
                                        })
                                    }
                                >
                                    +
                                </button>

                                {" "} ₹{p.price} {" "}

                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "RemoveFromCart",
                                            payload: {
                                                prodID: p.prodID
                                            }
                                        })
                                    }
                                >
                                    Remove from Cart
                                </button>

                            </p>

                        </div>
                    ))
                }

                <h3>
                    Total Price: ₹{state.totalAmount}
                </h3>

            </div>
        </>
    )
}

export default Cart