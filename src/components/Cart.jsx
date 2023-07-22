import React, { } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { delCart, clearCart, incCart, decCart } from './redux/action';
import { useDispatch } from 'react-redux';



const Cart = () => {
    const state = useSelector(state => state.handleCart)

    const dispatch = useDispatch()

    const delProduct = (product) => {
        dispatch(delCart(product))
    }
    const clrProducts = () => {
        dispatch(clearCart())
    }



    const cartItems = (cartItem) => {

        return (
            <div className="container px-4 my-5" key={cartItem.id}>
                <div className="container p-4">
                    <button onClick={() => delProduct(cartItem)} className='btn-close float-end' aria-label='Close'></button>
                    <div className="row">
                        <div className="col-md-4 text-center mb-5" >
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px"/>
                        </div>
                        <div className="col-md-8">
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>
                                ${cartItem.qty * cartItem.price}
                            </p>
                            <div className="item-quantity">
                                <button className="qty-button" onClick={() => {
                                    if (cartItem.qty === 1) {
                                        delProduct(cartItem)
                                    } else {
                                        dispatch(decCart(cartItem))
                                    }
                                }}>-</button>
                                <div className="qty-number">
                                    <p>{cartItem.qty}</p>
                                </div>
                                <button className="qty-button" onClick={() =>
                                    dispatch(incCart(cartItem))
                                }>+</button>
                            </div>
                            <div>
                                <button className="btn btn-outline-dark cartbtn mt-2 " onClick={() => delProduct(cartItem)}> Remove From Cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }

    const renderEmptyCart = () => {
        return (
            <div className="cart-empty text-center mt-5 lead" >
                <p>Your cart is currently empty</p>
                <NavLink className="nav-link" to="/products">Start Shopping</NavLink>
            </div>
        );
    };
    
    var total = 0;
    const itemList = (item) => {
        total = total + item.price * item.qty;
    }

    return (
        <div className='cart'>
            {state.length === 0 && renderEmptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && 
            <div className="subtotal">
                {state.length !== 0 && state.map(itemList)}
                <div className="price text-end">
                    <span>Total USD</span> &nbsp;
                    <strong>${total.toFixed(2)}</strong>
                </div>
            </div>
            }
            {state.length !== 0 &&
                <div className="buttons">
                    <div className="container ">
                        <div className="row">
                            <div className="container text-center">
                                <NavLink className='btn btn-outline-dark cartbtn mb-3 ' to="/checkout">Proceed to Checkout</NavLink> &nbsp;
                                <button className='btn btn-outline-dark cartbtn mb-3' onClick={clrProducts}>Clear Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )

}

export default Cart;