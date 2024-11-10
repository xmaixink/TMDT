import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProductService } from '../../services/productService';
import "./ProductPage.css";

const ProductPage = () => {

  const [fetchProductData, setFetchProductData] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getAllProductService("ALL")
        setFetchProductData(response.products)
      } catch (error) {
        console.log('fetch Product error', error)
      }
    }

    fetchProduct()

  })



  const breakfast = [
    {
      id: 1,
      name: "Bánh mì trứng ốp la",
      images:
        "https://i.pinimg.com/564x/29/cf/68/29cf688a1d866eef3552da8878a5b8b5.jpg",
      price: 20000,
      description: "Bánh mì giòn rụm, kèm trứng ốp la và rau sống tươi.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Phở bò",
      images:
        "https://i.pinimg.com/564x/94/35/5e/94355e10374da588596a3b6e0029fd86.jpg",
      price: 40000,
      description: "Phở bò truyền thống, nước dùng thơm ngon, bò tái mềm.",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Bánh cuốn",
      images:
        "https://i.pinimg.com/564x/a3/bb/c5/a3bbc555f74ccb8472facd31340740c9.jpg",
      price: 30000,
      description:
        "Bánh cuốn mỏng, nhân thịt thơm ngon, dùng kèm nước mắm chua ngọt.",
      rating: 4.2,
    },
    {
      id: 4,
      name: "Cháo lòng",
      images:
        "https://i.pinimg.com/564x/67/5d/97/675d979fd7100d81d20da9ebed8bbb42.jpg",
      price: 25000,
      description: "Cháo lòng ấm áp, thơm ngon, ăn kèm rau thơm và quẩy.",
      rating: 4.0,
    },
    {
      id: 5,
      name: "Bánh mì pate",
      images:
        "https://i.pinimg.com/564x/da/50/39/da5039c1c834bd8e0b95485a9e19a8ab.jpg",
      price: 22000,
      description: "Bánh mì pate thơm ngon, vị đậm đà.",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Xôi gà",
      images:
        "https://i.pinimg.com/736x/fa/8e/ad/fa8ead5440caa90154c92af7eeb45a7f.jpg",
      price: 30000,
      description: "Xôi dẻo, thịt gà mềm, kèm hành phi thơm lừng.",
      rating: 4.6,
    },
    {
      id: 7,
      name: "Bún riêu",
      images:
        "https://i.pinimg.com/736x/c7/75/3a/c7753a4b47c0bae15945d482f8875f5b.jpg",
      price: 35000,
      description: "Bún riêu đậm đà, nước lèo chua cay hấp dẫn.",
      rating: 4.7,
    },
    {
      id: 8,
      name: "Cháo sườn",
      images:
        "https://i.pinimg.com/736x/fe/4d/d0/fe4dd0224f8c248cdb424bf0fc9998cd.jpg",
      price: 28000,
      description: "Cháo sườn nóng hổi, vị ngọt từ sườn, dễ ăn.",
      rating: 4.4,
    },
  ];

  const lunch = [
    {
      id: 1,
      name: "Cơm gà xối mỡ",
      images:
        "https://i.pinimg.com/736x/26/77/2e/26772e2b7ec608e847b9fef808328bd4.jpg",
      price: 45000,
      description:
        "Cơm gà giòn rụm, ăn kèm dưa leo, cà chua và nước chấm đặc biệt.",
      rating: 4.7,
    },
    {
      id: 2,
      name: "Bún chả Hà Nội",
      images:
        "https://i.pinimg.com/736x/0e/60/6f/0e606f031c4729364a11142a4e69df5d.jpg",
      price: 50000,
      description:
        "Bún chả đặc sản Hà Nội, thịt nướng thơm phức, ăn kèm rau sống.",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Cá kho tộ",
      images:
        "https://i.pinimg.com/564x/b2/d4/da/b2d4dac491c98d1baccb57eaace6a937.jpg",
      price: 60000,
      description: "Cá kho thơm ngon, đậm vị, ăn cùng cơm nóng.",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Mì xào bò",
      images:
        "https://i.pinimg.com/736x/86/be/8c/86be8cb240eaf3fdb042d91940b9e461.jpg",
      price: 40000,
      description: "Mì xào bò mềm thơm, nhiều rau củ, đậm đà.",
      rating: 4.5,
    },
    {
      id: 5,
      name: "Bún bò Huế",
      images:
        "https://i.pinimg.com/736x/10/5b/4a/105b4a32a1f8beaa98f0050036c0b844.jpg",
      price: 50000,
      description: "Bún bò Huế cay nồng, nước lèo đậm đà, thịt bò mềm.",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Gà nướng cơm lam",
      images:
        "https://i.pinimg.com/736x/bb/bc/51/bbbc5138f0523010786d97c614387f8f.jpg",
      price: 75000,
      description: "Gà nướng thơm phức, ăn kèm cơm lam dẻo ngọt.",
      rating: 4.7,
    },
    {
      id: 7,
      name: "Bánh xèo",
      images:
        "https://i.pinimg.com/736x/9e/59/5d/9e595df6543706a9b433e326873944d9.jpg",
      price: 40000,
      description: "Bánh xèo giòn rụm, kèm rau sống và nước mắm chua ngọt.",
      rating: 4.4,
    },
    {
      id: 8,
      name: "Cơm tấm sườn bì chả",
      images:
        "https://i.pinimg.com/564x/bc/26/04/bc2604534e4442371ad1afdbf1b13638.jpg",
      price: 55000,
      description: "Cơm tấm thơm ngon, sườn nướng đậm đà, bì chả hấp dẫn.",
      rating: 4.9,
    },
  ];

  const dinner = [
    {
      id: 1,
      name: "Lẩu thái",
      images:
        "https://i.pinimg.com/564x/65/c7/b2/65c7b2f98000cc42d242ff0edb937deb.jpg",
      price: 150000,
      description: "Lẩu thái chua cay, nhiều loại hải sản và rau tươi.",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Bò lúc lắc",
      images:
        "https://i.pinimg.com/736x/49/56/31/49563141b050064379a2c98941b60ac4.jpg",
      price: 70000,
      description: "Bò lúc lắc mềm, đậm đà, dùng kèm khoai tây chiên.",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Gà nướng mật ong",
      images:
        "https://i.pinimg.com/736x/80/d9/d7/80d9d7d75cb085e0e0e64fc84666d2fb.jpg",
      price: 85000,
      description: "Gà nướng mật ong thơm phức, da giòn, thịt mềm.",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Cá hồi nướng",
      images:
        "https://i.pinimg.com/736x/70/71/21/70712143f31414af7ff84975a2e514b0.jpg",
      price: 120000,
      description: "Cá hồi nướng với sốt bơ tỏi, ăn kèm rau củ nướng.",
      rating: 4.9,
    },
  ];

  return (
    <div className="product-page">
      {fetchProductData && fetchProductData.length > 0 ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: 'black' }}>Sản Phẩm</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            padding: '20px',
            borderRadius: '8px'
          }}>
            {fetchProductData.map((item) => (
              <div key={item.id || item.name} style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '186px',
                    height: '248px',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }}
                />
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>{item.name}</h3>
                <p style={{ color: '#555', fontSize: '14px' }}>{item.description}</p>
                <p style={{ color: '#d9534f', fontSize: '16px', fontWeight: 'bold' }}>Price: {item.price}</p>
                <button style={{
                  backgroundColor: '#0275d8',
                  color: 'white',
                  padding: '8px 12px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}>
                  <Link
                    to={{
                      pathname: `/product/${item._id}`,
                      state: { product: item },
                    }}
                    className="product-link">
                    View Details
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>No products found.</p>
      )}

    </div>
  );
};

export default ProductPage;
