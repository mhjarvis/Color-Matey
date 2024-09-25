import { useState } from "react";
import Header from "./components/Header/Header";
import ColorMenu from "./components/ColorMenu/ColorMenu";
import FAQ from "./components/FAQ/FAQ";

function App() {
	const [colors, setColors] = useState({
		primary: "black",
		secondary: "white",
		tertiary: "white",
		background: "white",
	});

	return (
		<>
			<ColorMenu setColors={setColors} colors={colors} />
			<Header colors={colors} />
			<FAQ />
		</>
	);
}

export default App;
