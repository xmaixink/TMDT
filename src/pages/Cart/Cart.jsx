import React, { useEffect, useState } from "react";
import { getAllCart } from "../../services/productService";
import "./Cart.css";
import { deleteCart, updateCart } from "../../services/cartService";
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from "../../components/Navbar";

const Cart = () => {
	const [cartItems, setCartItems] = useState([]);
	const [total, setTotal] = useState(0);
	const fetchCart = async () => {
		try {
			const response = await getAllCart();
			setCartItems(response.carts);
			const total = response.carts.reduce(
				(accumulator, cart) => accumulator + cart.priceProduct * cart.number,
				0
			);
			setTotal(total);
		} catch (error) {
			console.log("fetch cart error", error);
		}
	};
	useEffect(() => {
		fetchCart();
	}, []);

	async function handlePayment() {
		try {
			console.log('check ')
			const newPayment = {
				amount: total,
				bankCode: null,
				language: "vn"
			}

			const response = await axios.post("http://localhost:8080/api/v1/vnpay/create_payment_url", newPayment)

			if (response.status === 200 && response.data) {
				window.location.href = response.data
			}
		} catch (error) {
			console.log('check error', error.message)
		}
	}

	const handleDeleteCart = async (cart) => {
		try {
			const res = await deleteCart(cart._id);
			if (res.errCode === 0) {
				toast.success(res.message);
				fetchCart();
			}
		} catch (error) {
			toast.error("Có lỗi sảy ra");
		}
	};
	const handleUpdateQuantiy = async (cart, type) => {
		try {
			if ((cart.number > 1 && type === "esc") || type === "desc") {
				type === "desc"
					? (cart.number = cart.number + 1)
					: (cart.number = cart.number - 1);
				const res = await updateCart(cart);
				if (res.errCode === 0) {
					fetchCart();
				}
			} else handleDeleteCart(cart);
		} catch (error) {
			toast.error("Có lỗi sảy ra");
		}
	};
	return (
		<div className="cart-container">
			<Navbar />
			<div className="cart-wrapper">
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<h2 className="cart-title">Shopping Cart</h2>
					<button className="btn-black" onClick={() => window.history.back()}>
						🔙 Trở về
					</button>
				</div>
				<p className="cart-subtitle">
					This is your cart based on your item you want to buy..
				</p>

				<div className="cart-steps">
					<div className="step">
						<div className="step-wrrapper">
							<strong className="step-number active">1</strong> Cart
							<div className="line" />
						</div>
					</div>
					<div className="step">
						<div className="step-wrrapper">
							<strong className="step-number">2</strong> Customer Information
							<div className="line" />
						</div>
					</div>
					<div className="step">
						<div className="step-wrrapper">
							<strong className="step-number">3</strong> Shipping
							<div className="line" />
						</div>
					</div>
					<div className="step-wrrapper">
						<strong className="step-number">4</strong> Review
					</div>
				</div>

				<div className="cart-content">
					{cartItems.length === 0 ? (
						<p>Your shopping cart is empty!</p>
					) : (
						<div style={{ flex: 1 }}>
							<div className="cart-items">
								{cartItems.map((item, index) => (
									<div key={index} className="cart-item">
										<img
											src={item.imageProduct}
											alt={item.nameProduct}
											className="item-image"
										/>
										<div className="item-details">
											<h3 className="item-name">{item.nameProduct}</h3>
										</div>
										<p className="item-price">
											{Number(item.priceProduct) * Number(item.number)} $
										</p>
										<div className="item-quantity">
											<button
												className="quantity-btn"
												onClick={() => handleUpdateQuantiy(item, "esc")}
											>
												-
											</button>
											<span>{item.number}</span>
											<button
												className="quantity-btn"
												onClick={() => handleUpdateQuantiy(item, "desc")}
											>
												+
											</button>
										</div>
										<button
											className="delete-btn"
											onClick={() => handleDeleteCart(item)}
										>
											🗑️
										</button>
									</div>
								))}
							</div>
						</div>
					)}
					{cartItems.length ? (
						<div className="cart-summary">
							<div className="voucher">
								<p>Have a voucher?</p>
								<input
									type="text"
									placeholder="Enter voucher code"
									className="input"
								/>
								<button className="apply-btn">Apply</button>
							</div>
							<div className="order-summary">
								<h3>Order Summary</h3>
								<p>
									Price: <span>{total} $</span>
								</p>
								<p>
									Discount 0%: <span>- 0 $</span>
								</p>
								<p>
									Total Price: <span className="total-price">{total} $</span>
								</p>

								<button
									onClick={() => handlePayment()}
								>
									Thanh Toan
								</button>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);

};

export default Cart;
