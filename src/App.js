import React from 'react'
import './App.css'
import { WEBSITE_NAME, WEBSITE_DESCRIPTION, HEADER_IMG, BUTTON1, BUTTON2, BUTTON_STYLES} from './config'

 function App() {
  return (
    <div>
      <h1 className="text-4xl my-5 mx-8">{WEBSITE_NAME}</h1>
      <p className=" text-xl mx-20">
       {WEBSITE_DESCRIPTION}
      </p>

      <img src={HEADER_IMG}  className="h-130 object-cover mx-auto block"/>

      <div className='flex justify-center'>
        <button className="bg-blue-500 m-5 px-4 py-1 text-white " style={BUTTON_STYLES}>{BUTTON1}</button>
        <button className="bg-blue-500 m-5 px-4 py-1 text-white " style={BUTTON_STYLES}>{BUTTON2}</button>
      </div>
      </div>
  )
 }

 export default App

