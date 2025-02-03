import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import { products } from "../../../products";

export const ItemListContainer = ({ message }) => {
	return (
		<div>
			<h2 className="message">{message}</h2>
			<section className="cardContainer">
				<ProductCard
					album={products[0].album}
					band={products[0].band}
					year={products[0].year}
					price={products[0].price}
					category={products[0].category}
				/>
				<ProductCard
					album={products[1].album}
					band={products[1].band}
					year={products[1].year}
					price={products[1].price}
					category={products[1].category}
				/>
				<ProductCard
					album={products[2].album}
					band={products[2].band}
					year={products[2].year}
					price={products[2].price}
					category={products[2].category}
				/>
				<ProductCard
					album={products[3].album}
					band={products[3].band}
					year={products[3].year}
					price={products[3].price}
					category={products[3].category}
				/>
			</section>
		</div>
	);
};
