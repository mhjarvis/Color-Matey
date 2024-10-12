/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./ComplementaryButton.css";

export default function ComplementaryButton({ setColors, colors }) {
	// Primary Color
	function getPrimaryColor() {
		const h = Math.floor(Math.random() * 360);
		const s = Math.floor(Math.random() * (101 - 30)) + 30;
		const l = Math.floor(Math.random() * 60);
		return { h, s, l };
	}

	// Secondary Color - Complementary (180deg)
	function getSecondaryColor({ h, s, l }) {
		return {
			h: (h + 180) % 360,
			s: s,
			l: l,
		};
	}

	function getBackgroundColor({ h, s, l }) {
		return {
			h: h,
			s: Math.floor(Math.random() * 31),
			l: Math.floor(Math.random() * (101 - 90)) + 90,
		};
	}

	function getComplementaryColor({ h, s, l }) {
		return {
			h: (h + 180) % 360,
			s: s - 50,
			l: l - 50,
		};
	}

	function getTertiaryColor({ h, s, l }) {
		return {
			h: (h + 190) % 360,
			s: s,
			l: l,
		};
	}

	function hslToString({ h, s, l }) {
		return `hsl(${h}, ${s}%, ${l}%)`;
	}

	function generateComplementaryColors() {
		const primaryColor = getPrimaryColor();
		const secondaryColor = getSecondaryColor(primaryColor);
		const backgroundColor = getBackgroundColor(primaryColor);
		const complementaryColor = getComplementaryColor(primaryColor);
		const tertiaryColor = getTertiaryColor(primaryColor);

		setColors({
			/* 			background: rgbToString(backgroundColor),
			 */
			primary: hslToString(primaryColor),
			secondary: hslToString(secondaryColor),
			/* 			secondary: rgbToString(secondaryColor),
			tertiary: rgbToString(tertiaryColor), */
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
