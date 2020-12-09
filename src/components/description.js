import React from 'react'
import { Link } from 'react-router-dom'

function Description(props) {

    function handleAddToCart(cart, item, updateCart){
        console.log(cart, item)
        let newCart = []
        if(cart.length > 0){
            newCart = cart.map(cartItem => {
            if(cartItem.id === item.id){
                return{ 
                    ...item,
                    count: cartItem.count +1
                }
            }return{...item}})  
        } else{
            newCart = [...cart, item]
        }
        console.log(newCart)
        updateCart(newCart)
    }


    

    return(
        <React.Fragment>
            <h3>{props.product.title}</h3>
            <img src={props.product.img} alt="" />
            <p>{props.product.info}</p>
            <Link to='/'>
                <button onClick={() => handleAddToCart(props.cart, props.product, props.updateCart)}>Add To Cart</button>
            </Link>
            <Link to='/'>
                <button>Back Home</button>
            </Link>
        </React.Fragment>
    )
}

export default Description