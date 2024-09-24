/* eslint-disable react/prop-types */
import ComplementaryButton from "../Buttons/ComplementaryButton/ComplementaryButton";
import "./ColorMenu.css";

export default function ColorMenu({ setColors, colors }) {
	return (
		<div className="color-menu">
			<ComplementaryButton setColors={setColors} colors={colors} />
		</div>
	);
}
