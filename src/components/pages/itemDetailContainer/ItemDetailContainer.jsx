import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";
import "./itemDetailContainer.css";

export const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const getProduct = new Promise((resolve, reject) => {
			if (id) {
				resolve(products.find(e => e.id === id));
			} else {
				reject(console.log("hubo un problema"));
			}
		});
		getProduct.then(res => setItem(res));
	}, [id]);

	return (
		<div className="itemDetail">
			<img className="imgDetail" src={item.imageURL} alt="" />
			<div>
				<h2>{item.album}</h2>
				<h3>{item.band}</h3>
				<h4>Año: {item.year}</h4>
				<h4>{item.category}</h4>
				<h4>${item.price}</h4>
				<button>Agregar al carrito</button>
			</div>
		</div>
	);
};
