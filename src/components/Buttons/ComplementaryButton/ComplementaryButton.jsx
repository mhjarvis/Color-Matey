/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./ComplementaryButton.css";

export default function ComplementaryButton({ setColors, colors }) {
	function randomRgb() {
		const h = Math.floor(Math.random() * 360);
		const s = Math.floor(Math.random() * (101 - 50)) + 50;
		const l = Math.floor(Math.random() * (101 - 50)) + 50;

		return { h, s, l };
	}

	function getBackgroundColor({ h, s, l }) {
		return {
			h: h,
			s: s,
			l: Math.floor(Math.random() * (101 - 80)) + 80,
		};
	}

	function getComplementaryColor({ h, s, l }) {
		return {
			h: (h + 180) % 360,
			s: s - 50,
			l: l - 50,
		};
	}

	function getSecondaryColor({ h, s, l }) {
		return {
			h: (h + 170) % 360,
			s: s,
			l: l,
		};
	}

	function getTertiaryColor({ h, s, l }) {
		return {
			h: (h + 190) % 360,
			s: s,
			l: l,
		};
	}

	function rgbToString({ h, s, l }) {
		return `hsl(${h}, ${s}%, ${l}%)`;
	}

	function generateComplementaryColors() {
		const randomColor = randomRgb();
		const backgroundColor = getBackgroundColor(randomColor);
		const complementaryColor = getComplementaryColor(randomColor);
		const secondaryColor = getSecondaryColor(randomColor);
		const tertiaryColor = getTertiaryColor(randomColor);

		setColors({
			background: rgbToString(backgroundColor),
			primary: rgbToString(complementaryColor),
			secondary: rgbToString(secondaryColor),
			tertiary: rgbToString(tertiaryColor),
		});

		console.log(colors);
	}

	return (
		<button
			className="complementary__button"
			onClick={generateComplementaryColors}
		>
			Complementary Button
		</button>
	);
}
