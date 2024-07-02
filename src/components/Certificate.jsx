import React from 'react'

function Certificate(props) {
  return (
    <div className='border border-2 border-slate-500 p-3 text-ellipsis text-sm overflow-hidden rounded-lg' >
        <div className="certificate-name text-lg font-medium mb-3">{props.name}</div>
        <div className="duration text-sm text-gray-500">{props.duration}</div>
        <div className="organization text-sm">Organization: {props.organization}</div>
        <div className="skills text-sm">Skills: {props.skills}</div>
        Credential URL/Id: 
        <a className="url text-sm text-blue-500" href={props.url} target='blank'> {props.url}</a>
    </div>
  )
}

export default Certificate