import "./cartWidget.css";
import { BsCart3 } from "react-icons/bs";

export const CartWidget = () => {
	return (
		<div className="cart">
			<BsCart3 />
			<div className="cartNumber">0</div>
		</div>
	);
};
