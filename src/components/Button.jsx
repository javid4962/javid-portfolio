import React from 'react'

import {Ripple,initTWE,} from "tw-elements";
initTWE({ Ripple });


function Button(props) {
  return (
    <button type="button"
                data-twe-ripple-init
                data-twe-ripple-color="black"
                className="inline-block rounded bg-white text-black border border-1 border-black px-2 sm:px-3 md:px-5 lg:px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-primary-0 transition duration-150 ease-in-out hover:bg-violet-500 hover:text-white hover:shadow-white hover:border-black focus:bg-white focus:text-black focus:shadow-white focus:outline-none focus:ring-0 active:bg-white active:text-black active:shadow-black motion-reduce:transition-none dark:shadow-white/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-white-strong m-1">{props.skill}</button>
  )
}

export default Button