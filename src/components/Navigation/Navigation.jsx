/* eslint-disable react/prop-types */
import "./Navigation.css";

export default function Navigation({ colors }) {
	return (
		<div className="navigation">
			<div className="logo" style={{ color: colors.primary }}>
				ColorMatey
			</div>
			<div className="navigation__container">
				<ul className="navigation__ul" style={{ color: colors.primary }}>
					<li className="navigation__li">Home</li>
					<li className="navigation__li">How It Works</li>
					<li className="navigation__li">Features</li>
					<li className="navigation__li">Try It Out</li>
					<li className="navigation__li">Contact</li>
				</ul>
			</div>
		</div>
	);
}
