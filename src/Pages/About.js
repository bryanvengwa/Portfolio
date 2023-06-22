
import Nav from "../components/Nav";
import React, { useContext } from "react";
import HeaderBall from "../components/HeaderBall";
import TechStack from "../components/TechStack";
import { themeContext } from "../contexts/ThemeContext";

export default function About() {
          	const { themeValue } = useContext(themeContext);

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
						<div className=" col-md-12 col-lg-7">
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
								<TechStack />
								<br /> <br />
							</div>
						</div>
						<div className=" col-md-12 col-lg-5">
							<br />
							<br />
							<div className="imgs-container">
								<img
									src="imgs/about.png"
									className="img-fluid"
									alt=""
                                                                                          />
                                                                                          </div>
							</div>
						</div>
					</div>
			</section>
				</div>
		
	);
}
