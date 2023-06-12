import React from "react";

export default function CircleButton(props) {
	return (
		<>
			<div className="circle">
				<div className="img-container">
					<img
						src={`imgs/${props.source}`}
						className="img-fluid"
						alt=""
					/>
				</div>
			</div>
		</>
	);
}
