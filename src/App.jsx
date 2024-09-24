/* eslint-disable no-unused-vars */

import { useState } from "react";
import Header from "./components/Header/Header";
import ColorMenu from "./components/ColorMenu/ColorMenu";

function App() {
	const [colors, setColors] = useState({
		background: "white",
		primary: "black",
	});

	// Generate a random RGB value
	/* 	function randomRgb() {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);

		return { r, g, b };
	}

	function getComplementaryColor({ r, g, b }) {
		return {
			r: 255 - r,
			g: 255 - g,
			b: 255 - b,
		};
	}

	function rgbToString({ r, g, b }) {
		return `rgb(${r}, ${g}, ${b})`;
	}

	function generateComplementaryColors() {
		const randomColor = randomRgb();
		const complementaryColor = getComplementaryColor(randomColor);
		setColors({
			background: rgbToString(randomColor),
			primary: rgbToString(complementaryColor),
		});
	} */

	return (
		<>
			<ColorMenu setColors={setColors} />
			{/* 			<ColorMenu generateComplementaryColors={generateComplementaryColors} />
			 */}{" "}
			<Header colors={colors} />
		</>
	);
}

export default App;
