import React, { useState } from "react";
import { FaAppStore, FaCode, FaGlobe } from "react-icons/fa";
import Canvas from "./Canvas";
import Card from "./Card";
import { row1 } from "./ProjectData";
function Navigation(props){
	
	return (
		<>
			<div className="navigation-container">
				<div className="navigation">
					<ul>
						<li
							onClick={() => props.changeTab(1)}
							className={`lists ${
								props.activeTab === 1 ? "active" : ""
							}`}
						>
							{" "}
							<h6>
								<span className="icon">
									<FaCode/>
								</span>
								<span className="text">All </span>
							</h6>
						</li>
						<li
							onClick={() => props.changeTab(2)}
							className={`lists ${
								props.activeTab === 2 ? "active" : ""
							}`}
						>
							<h6>
								<span className="icon">
									<FaGlobe />
								</span>
								<span className="text">Sites</span>
							</h6>
						</li>
						<li
							onClick={() => props.changeTab(3)}
							className={`lists ${
								props.activeTab === 3 ? "active" : ""
							}`}
						>
							<h6>
								<span className="icon">
									<FaAppStore />
								</span>
								<span className="text">Apps</span>
							</h6>
						</li>

						<div className="indicator"></div>
					</ul>
				</div>
			</div>
		</>
	);
}


export default function ProjectWindow(props) {
	const [activeTab, setActiveTAb] = useState(1);
	const [data , setData]= useState({})
	const dataSetter = (id)=>{
		const found = row1.find((project) => project.id === id);
	setData(found);

}


	function changeTab(id) {
		setActiveTAb(id);
	}
	const row1Cards = row1.map((card) => {
		return (
			<Card	style={{opacity: 1}}
				type={card.type}
				activeTab={activeTab}
				key={card.id}
				head={card.head}
				about={card.about}
				id={card.id}
				dataSetter={dataSetter}
				cards={row1}
				source={card.source}
			/>
		);
	});

	return (
		<>
			<div className="div">
			<Canvas data={data} />
						<Navigation
							activeTab={activeTab}
							changeTab={changeTab}
						/>
				<div style={props.background} id="project-window">
					<div className="project-window-container">

						<div className="img-container">
							<img
								src={props.source}
								className="img-fluid"
								alt=""
							/>
						</div>
						<p>{props.paragraph}</p>

						<div className="scroll-container">
							<div className="flex-container">{row1Cards}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
