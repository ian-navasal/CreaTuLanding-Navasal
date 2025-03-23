import { useContext, useState } from "react";
import { toast } from "sonner";
import { CartContext } from "../../../context/CartContext";
import "./counter.css";

export const Counter = ({ item }) => {
	const { addToCart } = useContext(CartContext);
	const [counter, setCounter] = useState(1);

	const increaseCounter = () => {
		item.stock > counter && setCounter(counter + 1);
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
			<div className="counterCont">
				<button className="counterButtons" onClick={decreaseCounter}>
					-
				</button>
				<h2>{counter}</h2>
				<button className="counterButtons" onClick={increaseCounter}>
					+
				</button>
			</div>
			<div>
				<button className="addButton" onClick={onAdd}>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};
