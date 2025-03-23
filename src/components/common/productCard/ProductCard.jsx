import { Link } from "react-router";
import "./productCard.css";

export const ProductCard = ({ item }) => {
	return (
		<div className="itemCard">
			<img src={item.imageURL} alt="" />
			<h3 className="bandName">{item.band}</h3>
			<h3 className="albumName">{item.album}</h3>
			<h4 className="albumPrice">${item.price}</h4>
			<Link className="detailsButton" to={`/product/${item.id}`}>
				Ver detalles
			</Link>
		</div>
	);
};
