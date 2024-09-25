/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import "./Navigation.css";

export default function Navigation({ colors }) {
	const [width, setWidth] = useState(window.innerWidth);

	// update width as needed
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="navigation">
			<div className="logo" style={{ color: colors.tertiary }}>
				ColorMatey
			</div>
			{width >= 768 ? (
				<div className="navigation__container">
					<ul className="navigation__ul" style={{ color: colors.primary }}>
						<li className="navigation__li">Home</li>
						<li className="navigation__li">How It Works</li>
						<li className="navigation__li">Features</li>
						<li className="navigation__li">Try It Out</li>
						<li className="navigation__li">Contact</li>
					</ul>
				</div>
			) : (
				""
			)}
			{width < 768 ? <Hamburger colors={colors} /> : ""}
		</div>
	);
}
