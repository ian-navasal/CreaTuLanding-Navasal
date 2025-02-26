import { Link, NavLink } from "react-router";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav>
			<Link to={"/"}>Disquería</Link>
			<ul>
				<NavLink to={"/category/cds"}>CDs</NavLink>
				<NavLink to={"/category/cassettes"}>Cassettes</NavLink>
				<NavLink to={"/category/vinilos"}>Vinilos</NavLink>
			</ul>
			<CartWidget />
		</nav>
	);
};
