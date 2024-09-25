/* eslint-disable react/prop-types */
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header({ colors }) {
	return (
		<>
			<Navigation colors={colors} />

			<div className="header" style={{ backgroundColor: colors.background }}>
				<h1 className="header__title" style={{ color: colors.primary }}>
					Navigate Your{" "}
					<span style={{ color: colors.secondary }}>Perfect Website</span> Color
					Scheme
				</h1>
			</div>
		</>
	);
}
