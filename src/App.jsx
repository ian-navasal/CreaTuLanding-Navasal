import { BrowserRouter, Routes, Route } from "react-router";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/pages/cart/Cart";
import { Checkout } from "./components/pages/checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";
import { Toaster } from "sonner";

function App() {
	return (
		<BrowserRouter>
			<Toaster richColors />
			<CartContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:cat" element={<ItemListContainer />} />
					<Route path="/product/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />}></Route>
					<Route path="/checkout" element={<Checkout />}></Route>
					<Route path="*" element={<h2>Error 404</h2>} />
				</Routes>
				<Footer />
			</CartContextProvider>
		</BrowserRouter>
	);
}

export default App;
