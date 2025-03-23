import "./removeCartButton.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { FaTrashCan } from "react-icons/fa6";
import { MdClear } from "react-icons/md";

export const RemoveCartButton = (props) => {
	const { removeFromCart } = useContext(CartContext);

	if (props.id) {
		return (
			<div>
				<button
					className="removeButton"
					onClick={() => removeFromCart(props.product.id)}
				>
					Eliminar <FaTrashCan />
				</button>
			</div>
		);
	} else {
		return (
			<div>
				<button
					className="xButton"
					onClick={() => removeFromCart(props.item.id)}
				>
					<MdClear />
				</button>
			</div>
		);
	}
};
