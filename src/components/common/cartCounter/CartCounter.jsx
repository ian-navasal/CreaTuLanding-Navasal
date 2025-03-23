import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cartCounter.css";

export const CartCounter = (product) => {
	const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

	let itemQuantity = product.item.quantity;

	return (
		<div>
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
			</div>
		</div>
	);
};
