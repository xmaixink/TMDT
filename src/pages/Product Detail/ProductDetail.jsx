import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Import CSS vào component

const ProductDetail = () => {
  const { id } = useParams();  // Lấy id từ URL

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/get-all-product?id=${id}`);
        if (response.data.errCode === 0 && response.data.products.length > 0) {
          setProduct(response.data.products[0]);  // Lấy sản phẩm đầu tiên trong mảng products
        } else {
          setError(response.data.errMessage || 'Product not found');
        }
      } catch (err) {
        setError('Error fetching product detail');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p><strong>Ingredients:</strong> {product.ingredients ? product.ingredients.join(', ') : 'No ingredients available'}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
