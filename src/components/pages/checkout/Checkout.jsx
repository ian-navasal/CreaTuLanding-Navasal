import { useContext, useState } from "react";
import "./checkout.css";
import { Link } from "react-router";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";

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

		if (Object.values(userInfo).some((e) => e === "")) {
			toast.error("Los campos son obligatorios");
		} else {
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
		}
	};

	return (
		<div className="checkoutCont">
			{orderID ? (
				<p className="orderSuccess">
					Hola {userInfo.nombre}, <br />
					¡Tu compra se ha realizado con éxito! <br /> Tu numero de orden es{" "}
					{orderID}
					<br /> Gracias por comprar en Disquería
				</p>
			) : (
				<form className="checkoutForm" onSubmit={formFunction}>
					<div>
						<p>Nombre</p>
						<input
							type="text"
							placeholder="Nombre"
							name="nombre"
							onChange={inputFunction}
						/>
					</div>
					<div>
						<p>Apellido</p>
						<input
							type="text"
							placeholder="Apellido"
							name="apellido"
							onChange={inputFunction}
						/>
					</div>
					<div>
						<p>Email</p>
						<input
							type="text"
							placeholder="Email"
							name="email"
							onChange={inputFunction}
						/>
					</div>
					<div>
						<p>Telefono</p>
						<input
							type="text"
							placeholder="Telefono"
							name="telefono"
							onChange={inputFunction}
						/>
					</div>
					<div className="formButtons">
						<button>Enviar</button>
						<Link to={"/cart"}>Atrás</Link>
					</div>
				</form>
			)}
		</div>
	);
};
