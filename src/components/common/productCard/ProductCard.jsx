import { Link } from "react-router";
import "./productCard.css";

export const ProductCard = ({
	album,
	band,
	year,
	category,
	price,
	imageURL,
	id,
}) => {
	return (
		<div className="itemCard">
			<img src={imageURL} alt="" />
			<h3>{band}</h3>
			<h4>{album}</h4>
			<div className="cardYear">
				<h5>Año: {year}</h5>
				<h5>{category}</h5>
			</div>
			<h5>${price}</h5>
			<Link to={`/product/${id}`}>Ver detalles</Link>
		</div>
	);
};
