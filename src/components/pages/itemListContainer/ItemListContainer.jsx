import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	const { cat } = useParams();

	useEffect(() => {
		let refCollection = collection(db, "products");
		let filter = refCollection;

		if (cat) {
			filter = query(refCollection, where("category", "==", cat));
		}
		const getProducts = getDocs(filter);

		getProducts
			.then((res) => {
				let newArray = res.docs.map((e) => {
					return { id: e.id, ...e.data() };
				});
				setItems(newArray);
			})
			.catch((error) => console.log(error));
	}, [cat]);

	return (
		<div>
			<section className="cardContainer">
				{items.map((item) => {
					return <ProductCard key={item.id} item={item} />;
				})}
			</section>
		</div>
	);
};
