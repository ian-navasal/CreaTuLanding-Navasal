import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav>
			<h1>Disquería</h1>
			<ul>
				<li>CDs</li>
				<li>Vinilos</li>
				<li>Cassettes</li>
			</ul>
			<CartWidget />
		</nav>
	);
};
