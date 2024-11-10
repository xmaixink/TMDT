import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/MainSection.css';

const MainSection = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/product');
  };

  return (
    <section className="main-section">
      <h2>FOOD E-CO</h2>
      <p>
        Thức ăn không chỉ là sự kết hợp của nguyên liệu mà còn là nghệ thuật và văn hóa. Những món ăn được bày biện tỉ mỉ, từ món khai vị nhẹ nhàng đến các món chính phong phú, mỗi món đều mang một hương vị riêng biệt.
      </p>
      <button onClick={handleOrderNow}>Order Now</button> 
    </section>
  );
};

export default MainSection;
