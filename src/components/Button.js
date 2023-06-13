import React from 'react';

export default function Button(props) {

	
  return (
		<>
			<button className={props.currentClass} style={props.style}>{props.name}</button>
		</>
  );
}
