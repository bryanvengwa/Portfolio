import React from "react";

import "../link.scss";
import { themeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import CircleButton from "./CircleButton";
export default function TechStack() {
	const images = [
		"html.png",
		"css.png",
		"sass.png",
		"js.png",
		"node.png",
		"react.png",
	];
		const { themeValues } = useContext(themeContext);
		const styles = {
			boxShadow: themeValues ? " " : "0px 0px 20px rgba(97, 94, 94, 0.4)",
		};

	return (
		<>
			<div className="tech-container">
				<div id="wrapper" className="wrapper wrapper-tech">
					<div style={styles} className="button">
						<div className="icon icon-2 f">
							<img
								src="imgs/html.png"
								className="img-fluid"
								alt=""
							/>
						</div>
						<span className="fa">HTML</span>
					</div>
					<div style={styles} className="button">
						<div className="icon icon-2 g">
							<img
								src="imgs/sass.png"
								className="img-fluid"
								alt=""
							/>
						</div>
						<span className="gi">
							Sass
						</span>
					</div>
					<div style={styles} className="button">
						<div className="icon icon-2 t">
							<img
								src="imgs/js.png"
								className="img-fluid"
								alt=""
							/>
						</div>
						<span className="tw">
							Javascript
						</span>
					</div>
					<div style={styles} className="button">
						<div className="icon icon-2 inst">
							<img
								src="imgs/node.png"
								className="img-fluid"
								alt=""
							/>
						</div>
						<span className="insta">
							Node.js
						</span>
					</div>
					<div style={styles} className="button">
						<div className="icon icon-2 li">
							<img
								src="imgs/react.png"
								className="img-fluid"
								alt=""
							/>
						</div>
						<span className="lin">
							React.js
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
