import React, { useState, useEffect } from 'react';
import '../styles/Products.css'; // Import custom CSS file for styling

const Products = () => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.in/api/products/category?type=mobile');
        const data = await response.json();
        if (data.status === 'SUCCESS') {
          setProductDetails(data.products); 
          console.log(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); 
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {productDetails.map((product) => (
        <div key={product.id} className="card m-3" style={{ width: '18rem' }}>
          <img src={product.image} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text description">{product.description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
