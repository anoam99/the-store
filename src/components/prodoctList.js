import React from 'react'
import Product from './product'


function ProductList(props) {

    const ItemList = props.product.map(item => (<Product key={item.id} item={item} updateTempProduct={props.updateTempProduct}/>));


    return(
        <React.Fragment>
            <h3>Our Products</h3>
            {ItemList}
        </React.Fragment>
    )
}

export default ProductList