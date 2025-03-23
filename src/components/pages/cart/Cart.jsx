import { useContext } from "react";
import "./cart.css";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router";
import { CartCounter } from "../../common/cartCounter/CartCounter";
import { RemoveCartButton } from "../../common/removeCartButton/RemoveCartButton";

export const Cart = () => {
	const { cart, getTotalAmount, emptyCart, getItemTotal } =
		useContext(CartContext);

	let total = getTotalAmount();

	if (cart.length === 0) {
		return (
			<div className="emptyCart">
				<h2>El carrito de compras está vacío</h2>
				<Link to={"/"}> Ver productos </Link>
			</div>
		);
	} else {
		return (
			<div>
				<div className="cartContainer">
					<div className="cartTop">
						<h2>Producto</h2>
						<h3>Cantidad</h3>
						<h3>Precio</h3>
						<h3>Subtotal</h3>
					</div>
					{cart.map((product) => {
						return (
							<div key={product.id} className="cartCard">
								<div className="cartItem">
									<img src={product.imageURL} alt="" />
									<h3>{product.band} </h3>
									<h3>{product.album}</h3>
								</div>
								<div className="cartPrice">
									<div className="counter">
										<CartCounter item={product} />
									</div>
									<h3>${product.price}</h3>
									<h3>${getItemTotal(product)}</h3>
								</div>
								<div>
									<RemoveCartButton item={product} />
								</div>
							</div>
						);
					})}
					<h3 className="cartTotal">Total: ${total}</h3>
					<div className="cartCheckout">
						<Link to={"/checkout"}>Finalizar compra</Link>
						<button onClick={emptyCart}>Vaciar carrito</button>
					</div>
				</div>
			</div>
		);
	}
};
