import { useContext } from "react";
import "./cart.css";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router";
import { CartCounter } from "../../common/cartCounter/CartCounter";

export const Cart = () => {
	const { cart, getTotalAmount, emptyCart, getItemTotal } =
		useContext(CartContext);

	let total = getTotalAmount();

	if (cart.length === 0) {
		return <h2>El carrito de compras está vacío</h2>;
	} else {
		return (
			<div className="cartContainer">
				<h2>Producto</h2>
				<h2>Cantidad</h2>
				<h2>Precio</h2>
				<h2>Subtotal</h2>
				{cart.map((product) => {
					return (
						<div key={product.id} className="cartCard">
							<img src={product.imageURL} alt="" />
							<h3>{product.band}</h3>
							<h3>{product.album}</h3>
							<h3>${product.price}</h3>
							<CartCounter item={product} />
							<h3>${getItemTotal(product)}</h3>
						</div>
					);
				})}
				<h3>Total: ${total}</h3>
				<button onClick={emptyCart}>Vaciar carrito</button>
				<Link to={"/checkout"}>Finalizar compra</Link>
			</div>
		);
	}
};
