import React from 'react'

function CartItem(props) {
    return(
        <React.Fragment>
            <h6>{props.item.title}</h6>
            <span>{props.item.count}</span>
            <hr/>
        </React.Fragment>
    )
}

export default CartItem