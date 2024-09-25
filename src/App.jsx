import { useState } from "react";
import Header from "./components/Header/Header";
import ColorMenu from "./components/ColorMenu/ColorMenu";

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
		</>
	);
}

export default App;
