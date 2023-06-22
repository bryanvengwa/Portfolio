import React, { useState } from "react";
import { row1 } from "./ProjectData";
// import { row2 } from "./ProjectData";
import Card from "./Card";
function TAb(props) {
	return (
		<>
			<div className="tab">
				<div className="tags-container">
					<div className="tags red"></div>
					<div className="tags yellow"></div>
					<div className="tags green"></div>
				</div>
				<div
					onClick={() => {
						props.ChangeTab(1);
					}}
					className={`taber ${
						props.activeTab === 1 ? "active-tab" : ""
					}`}
				>
					All
				</div>
				<div
					onClick={() => {
						props.ChangeTab(2);
					}}
					className={`taber ${
						props.activeTab === 2 ? "active-tab" : ""
					}`}
				>
					Sites
				</div>
				<div
					onClick={() => {
						props.ChangeTab(3);
					}}
					className={`taber ${
						props.activeTab === 3 ? "active-tab" : ""
					}`}
				>
					Apps
				</div>
			</div>
		</>
	);
}

export default function ProjectWindow(props) {
	const [activeTab, setActiveTAb] = useState(1);
	
	function ChangeTab(id) {
		setActiveTAb(id);
	}
	const row1Cards = row1.map((card)=>{
		return (
			
			<Card	type={card.type}
				
				
				activeTab={activeTab}
				key={card.id}
				head={card.head}
				about={card.about}
				source={card.source}
			/>
		);
	})

	return (
		<>
			<div
				style={props.background}
				// className="window"
				id="project-window"
			>
				<TAb activeTab={activeTab} ChangeTab={ChangeTab} />

				<div className="img-container">
					<img src={props.source} className="img-fluid" alt="" />
				</div>
				<p>{props.paragraph}</p>

				<div className="scroll-container">
					<div className="flex-container">{row1Cards}</div>
				
					{/* {row2Cards} */}
				</div>
			</div>
		</>
	);
}
