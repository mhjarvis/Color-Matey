/* eslint-disable react/prop-types */
import ComplementaryButton from "../Buttons/ComplementaryButton";
import "./ColorMenu.css";

export default function ColorMenu({ setColors }) {
	return (
		<div className="color-menu">
			<ComplementaryButton setColors={setColors} />
			{/* 			<div className="random">
				<button className="random-button">
					<img src={random} alt="Random Button" className="random-image" />
				</button>
			</div> */}
		</div>
	);
}
