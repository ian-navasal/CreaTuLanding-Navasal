import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./itemDetailContainer.css";
import { Counter } from "../../common/counter/Counter";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";
import { CartCounter } from "../../common/cartCounter/CartCounter";

export const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	const { id } = useParams();
	const { cart } = useContext(CartContext);

	useEffect(() => {
		let refCollection = collection(db, "products");
		let refDoc = doc(refCollection, id);

		const getProduct = getDoc(refDoc);
		getProduct
			.then((res) => {
				setItem({ id: res.id, ...res.data() });
			})
			.catch((error) => console.log(error));
	}, [id]);

	let cartItem = cart.find((e) => e.id === item.id);

	return (
		<div className="itemDetail">
			<img className="imgDetail" src={item.imageURL} alt="" />
			<div>
				<h2>{item.album}</h2>
				<h3>{item.band}</h3>
				<h4>Año: {item.year}</h4>
				<h4 className="cat">{item.category}</h4>
				<h4>${item.price}</h4>
				{cartItem ? (
					<CartCounter item={cartItem} total={false} />
				) : (
					<Counter item={item} />
				)}
			</div>
		</div>
	);
};
