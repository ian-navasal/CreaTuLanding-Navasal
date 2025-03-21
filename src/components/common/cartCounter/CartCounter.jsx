import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { FaTrashCan } from "react-icons/fa6";
import "./cartCounter.css";

export const CartCounter = (product) => {
	const { removeFromCart, increaseQuantity, decreaseQuantity } =
		useContext(CartContext);

	let itemQuantity = product.item.quantity;

	return (
		<div className="counterContainer">
			{itemQuantity === 1 ? (
				<button
					className="limitButton"
					onClick={() => decreaseQuantity(product.item)}
				>
					-
				</button>
			) : (
				<button
					className="itemButton"
					onClick={() => decreaseQuantity(product.item)}
				>
					-
				</button>
			)}
			<h2>{itemQuantity}</h2>
			{itemQuantity === product.item.stock ? (
				<button
					className="limitButton"
					onClick={() => increaseQuantity(product.item)}
				>
					+
				</button>
			) : (
				<button
					className="itemButton"
					onClick={() => increaseQuantity(product.item)}
				>
					+
				</button>
			)}
			<button
				className="removeButton"
				onClick={() => removeFromCart(product.item.id)}
			>
				<FaTrashCan />
			</button>
		</div>
	);
};
