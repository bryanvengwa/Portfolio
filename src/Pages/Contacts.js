import React from "react";
import Nav from "../components/Nav";
import Contact from "../components/Contact";

export default function Contacts(props) {
	return (
		<div className="back-container">
			<Nav />
			<div className="section-container">

			<Contact color={props.color} />
			</div>
		</div>
	);
}


