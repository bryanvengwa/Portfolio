import React from 'react'


export default function Card(props) {
        
  return (
    <>
    <div  className="project">
          <div className="img-container">
                    <img src={props.source} className='img-fluid' alt="" />
          </div>
          <div className="body">
            <h5>Bakers Inn</h5>
            <p>-Advertising , bread</p>
          </div>
    </div>
    </>
  )
}
