/* eslint-disable react/prop-types */
import "./Hamburger.css";

export default function Hamburger({ colors }) {
	function addOpen() {
		const icon = document.getElementById("hamburger-icon");
		icon.classList.toggle("open");
	}

	return (
		<div className="hamburger-icon" id="hamburger-icon" onClick={addOpen}>
			<span style={{ backgroundColor: colors.primary }}></span>
			<span style={{ backgroundColor: colors.primary }}></span>
			<span style={{ backgroundColor: colors.primary }}></span>
		</div>
	);
}
