import "./ColorMenu.css";
import random from "./random.svg";

export default function ColorMenu() {
	return (
		<div className="color-menu">
			<div className="random">
				<button className="random-button">
					<img src={random} alt="Random Button" className="random-image" />
				</button>
			</div>
		</div>
	);
}
