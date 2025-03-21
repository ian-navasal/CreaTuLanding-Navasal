import { useContext, useState } from "react";
import { toast } from "sonner";
import { CartContext } from "../../../context/CartContext";

export const Counter = ({ item }) => {
	const { addToCart, cart } = useContext(CartContext);
	const [counter, setCounter] = useState(1);

	const increaseCounter = () => {
		if (cart.some((e) => e.id === item.id)) {
			let cartItem = cart.find((e) => e.id === item.id);
			item.stock > cartItem.quantity + counter
				? setCounter(counter + 1)
				: console.log("no se puede");
		} else {
			setCounter(counter + 1);
		}
	};

	const decreaseCounter = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

	const onAdd = () => {
		let prod = { ...item, quantity: counter };
		toast.success("Producto agregado al carrito");
		addToCart(prod);
		setCounter(1);
	};

	return (
		<div>
			<button onClick={decreaseCounter}>-</button>
			<h2>{counter}</h2>
			<button onClick={increaseCounter}>+</button>
			<div>
				<button onClick={onAdd}>Agregar al carrito</button>
			</div>
		</div>
	);
};
