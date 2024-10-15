/* eslint-disable react/prop-types */
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header({ colors }) {
	return (
		<>
			<Navigation colors={colors} />
			<div className="header" style={{ backgroundColor: colors.background }}>
				<h1 className="header__title" style={{ color: colors.primary }}>
					Design with <span style={{ color: colors.secondary }}>Harmony</span>{" "}
				</h1>
				<p className="header__sub-text" style={{ color: colors.secondary }}>
					Create balanced color schemes for a seamless user experience.
				</p>
			</div>
		</>
	);
}
