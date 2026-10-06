export const initialState = {
    cart: [],
    cartLength: 0,
    totalAmount: 0
}

export function cartReducer(state, action) {

    switch (action.type) {

        // ADD TO CART
        case "AddToCart": {

            console.log(action.payload)

            const isPresentIndex = state.cart.findIndex(
                (p) => p.prodID == action.payload.prodID
            )

            let updatedCart

            if (isPresentIndex === -1) {

                const prodWithQuantity = {
                    ...action.payload,
                    quantity: 1
                }

                console.log(prodWithQuantity)

                updatedCart = [
                    ...state.cart,
                    prodWithQuantity
                ]

                console.log(updatedCart)

            } else {

                updatedCart = state.cart.map((p, index) => {

                    if (index === isPresentIndex) {
                        return {
                            ...p,
                            quantity: p.quantity + 1
                        }
                    }

                    return p
                })
            }

            const totalAmount = updatedCart.reduce((ta, p) => {

                const discountedPrice =
                    p.price - ((p.price * p.discountPercentage) / 100)

                return ta + (discountedPrice * p.quantity)

            }, 0)

            return {
                ...state,
                cart: updatedCart,
                cartLength: updatedCart.length,
                totalAmount: totalAmount.toFixed(2)
            }
        }


        // REMOVE FROM CART
        case "RemoveFromCart": {

            const isPresentIndex1 = state.cart.findIndex(
                (p) => p.prodID == action.payload.prodID
            )

            if (isPresentIndex1 !== -1) {

                const updatedCart = state.cart.filter(
                    (p) => p.prodID != action.payload.prodID
                )

                const totalAmount = updatedCart.reduce((ta, p) => {

                    const discountedPrice =
                        p.price - ((p.price * p.discountPercentage) / 100)

                    return ta + (discountedPrice * p.quantity)

                }, 0)

                return {
                    ...state,
                    cart: updatedCart,
                    cartLength: updatedCart.length,
                    totalAmount: totalAmount.toFixed(2)
                }
            }

            return state
        }


        // DECREASE QUANTITY
        case "DecreaseQuantity": {

            const isPresentIndex2 = state.cart.findIndex(
                (p) => p.prodID == action.payload.prodID
            )

            if (isPresentIndex2 === -1) {
                return state
            }

            if (state.cart[isPresentIndex2].quantity === 1) {

                const updatedCart = state.cart.filter(
                    (p) => p.prodID != action.payload.prodID
                )

                const totalAmount = updatedCart.reduce((ta, p) => {

                    const discountedPrice =
                        p.price - ((p.price * p.discountPercentage) / 100)

                    return ta + (discountedPrice * p.quantity)

                }, 0)

                return {
                    ...state,
                    cart: updatedCart,
                    cartLength: updatedCart.length,
                    totalAmount: totalAmount.toFixed(2)
                }

            } else {

                const updatedCart = state.cart.map((p, index) => {

                    if (index === isPresentIndex2) {
                        return {
                            ...p,
                            quantity: p.quantity - 1
                        }
                    }

                    return p
                })

                const totalAmount = updatedCart.reduce((ta, p) => {

                    const discountedPrice =
                        p.price - ((p.price * p.discountPercentage) / 100)

                    return ta + (discountedPrice * p.quantity)

                }, 0)

                return {
                    ...state,
                    cart: updatedCart,
                    cartLength: updatedCart.length,
                    totalAmount: totalAmount.toFixed(2)
                }
            }
        }


        // INCREASE QUANTITY
        case "IncreaseQuantity": {

            const isPresentIndex4 = state.cart.findIndex(
                (p) => p.prodID == action.payload.prodID
            )

            if (isPresentIndex4 === -1) {
                return state
            }

            const updatedCart = state.cart.map((p, index) => {

                if (index === isPresentIndex4) {
                    return {
                        ...p,
                        quantity: p.quantity + 1
                    }
                }

                return p
            })

            const totalAmount = updatedCart.reduce((ta, p) => {

                const discountedPrice =
                    p.price - ((p.price * p.discountPercentage) / 100)

                return ta + (discountedPrice * p.quantity)

            }, 0)

            return {
                ...state,
                cart: updatedCart,
                cartLength: updatedCart.length,
                totalAmount: totalAmount.toFixed(2)
            }
        }


        default:
            return state
    }
}