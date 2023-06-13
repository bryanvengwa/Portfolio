import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Page from "./components/Page";
import Testing from "./components/Testing";
import { ThemeContextProvider } from "./contexts/ThemeContext";
function App() {
	const [color , setColor]= useState(1);
	const [shadow, setShadow] = useState("#00dade79");

	useEffect(()=>{
		const changer = setInterval(()=>{
			let counter = color;
			counter = counter + 1
			counter = counter > 3? 1: counter
			
			setColor(prevColor=>{
				return counter 
			})

		},1000 * 3 )
			if (color === 1) {
				setShadow("#00dade79");
			} else if (color === 2) {
				setShadow("#d32ed67d");
			} else {
				setShadow("#de6b0ddd");
			}
		
		return ()=>{
			clearInterval(changer)
		}
	},[color])
	// const [themeValue , setThemeValue] = useState('light')


	return (
				<ThemeContextProvider>
		<BrowserRouter>
			<Routes>


				<Route path='/' element={<Page color={color} shadow={shadow} />} />
				<Route path='/testing' element={<Testing/>} />

				
        <Route/>
			</Routes>
		</BrowserRouter>
				</ThemeContextProvider>
	);
}

export default App;
