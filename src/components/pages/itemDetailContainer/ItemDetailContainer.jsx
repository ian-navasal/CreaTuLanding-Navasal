import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./itemDetailContainer.css";
import { Counter } from "../../common/counter/Counter";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";
import { CartCounter } from "../../common/cartCounter/CartCounter";
import { RemoveCartButton } from "../../common/removeCartButton/RemoveCartButton";

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
			<div className="itemDescription">
				<h3 className="itemName">{item.band}</h3>
				<h3 className="itemAlbum">{item.album}</h3>
				<div className="yearFormat">
					<h4>Año: {item.year}</h4>
					<h4>Formato: {item.format}</h4>
				</div>
				<h4 className="itemPrice">$ {item.price}</h4>
				{cartItem ? (
					<div>
						<CartCounter item={cartItem} class={"removeButton"} />
						<RemoveCartButton product={item} id={id} />
					</div>
				) : (
					<Counter item={item} />
				)}
			</div>
		</div>
	);
};
