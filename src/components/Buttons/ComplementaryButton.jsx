/* eslint-disable react/prop-types */

export default function ComplementaryButton({ setColors }) {
	function randomRgb() {
		const h = Math.floor(Math.random() * 360);
		const s = Math.floor(Math.random() * (101 - 50)) + 50;
		const l = Math.floor(Math.random() * (101 - 50)) + 50;

		return { h, s, l };
	}

	function getComplementaryColor({ h, s, l }) {
		return {
			h: (h + 180) % 360,
			s: s - 50,
			l: l - 50,
		};
	}

	function rgbToString({ h, s, l }) {
		return `hsl(${h}, ${s}%, ${l}%)`;
	}

	function generateComplementaryColors() {
		const randomColor = randomRgb();
		const complementaryColor = getComplementaryColor(randomColor);

		console.log(randomColor, complementaryColor);

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
