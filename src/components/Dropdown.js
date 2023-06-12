import React, {useState} from 'react'

export default function Dropdown(props) {
          const [isDark , setIsDark] = useState(false)
          const darkToggle =()=>{
                    setIsDark(prevIsDark=>!prevIsDark)
          }
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
					<button onClick={darkToggle}>{`Too ${
						isDark ? "Dark" : "Bright"
					}?`}</button>
					<div id="str"></div>
				</div>
			</div>
		</>
  );
}
