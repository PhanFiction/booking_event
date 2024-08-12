import React, { useState, useEffect } from "react";
import axios from "axios";

const Airport = () => {
  const [userInput, setUserInput] = useState('');

  const borderStyle = {
    'hidden': 'hidden',
    'block': 'block'
  }

  useEffect(() => {
    const searchAirports = async () => {
      if (userInput.length > 0) {
        const res = await axios.get('/airports', {
          params: {
            airport_code: userInput.toUpperCase()
          }
        })
        console.log(res.data);
      }
    }
    searchAirports();
  }, [userInput])

  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <input
            type="search"
            placeholder='Search Airport'
            className={`w-72 md:w-96 p-2 bg-transparent border-2 border custom-box-shadow rounded-md`}
            value={userInput}
            onChange={(e) => {setUserInput(e.target.value)}}
          />
          <ul className={`absolute w-full h-80 top-11 overflow-auto rounded-md z-20 ${userInput === '' ? borderStyle['hidden'] : borderStyle['block'] }`}>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Airport;