import React, { useContext } from 'react';
import { themeContext } from '../contexts/ThemeContext';

export default function Dropdown(props) {
const {themeValue , toggle} = useContext(themeContext)


  return (
		<>
			<div className={`drop ${props.isOpen ? "opacity" : ""}`}>
				<div className="link-holder">
					<a
						onClick={() => {
							props.handleClick();
						}}
						href="#home"
					>
						Home
					</a>
					<a
						onClick={() => {
							props.handleClick();
						}}
						href="#about"
					>
						About
					</a>
					<a
						onClick={() => {
							props.handleClick();
						}}
						href="#project"
					>
						Projects
					</a>
					<a
						onClick={() => {
							props.handleClick();
						}}
						href="#contact"
					>
						Contact
					</a>
					<button onClick={toggle} >{`Too ${
						themeValue ?  "Bright" : "Dark"  
					}?`}</button>
					<div id="str"></div>
				</div>
			</div>
		</>
  );
}
