import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
	return (
		<div>
			<Navbar />
			<ItemListContainer message="Bienvenidos a la disqueria" />
			<Footer />
		</div>
	);
}

export default App;
