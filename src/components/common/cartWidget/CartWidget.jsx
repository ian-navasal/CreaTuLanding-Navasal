import { useContext } from "react";
import "./cartWidget.css";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
	const { getTotalQuantity } = useContext(CartContext);
	let total = getTotalQuantity();
	return (
		<div className="cart">
			<BsCart3 />
			<div className="cartNumber">{total}</div>
		</div>
	);
};
