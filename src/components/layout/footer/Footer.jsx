import { Link } from "react-router";
import "./footer.css";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin, FaXTwitter } from "react-icons/fa6";
import { Logo } from "../../common/logo/Logo";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
	return (
		<footer>
			<div className="socialMedia">
				<Link>
					<FaFacebook />
				</Link>
				<Link>
					<FaInstagram />
				</Link>
				<Link>
					<FaXTwitter />
				</Link>
			</div>
			<div>
				<Logo />
			</div>
			<div className="footerContact">
				<h4>Contacto</h4>
				<p>{<MdEmail />} disqueria@disqueria.com</p>
				<p>{<FaLocationPin />} Calle 1234 - Ciudad</p>
				<p>{<FaPhoneAlt />} 11-1111-1111</p>
			</div>
		</footer>
	);
};
