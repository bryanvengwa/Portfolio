import React from 'react'
import HeaderBall from './HeaderBall'
import ProjectWindow from './ProjectWindow';

export default function Projects() {
  return (
		<>
			<HeaderBall
				number="3"
				header={"My Projects"}
				ballColor={{
					background: "linear-gradient(180deg,#146eeb , #09dee2)",
				}}
				lineColor={{
					background: "linear-gradient(180deg,#146eeb , #09dee2)",
				}}
			/>
                              <br /><br />
                              <ProjectWindow/>
		</>
  );
}
