import React, { useEffect , useState} from 'react'


export default function Card(props) {
 	const [display, setDisplay] = useState(false);
  
useEffect(() => {
	if (props.activeTab === 1) {
		setDisplay(true);
	} else if (props.activeTab === 2 && props.type === "site") {
		setDisplay(true);
	} else if (props.activeTab === 3 && props.type === "app") {
		setDisplay(true);
	}else{
    setDisplay(false)
  }
}, [props, props.activeTab, props.type]);   
  return (
    <>
{ display &&    <div  className="project">
          <div className="img-container">
                    <img src={props.source} className='img-fluid' alt="" />
          </div>
          <div className="body">
            <h5>{props.head}</h5>
            <p>-{props.about}</p>
          </div>
    </div>}
    </>
  )
}
