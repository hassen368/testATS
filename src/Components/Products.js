import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Products(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => {setProducts(response.data) ; console.log("response.data")});
        
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    return (
        <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
            {/* We can add here the filter function to add the filtre fonctionality */}
        {products.map(product => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/products/${product._id}`}
            key={product._id}
          >
            {product.productName}
            <p>Average rating : {product.reviews.map(product => product.value).reduce((acc, value) => value + acc)/product.reviews.length}</p>
          </Link>
        ))}
        </nav>
      </div>
    );
}

export default Products;