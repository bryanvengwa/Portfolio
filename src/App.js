import { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Loader from "./components/Loader";
import { ThemeContextProvider } from "./contexts/ThemeContext";
const About = lazy(() => import("./Pages/About"));
const Contacts = lazy(() => import("./Pages/Contacts"));
const Home = lazy(() =>import ('./Pages/Home'));
const Project = lazy(() => import("./Pages/Project"));
function App() {
	const [color, setColor] = useState(1);
	const [shadow, setShadow] = useState("#00dade79");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2500);

		return () => clearTimeout(timer);
	}, []);

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
		<Suspense fallback={<Loader />}>
			<ThemeContextProvider>
				<BrowserRouter>
					<div className="App header">
						<div className="ball-1"></div>
						<div className="ball-2"></div>
						<div className="ball-3"></div>
						<div className="box">
							{isLoading ? (
								<Loader />
							) : (
								<Routes>
									<Route
										path="/"
										element={
											<Home
												color={color}
												shadow={shadow}
											/>
										}
									/>
									<Route path="/about" element={<About />} />
									<Route
										path="/contact"
										element={
											<Contacts
												color={color}
												shadow={shadow}
											/>
										}
									/>
									<Route
										path="/project"
										element={<Project />}
									/>
								</Routes>
							)}
						</div>
					</div>
				</BrowserRouter>
			</ThemeContextProvider>
		</Suspense>
	);
}

export default App;
