import React from "react";
import Button from "./Button";
import Links from "./Links";


export default function Banner(props) {
	const buttonStyle = {
		border: `1px inset ${props.shadow}`,
		backgroundColor: "white",
		color: "black",

		transition: "1s ease-in-out",
		boxShadow: `0px  0px 14px ${props.shadow}`,
	};
	return (
		<>
			<section className="banner">
				<div className="h50"></div>
				<h1>
					<span className={props.color === 1 ? "one" : ""}>
						Innovative.
					</span>
					<span className={props.color === 2 ? "two" : ""}>
						Responsive.
					</span>
					<span className={props.color === 3 ? "three" : ""}>
						Dynamic.
					</span>
				</h1>
				<div className="h5"></div>
				<p>
					"Welcome to my portfolio! As an innovative web developer, I
					craft responsive and dynamic websites that deliver seamless
					user experiences. Let's bring your vision to life!"
				</p>
				<div className="h5"></div>
			</section>
			<section className="mid">
				<Button name={"View projects"} />
				<Button
					
					style={buttonStyle}
					name={"Download CV"}
				/>
			</section>
			<br /><br /><br /> <br /><br />
			<div className="link-container">

			<Links/>
			</div>

		</>
	);
}
