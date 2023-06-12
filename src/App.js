import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState , useEffect } from "react";
import "./App.scss";
import Page from "./components/Page";
import Testing from "./components/Testing";


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


	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Page color={color} shadow={shadow} />} />
				<Route path='/testing' element={<Testing/>} />

        <Route/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
