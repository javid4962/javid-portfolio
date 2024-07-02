import React from 'react'

function Project(props) {
  
  return (
    <div className="m-2 p-3 text-sm">
      <div className="name text-lg font-medium">{props.name}</div>
      <div className="duration text-sm text-gray-500 mb-3">{props.duration}</div>
      <div className=''>Description: </div>
      <ul className='p-3'>
        {props.items.map((item, index) =>
        (
          <li style={{ listStyle: 'disc' }} key={index}>{item}</li>
        ))}
      </ul>
      Skills: <span className="skills">{props.skills}</span>
      
      <div>
       GitHub Link: <a className='url' href={props.url} target='blank'>{props.url}</a>
      </div>
      
    </div>
  )
}

export default Project