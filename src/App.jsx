import { BrowserRouter, Routes, Route } from "react-router";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:cat" element={<ItemListContainer />} />
				<Route path="/product/:id" element={<ItemDetailContainer />} />
				<Route path="*" element={<h2>Error 404</h2>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
