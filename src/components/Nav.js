import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Nav.scss";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen((old) => !old);
	}
	function handleStyles({ isActive }) {
		return {
			content: isActive ? "" : "",
			textDecoration: isActive ? "underline" : "",
			textDecorationColor: isActive ? "green" : "",
		
		};
	}
	return (
		<nav>
			<div className="flex-container">
				<NavLink  to={"/"} className="logo">
					<span>B</span>RYAN.
				</NavLink>
				<ul>
					<NavLink style={handleStyles} to={"/about"}>
						<span>A</span>bout
					</NavLink>
					<NavLink style={handleStyles} to={"/project"}>
						<span>P</span>rojects
					</NavLink>
					<NavLink style={handleStyles} to={"/contact"}>
						<span>C</span>ontact
					</NavLink>
				</ul>
				<div
					onClick={handleClick}
					className={`${isOpen ? "open" : ""} menu`}
				>
					<div className="bar one"></div>
					<div className="bar two"></div>
					<div className="bar three"></div>
				</div>
			</div>
		</nav>
	);
}
