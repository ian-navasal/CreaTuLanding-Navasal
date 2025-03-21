import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		if (cart.some((e) => e.id === product.id)) {
			let newArray = cart.map((e) => {
				if (e.id === product.id) {
					return { ...e, quantity: e.quantity + product.quantity };
				} else {
					return e;
				}
			});
			setCart(newArray);
		} else {
			setCart([...cart, product]);
		}
	};

	const getTotalAmount = () => {
		let total = cart.reduce((acc, e) => {
			return acc + e.price * e.quantity;
		}, 0);
		return total;
	};

	const getTotalQuantity = () => {
		let total = cart.reduce((acc, e) => {
			return acc + e.quantity;
		}, 0);
		return total;
	};

	const removeFromCart = (id) => {
		let newCart = cart.filter((el) => el.id !== id);
		setCart(newCart);
	};

	const emptyCart = () => {
		setCart([]);
	};

	const increaseQuantity = (item) => {
		if (item.stock > item.quantity) {
			let newArray = cart.map((e) => {
				if (e.id === item.id) {
					return { ...e, quantity: item.quantity + 1 };
				} else {
					return e;
				}
			});
			setCart(newArray);
		}
	};

	const decreaseQuantity = (item) => {
		if (item.quantity > 1) {
			let newArray = cart.map((e) => {
				if (e.id === item.id) {
					return { ...e, quantity: item.quantity - 1 };
				} else {
					return e;
				}
			});
			setCart(newArray);
		}
	};

	const getItemTotal = (item) => {
		return item.price * item.quantity;
	};

	let data = {
		cart,
		addToCart,
		getTotalAmount,
		getTotalQuantity,
		removeFromCart,
		emptyCart,
		increaseQuantity,
		decreaseQuantity,
		getItemTotal,
	};

	return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};
