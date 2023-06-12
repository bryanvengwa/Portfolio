import React from "react";

export default function HeaderBall(props) {
	return (
		<>
			<div className="header-container">
				<div className="line"></div>
				<div className="ball">
					{" "}
					<h3>{props.number}</h3>{" "}
				</div>
				<br />
				<h1>{props.header}</h1>
			</div>
		</>
	);
}
