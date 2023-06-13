import React, { useState, useContext } from "react";
import Dropdown from "./Dropdown";
import { themeContext } from "../contexts/ThemeContext";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = (event) => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};
	const { themeValue } = useContext(themeContext);
	const styles = {
		backgroundColor: themeValue ? "white" : "black",
	};
	const barStyle = {
		backgroundColor: themeValue ? "black" : "white",
	};

	return (
		<>
			<nav style={styles}>
				<div className="name">
					<img src="imgs/web.png" className="img-fluid" alt="" />
				</div>

				<div
					onClick={handleClick}
					className={`menu ${isOpen ? "open" : ""} ${themeValue? '':'white'}`}
				>
					<div style={barStyle} className="bar one"></div>
					<div style={barStyle} className="bar two"></div>
					<div style={barStyle} className="bar three"></div>
				</div>
				{isOpen && (
					<Dropdown isOpen={isOpen} handleClick={handleClick} />
				)}
			</nav>
		</>
	);
}
