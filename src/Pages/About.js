import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import HeaderBall from "../components/HeaderBall";
import Nav from "../components/Nav";
import { themeContext } from "../contexts/ThemeContext";
import { FaRegHandPointRight, FaRegHandPointDown } from "react-icons/fa";

export default function About() {
	const [active, setActive] = useState(false);
	const { themeValue } = useContext(themeContext);
	const handleClick = ()=>{
		setActive(prevActive =>!prevActive);
		setTimeout(()=>{setActive((prevActive) => !prevActive);},4000)
	}
	const buttonStyle={
		transform : active ? 'scale(1.05)':''
	}

	const styles = {
		boxShadow: themeValue
			? " 0px 0px 20px rgba(0, 0, 0, 0.1) "
			: "0px 0px 20px rgba(255, 255, 255, 0.652)",
	};
	return (
		<div className="back-container">
			<Nav />
			<section className="about">
				<HeaderBall
					number="2"
					header={"About me"}
					ballColor={{
						background: "linear-gradient(180deg,#146eeb , #09dee2)",
					}}
					lineColor={{
						background: "linear-gradient(180deg,#146eeb , #09dee2)",
					}}
				/>

				<br />
				<div style={styles} className="container about-container">
					<div className="row">
						<div className=" col-md-12 col-xl-7 ">
							<div className="text-container">
								<br />
								<p>
									“Hi, I’m Bryan, a Web Developer developer
									with experience in HTML, CSS, JavaScript,
									React.js and other libraries.I have a
									passion for creating visually appealing and
									user-friendly websites and am always looking
									for ways to improve my skills. I’m excited
									to connect with potential clients and
									employers to discuss how I can contribute to
									their projects.”
								</p>
								<br />
								<button disabled={active} onClick={handleClick} style={buttonStyle}  >
									My stack{" "}
									<FaRegHandPointRight className="hand pc" />{" "}
									<FaRegHandPointDown className="hand phone" />{" "}
								</button>
								<br /> <br />
							</div>
						</div>
						<div className=" col-md-12 col-xl-5  right">
							<ul className={`${active ? "active-list" : ""}`}>
								<li>
									<img src="imgs/sass.png" alt="" />
									<div className="content">
										<h4>Sass.scss</h4>
										<div className="star-container">
											<FaStar className="star" />
											<FaStar className="star" />
											<FaStar className="star" />
										</div>
									</div>
								</li>
								<li>
									<img src="imgs/node.png" alt="" />
									<div className="content">
										<h4>Node.js</h4>
										<div className="star-container">
											<FaStar className="star" />
											<FaStar className="star" />
											<FaStar className="star" />
										</div>
									</div>
								</li>
								<li>
									<img src="imgs/js.png" alt="" />
									<div className="content">
										<h4>Javascript.js</h4>
										<div className="star-container">
											<FaStar className="star" />
											<FaStar className="star" />
											<FaStar className="star" />
										</div>
									</div>
								</li>
								<li>
									<img src="imgs/react.png" alt="" />
									<div className="content">
										<h4>React.js</h4>
										<div className="star-container">
											<FaStar className="star" />
											<FaStar className="star" />
											<FaStar className="star" />
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
