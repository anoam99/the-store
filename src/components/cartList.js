import React from 'react'
import CartItem from './CartItem'


function CartList(props) {
    
    const cartList = props.cart.map(item =>( <CartItem key={item.id} item={item}/>))
    
    return(
        <div>
            {cartList}
        </div>
    )
}

export default CartList
