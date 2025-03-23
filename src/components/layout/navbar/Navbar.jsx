import { Link, NavLink } from "react-router";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Logo } from "../../common/logo/Logo";

export const Navbar = () => {
	return (
		<nav>
			<Link className="navLogo" to={"/"}>
				<Logo />
				Disquería
			</Link>
			<ul>
				<NavLink to={"/category/cds"}>CDs</NavLink>
				<NavLink to={"/category/cassettes"}>Cassettes</NavLink>
				<NavLink to={"/category/vinilos"}>Vinilos</NavLink>
			</ul>
			<div className="navCart">
				<Link to={"/cart"}>
					<CartWidget />
				</Link>
			</div>
		</nav>
	);
};
