import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';


export default function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => setProducts(response.data.data)  );
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    let params = useParams();
    console.log(params.id);
    let product= products.find(p => p._id === params.id);
    if (product)        
        return (
            <>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <main style={{ padding: "1rem" }}>
                        <h2>{product.productName}</h2>
                        <img src={product.imageUrl} alt="product" style={{ width: '18rem' }} />
                        <p>Price : {product.price}</p>
                        <p>Description : {product.description}</p>
                        </main>
                    </div>
                    <div class="col-sm">
                    <h2>Reviews</h2>
                    {product.reviews.map(review => (
                    <ListGroup >
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                {review.content}
                            </div>
                            <Badge variant="info" pill>
                                {review.value}
                            </Badge>
                        </ListGroup.Item>
                    </ListGroup>))}
                    
                    </div>
                </div>
            </div>
            </>
            
        )
    else
            return(
                <p>No item found</p>
            )
}