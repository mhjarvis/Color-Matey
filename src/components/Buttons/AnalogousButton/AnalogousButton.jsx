/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./AnalogousButton.css";

export default function AnalogousButton({ setColors, colors }) {
	function setHSL() {
		const h = Math.floor(Math.random() * 360) + 1;
		const s = Math.floor(Math.random() * (100 - 50 + 1) + 50);
		const l = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

		const hsl = `hsl(${h}, ${s}%, ${l}%)`;
		console.log(hsl);

		setColors({
			primary: hsl,
		});
		return hsl;
	}

	// h: 1 - 360
	// s: 50 - 100
	// l: 10 - 50
	return (
		<button className="complementary__button" onClick={setHSL}>
			Complementary Button
		</button>
	);
}
