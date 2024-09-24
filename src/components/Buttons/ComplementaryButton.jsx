/* eslint-disable react/prop-types */
export default function ComplementaryButton({ setColors }) {
	function randomRgb() {
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
	}
	return (
		<div>
			<button onClick={generateComplementaryColors}>dumb</button>
		</div>
	);
}
