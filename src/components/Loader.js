import React from "react";
import { ClockLoader } from "react-spinners";
import "../default.scss";

export default function Loader() {
	return (
		<>
			<div className="app">
				
				<div className="spinner-container">
					<ClockLoader color="green" speed={-10} size={200} />
				</div>
			</div>
		</>
	);
}
