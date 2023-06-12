import React from "react";
import ProjectWindow from "./ProjectWindow";
import HeaderBall from "./HeaderBall";
import Chat from "./Chat";
export default function Testing() {
	return (
		<>
			<div className="testing">
				<ProjectWindow />
				<br />
				<br />
				<br />
				<br />
				<HeaderBall />
				<br />
				<br />
				<br />
				<br />
				<div className="container">
					<div className="row">
						<div className="col-md-4"></div>
						<div className="col-md-4">
							<Chat />
						</div>
						<div className="col-md-4"></div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		</>
	);
}
