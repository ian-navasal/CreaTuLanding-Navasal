import "./productCard.css";

export const ProductCard = ({ album, band, year, category, price }) => {
	return (
		<div className="itemCard">
			<h3>{band}</h3>
			<h4>{album}</h4>
			<div className="cardYear">
				<h5>Año: {year}</h5>
				<h5>{category}</h5>
			</div>
			<h5>${price}</h5>
			<button>Comprar</button>
		</div>
	);
};
