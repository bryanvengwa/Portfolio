import React, { useState} from "react";
import Dropdown from "./Dropdown";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const handleClick =(event)=>{
		 
		setIsOpen(prevIsOpen=>!prevIsOpen)
	}
	return (
		<>
			<nav>
				
					<div className="name">
						<img src="imgs/web.png" className="img-fluid" alt="" />
					</div>

				<div
					onClick={handleClick}
					className={`menu ${isOpen ? "open" : ""}`}
				>
					<div className="bar one"></div>
					<div className="bar two"></div>
					<div className="bar three"></div>
				</div>
				{isOpen && (
					<Dropdown isOpen={isOpen} handleClick={handleClick} />
				)}
			</nav>
		</>
	);
}
