import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import Navbar from "../../components/Navbar";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/get-all-product?id=${id}`);
        if (response.data.errCode === 0) {
          console.log('check response', response.data.products.name)
          setProduct(response.data.products);
        } else {
          setError(response.data.errMessage || 'khong co sp');
        }
      } catch (err) {
        setError('Error fetching product detail');
        console.error('API loi roir:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  });

  return (
    <>
      <Navbar />
      <div className="product-detail">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p><strong>Ingredients:</strong> {product.ingredients ? product.ingredients.join(', ') : 'khong kha dung'}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </>
  );
};


export default ProductDetail;
