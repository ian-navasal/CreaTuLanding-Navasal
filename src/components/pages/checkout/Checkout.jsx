import { useContext, useState } from "react";
import "./checkout.css";
import { Link } from "react-router";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";

export const Checkout = () => {
	const [userInfo, setUserInfo] = useState({
		nombre: "",
		apellido: "",
		email: "",
		telefono: "",
	});

	const { getTotalAmount, cart, emptyCart } = useContext(CartContext);

	const inputFunction = (e) => {
		const { name, value } = e.target;
		setUserInfo({ ...userInfo, [name]: value });
	};

	const [orderID, setOrderID] = useState(null);

	const formFunction = (e) => {
		e.preventDefault();
		const ordersCollection = collection(db, "orders");
		let total = getTotalAmount();
		let order = {
			customer: userInfo,
			items: cart,
			total,
		};

		let purchase = addDoc(ordersCollection, order);
		purchase.then((res) => {
			setOrderID(res.id);
			emptyCart();
		});

		let refCollection = collection(db, "products");
		order.items.forEach((e) => {
			let refDoc = doc(refCollection, e.id);
			updateDoc(refDoc, { stock: e.stock - e.quantity });
		});
	};

	return (
		<div>
			{orderID ? (
				<h2>
					¡Muchas gracias por tu compra! <br /> Tu numero de orden es {orderID}
				</h2>
			) : (
				<form onSubmit={formFunction}>
					<input
						type="text"
						placeholder="Nombre"
						name="nombre"
						onChange={inputFunction}
					/>
					<input
						type="text"
						placeholder="Apellido"
						name="apellido"
						onChange={inputFunction}
					/>
					<input
						type="text"
						placeholder="Email"
						name="email"
						onChange={inputFunction}
					/>
					<input
						type="text"
						placeholder="Telefono"
						name="telefono"
						onChange={inputFunction}
					/>
					<button>Enviar</button>
					<Link to={"/cart"}>Atrás</Link>
				</form>
			)}
		</div>
	);
};
