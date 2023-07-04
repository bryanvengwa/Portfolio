import React from 'react';
import { FaReact } from 'react-icons/fa';
import '../default.scss';

export default function Loader() {
  return (
		<>
			<div className="app header">
				<div className="ball-1"></div>
				<div className="ball-2"></div>
				<div className="ball-3"></div>
				<div className="spinner-container">
					<FaReact color="white" size={150} />
					{/* <FaCog color="white" size={150} /> */}
                                                  
				</div>
			</div>
		</>
  );
}
