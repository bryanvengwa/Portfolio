import React , {useContext} from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Projects from "./Projects";
// import TechStack from "./TechStack";
import HeaderBall from "./HeaderBall";
 import { themeContext } from "../contexts/ThemeContext";


import About from "./About";
export default function Page(props) {
	const {themeValue} = useContext(themeContext)
	const styles = {
		backgroundColor: themeValue ? "white" : "black",
	};
	return (
		<div style={styles} className="page">
			<Navbar />
			<div id="home"></div>
			<Banner color={props.color} shadow={props.shadow} />
			<div className="h6"></div>
			<div id="about"></div>
			<About />
			<br />
			<br />
			<div id="project"></div>
			<Projects />
			<br />
			<br />
			<br />
			<div id="contact"></div>
			<HeaderBall
				number="4"
				header={"Contact Me"}
				ballColor={{
					background: "linear-gradient(180deg,#146eeb , #09dee2)",
				}}
				lineColor={{
					background: "linear-gradient(180deg,#146eeb , #09dee2)",
				}}
			/>
			<br />
			<br />
			<br />
			<Contact />
		</div>
	);
}
