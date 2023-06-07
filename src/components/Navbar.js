import React from "react";

export default function Navbar() {
	return (
		<>
			<nav>
				<a href="/" className="logo" >Bryan❗️ </a>
				<ul className="links">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Projects</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
				<input type="checkbox" id="dark" />
                                                  <div className="toggler">
                                                            <div className="circle"></div>
                                                  </div>
				<div className="menu"></div>
				<div className="dropdown">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Projects</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</div>
			</nav>
		</>
	);
}
