import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {
    return(
        <React.Fragment >
            <Link to='/description'>
                <div className="product-container" onClick={()=>{props.updateTempProduct(props.item)}}>
                <img src={props.item.img} alt="" />
                <h3>{props.item.title}</h3>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default Product