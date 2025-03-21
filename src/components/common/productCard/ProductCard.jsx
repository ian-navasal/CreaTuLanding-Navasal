import { Link } from "react-router";
import "./productCard.css";

export const ProductCard = ({ item }) => {
	return (
		<div className="itemCard">
			<img src={item.imageURL} alt="" />
			<h3>{item.band}</h3>
			<h4>{item.album}</h4>
			<div className="cardYear">
				<h5>Año: {item.year}</h5>
				<h5>{item.category}</h5>
			</div>
			<h5>${item.price}</h5>
			<Link to={`/product/${item.id}`}>Ver detalles</Link>
		</div>
	);
};
