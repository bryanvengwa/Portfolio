import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import { ThemeContextProvider } from "./contexts/ThemeContext";
function App() {
	const [color, setColor] = useState(1);
	const [shadow, setShadow] = useState("#00dade79");

	useEffect(() => {
		const changer = setInterval(() => {
			let counter = color;
			counter = counter + 1;
			counter = counter > 3 ? 1 : counter;

			setColor((prevColor) => {
				return counter;
			});
		}, 1000 * 3);
		if (color === 1) {
			setShadow("#00dade79");
		} else if (color === 2) {
			setShadow("#d32ed67d");
		} else {
			setShadow("#de6b0ddd");
		}

		return () => {
			clearInterval(changer);
		};
	}, [color]);
	// const [themeValue , setThemeValue] = useState('light')

	return (
		<ThemeContextProvider>
			<BrowserRouter>
				<div className="App header">
					<div className="ball-1"></div>
					<div className="ball-2"></div>
					<div className="ball-3"></div>
					<div className="box">
						<Routes>
							<Route
								path="/"
								element={<Home color={color} shadow={shadow} />}
							/>
							<Route path="/about" element={<About />} />
							<Route
								path="/contact"
								element={
									<Contacts color={color} shadow={shadow} />
								}
							/>
							<Route path="/project" element={<Project />} />
						</Routes>
					</div>
				</div>
		
			</BrowserRouter>
		</ThemeContextProvider>
	);
}

export default App;
