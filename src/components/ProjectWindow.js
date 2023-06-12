import React from "react";
// import Window from "./Window";
import Card from "./Card";


export default function ProjectWindow(props) {
	return (
		<>
			<div
				style={props.background}
				// className="window"
				id="project-window"
			>
				<div style={props.background} className="tab">
					<div style={props.background} className="tags-container">
						<div className="tags red"></div>
						<div className="tags yellow"></div>
						<div className="tags green"></div>
					</div>
					<div className="taber active-tab">All</div>
					<div className="taber">Sites</div>
					<div className="taber">Apps</div>
				</div>
				<div className="img-container">
					<img src={props.source} className="img-fluid" alt="" />
				</div>
				<p>{props.paragraph}</p>

				<div className="scroll-container">
					<div className="flex-container">
						<Card
							head={"baker's Inn"}
							source={"imgs/bakers.jpg"}
						/>
						<Card
							head={"mentorship"}
							source={"imgs/mentors.jpg"}
						/>
						<Card
							head={"mentorship"}
							source={"imgs/mentors.jpg"}
						/>
						<Card
							head={"mentorship"}
							source={"imgs/mentors.jpg"}
						/>
						<Card
							head={"mentorship"}
							source={"imgs/mentors.jpg"}
						/>
						<Card
							head={"baker's Inn"}
							source={"imgs/bakers.jpg"}
						/>
						
						{/* <Card head={"The Mobi"} source={"imgs/home.jpg"} /> */}
					</div>
					<br />
					<br />
				</div>
				<div className="scroll-container">
					<div className="flex-container">
						{/* <Window head={"The Mobi"} source={"imgs/mobi.png"} /> */}
						<Card head={"The Mobi"} source={"imgs/mobi.png"} />
						<Card head={"The Mobi"} source={"imgs/mobi.png"} />
						{/* <Card head={"The Mobi"} source={"imgs/mobi.png"} /> */}
						{/* <Card head={"The Mobi"} source={"imgs/mobi.png"} /> */}
						{/* <Window
							head={"portfolio"}
							source={"imgs/portfolio.png"}
						/> */}
					</div>
				</div>
			</div>
		</>
	);
}
