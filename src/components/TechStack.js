import React from "react";
import CircleButton from "./CircleButton";
export default function TechStack() {
	const images = [
		"html.png",
		"css.png",
		"sass.png",
		"js.png",
		"node.png",
		"react.png",
	];
	const circleElements = images.map((image) => {
		return <CircleButton key={image} source={image} />;
	});
	return (
		<>
			<div className="tech-container">
				<div className="text-container">

				<h5>My Stack |</h5>
				</div>
				<div className="stack-container">{circleElements}</div>
			</div>
		</>
	);
}
