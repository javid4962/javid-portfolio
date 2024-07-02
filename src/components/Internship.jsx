import React from 'react'
import { IoCalendar } from "react-icons/io5";

function Internship(props) {
    return (
        <div className="internship_1 p-3 my-1">
            <span className='flex items-center justify-between'>
                <h1 className='font-bold text-lg'>{props.name}</h1>
                <span className='flex justify-center items-center gap-3'>
                    <IoCalendar /><h4 className='font-bold text-md'>{props.duration}</h4>
                </span>
            </span>
            <h6 className='font-semibold text-md'>{props.organization}</h6>
            <ul className='px-5 text-sm'>
                {props.items.map((item, index) => (
                    <li style={{ listStyle: "disc" }} key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Internship