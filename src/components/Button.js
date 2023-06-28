import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Button(props) {
	const linkStyle={
		textDecoration:'none',
		color:'black',
		fontFamily:'heavy'
	}

	
  return (
		<>
			<button
				className={props.currentClass}
				style={{ ...props.style, ...props.defaultButtond }}
			>
				<NavLink to="/project" style={{ ...linkStyle, color: "white" }}>
					{props.name}
				</NavLink>{" "}
				<a
					href={props.path}
					target="_blank"
					rel="noreferrer"
					style={linkStyle}
				>
					{props.link}
				</a>{" "}
			</button>
		</>
  );
}
