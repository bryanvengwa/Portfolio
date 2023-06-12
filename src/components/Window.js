import React from 'react'


export default function Window(props) {
  return (
		<>
			<div style={props.background} className="window">
				<div style={props.background} className="tab">
					{/* <div style={props.background} className="tags-container">
						<div className="tags red"></div>
						<div className="tags yellow"></div>
						<div className="tags green"></div>
					</div> */}
					<div className="heading">
						<h6>{props.head}</h6>
					</div>
					<div></div>
					<div></div>
				</div>
				<div className="image-container">
					<img src={props.source} className="img-fluid" alt="" />
				</div>
				<p>{props.paragraph}</p>
			</div>
		</>
  );
}
