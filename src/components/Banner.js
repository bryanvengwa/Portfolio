import React , {useContext} from "react";
import Button from "./Button";
import Links from "./Links";
import { themeContext } from "../contexts/ThemeContext";


export default function Banner(props) {
	
	const {themeValue} = useContext(themeContext)

	const buttonStyle = {
		border: `1px inset ${props.shadow}`,
		backgroundColor:"white" ,
		color:"black" ,

		transition: "1s ease-in-out",
		boxShadow: `0px  0px 20px ${props.shadow}`,
	};


	return (
		<>
			<section  className="banner">
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
			<div  className="h2"></div>
			<section  className="mid">
				<Button currentClass={themeValue ? '': "isDark"} name={"View projects"} />
				<Button
					
					style={buttonStyle}
					name={"Download CV"}
				/>
			</section>
			<br /><br />
			<div className="link-container">

			<Links/>
			</div>

		</>
	);
}
