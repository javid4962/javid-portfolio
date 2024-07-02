import Profile from './components/Profile';

import Details from './components/Details';

import './App.css'

import {Ripple,initTWE,} from "tw-elements";
initTWE({ Ripple });


var hand = "https://img.icons8.com/?size=100&id=78597&format=png&color=000000"

function App() {

  return (
    <div className='dark:bg-gray-800 text-black cursor-[url("https://img.icons8.com/?size=100&id=78597&format=png&color=000000")]'>
      <section className="flex flex-col md:flex-row p-5 gap-5">
        <Profile />
        <Details />
      </section>
    </div>
  )
}

export default App
