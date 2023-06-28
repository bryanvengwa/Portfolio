import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";

export default function Home(props) {
	return (
		<div className="back-container">
			<Nav />

			<Banner color={props.color} shadow={props.shadow} />
		</div>
	);
}
