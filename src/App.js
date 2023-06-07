import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Page from "./components/Page";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Page/>} />

        <Route/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
