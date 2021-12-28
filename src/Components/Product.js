import React from 'react';
import { useParams } from "react-router-dom";

function Product(props) {
    let params = useParams();
    return (
        <div>
            Product {params.id} detailed description
        </div>
    );
}

export default Product;