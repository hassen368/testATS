import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Outlet} from "react-router-dom";
import Table from 'react-bootstrap/Table';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response =>{ setProducts(response.data.data) ; console.log(response.data)});
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
  return (
      <div>
        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>productName </th>
            <th>Category</th>
            <th>price</th>
            <th>imageUrl</th>
            <th>review avg</th>
            <th>Details</th>
            </tr>
        </thead>

        {products.map(product => (
            <>   
            <tbody>
            <tr>
            <td>{product.productName }</td>
            <td>{product.category }</td>
            <td>{product.price }</td>
            <td><a href={product.imageUrl} target="_blank" rel="noreferrer" >image link</a></td>
            <td> 
                {product.reviews.map(
                    product => product.value)
                    .reduce((acc, value) => value + acc) / product.reviews.length}</td>
            <td>
            <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/products/${product._id}`}
                key={product._id}
            >
                Details
            </Link>
            </td>
                       

            </tr>
          </tbody>     
          </>
        ))}
        
      </Table>
      <Outlet />
    </div>
  );
}