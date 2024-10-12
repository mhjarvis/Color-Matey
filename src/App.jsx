import { useState } from "react";
import Header from "./components/Header/Header";
import ColorMenu from "./components/ColorMenu/ColorMenu";
import FAQ from "./components/FAQ/Faq";
import ComplementaryButton from "./components/Buttons/ComplementaryButton/ComplementaryButton";

function App() {
	const [colors, setColors] = useState({
		primary: "black",
		secondary: "black",
		tertiary: "white",
		background: "white",
	});

	return (
		<>
			<ColorMenu>
				<ComplementaryButton setColors={setColors} colors={colors} />
			</ColorMenu>
			<Header colors={colors} />
			<FAQ />
		</>
	);
}

export default App;
