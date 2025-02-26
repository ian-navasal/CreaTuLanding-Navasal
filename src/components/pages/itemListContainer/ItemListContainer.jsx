import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import { products } from "../../../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const { cat } = useParams();

	useEffect(() => {
		const getProducts = new Promise((resolve, reject) => {
			if (cat) {
				resolve(products.filter(e => e.category.toLowerCase() === cat));
			} else if (cat === undefined) {
				resolve(products);
			} else {
				reject(console.log("ha ocurrido un error"));
			}
		});
		getProducts.then(res => setItems(res));
	}, [cat]);

	return (
		<div>
			<section className="cardContainer">
				{items.map(item => {
					return (
						<ProductCard
							key={item.id}
							album={item.album}
							band={item.band}
							year={item.year}
							price={item.price}
							category={item.category}
							imageURL={item.imageURL}
							id={item.id}
						/>
					);
				})}
			</section>
		</div>
	);
};
