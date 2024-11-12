import React from 'react'
import Catalog from '../components/Catalog';

export const Shop = (props) => {
    const { products } = props;
    return (
        <Catalog 
            products={products.flat()}
        >
            <h2>moi pokupki</h2>
        </Catalog>
    )
}
