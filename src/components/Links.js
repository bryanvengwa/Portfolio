import React from "react";
import {
	FaFacebookF,
	FaGithub,

	FaLinkedinIn,
	FaTwitter,
	FaWhatsapp
} from "react-icons/fa";
import "../link.scss";
import { themeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function Links() {
	const { themeValues } = useContext(themeContext);
	const styles = {
		boxShadow: themeValues
			? " "
			: "0px 0px 20px rgba(97, 94, 94, 0.4)",
	};
	return (
		<>
			<div className="wrapper">
				<div style={styles} className="button">
					<div className="icon f">
						<FaFacebookF className="facebook i" size="2.1em" />
					</div>
					<span className="fa">
						<a href="https://www.facebook.com/profile.php?id=100013368933081&mibextid=LQQJ4dv">
							Facebook
						</a>
					</span>
				</div>
				<div style={styles} className="button">
					<div className="icon g">
						<FaGithub className="github i" size="2.1em" />
					</div>
					<span className="gi">
						<a href="https://github.com/bryanvengwa">Github</a>
					</span>
				</div>
				<div style={styles} className="button">
					<div className="icon t">
						<FaTwitter className="twitter i" size="2.1em" />
					</div>
					<span className="tw">
						<a href="/">Twitter</a>
					</span>
				</div>
				<div style={styles} className="button">
					<div className="icon inst">
						<FaWhatsapp className="instagram i" size="2.1em" />
					</div>
					<span className="insta">
						<a href="/">Whatsapp</a>
					</span>
				</div>
				<div style={styles} className="button">
					<div className="icon li">
						<FaLinkedinIn className="linkedin i" size="2.1em" />
					</div>
					<span className="lin">
						<a href="https://www.linkedin.com/in/bryan-vengwa-938700264">
							LinkedIn
						</a>
					</span>
				</div>
			</div>
		</>
	);
}
