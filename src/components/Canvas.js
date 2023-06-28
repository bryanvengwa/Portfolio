import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import '../css/canvas.scss'
export default function Canvas(props) {
        
  return (
		<>
			{/* <button
				className="btn btn-primary"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasRight"
				aria-controls="offcanvasRight"
			>
				Toggle right offcanvas
			</button> */}

			<div
				className="offcanvas offcanvas-end"
				tabIndex="-1"
				id="offcanvasRight"
				aria-labelledby="offcanvasRightLabel"
			>
				<div className="offcanvas-header">
					<h5 id="offcanvasRightLabel">{props.data.head} </h5>
					<button
						type="button"
						className="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">
					<img src={props.data.source} className="img-fluid" alt="" />

						<br /><br />
					<div className="flex-container">
						<a
							href={props.data.github}
							rel="noreferrer"
							target="_blank"
						>
							view code 
							<FaGithub  className='link-icon' />
						</a>
						<a
							href={props.data.link}
							rel="noreferrer"
							target="_blank"
						>
							Visit {props.data.type} 
							<FaExternalLinkAlt  className='link-icon' />
						</a>
					</div>
					<br /><br />
					<h2>Project description:</h2>
					<br />
					<p>{props.data.description}</p>
				</div>
			</div>
		</>
  );
}
