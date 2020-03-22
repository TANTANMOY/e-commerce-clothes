import React from 'react'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import {connect} from 'react-redux'
import './cart-dropdown.scss'


const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
            </div>
            <CustomButton>Go To CHECKOUT</CustomButton>
       
    </div>
)

const mapStateToPros = ({cart: {cartItems}}) => ({
    cartItems
})
export default connect(mapStateToPros)(CartDropDown)