import React, { useState, useEffect } from "react";
import ModifiedDate from "./Date/ModifiedDate";
import axios from "axios";

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [airportCodes, setAirportCodes] = useState([]);
  const [airport, setAirport] = useState({});
  const [isClose, setClose] = useState(true);
  const [flights, setFlights] = useState([]);

  const borderStyle = {
    'hidden': 'hidden',
    'block': 'block'
  }

  useEffect(() => {
    const isPageReloaded = localStorage.getItem('isPageReloaded');
    
    if (isPageReloaded) {
      console.log('Page was refreshed');
      // Handle page refresh logic here
    }

    // Set the flag to true on component mount
    localStorage.setItem('isPageReloaded', 'true');

    // Optionally clear the flag on component unmount
    return () => {
      localStorage.removeItem('isPageReloaded');
    };
  }, []);

  useEffect(() => {
    const searchAirports = async () => {
      if (userInput.length > 0 && isClose) {
        const res = await axios.get('/airports', {
          params: {
            airport_code: userInput.toUpperCase()
          }
        })
        setAirportCodes(res.data);
      } else {
        setClose(true);
      }
    }
    searchAirports();
  }, [userInput])

  useEffect(() => {
    const fetchFlights = async () => {
      const res = await axios.get('/flights', {
        params: {
          departure_airport_id: airport.id
        }
      })
      setFlights(res.data);
    }
    fetchFlights();
  }, [airport])

  
  const closeSearchBar = (data) => {
    setClose(false);
    setUserInput(data.airport_code);
    setAirport({ id: data.id, airport_code: data.airport_code })
    setAirportCodes([]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = document.querySelector('meta[name="csrf-token"]').content;

    const res = await axios.post('/api/bookings/create', {
        flight_id: airport.id
      },
      {
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json",
        }
      },
    )
    console.log(res.data);
  }

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
          <ul className={`absolute w-full top-11 overflow-auto rounded-md z-20 ${userInput === '' ? borderStyle['hidden'] : borderStyle['block'] }`}>
            {
              airportCodes?.map((item, index) => 
                <li className="text-white bg-black p-2 hover:text-lighterGreen hover:cursor-pointer" key={index} onClick={()=>{closeSearchBar(item)}}>
                  { item.airport_code }
                </li>
              )
            }
          </ul>
        </div>
      </div>

      <div className="bg-white-05 p-2 md:p-8 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center sm:justify-start">
          {
            flights?.map((item, index) => 
              <article className="flex flex-col items-start bg-gradient-white border rounded" key={index}>
                <div className="flex">
                  <p className="text-center p-4 text-sm">
                    From: <span className="font-semibold">{ item.departure_airport.airport_code }</span>
                  </p>
                  <p className="text-center p-4 text-sm">
                    To: <span className="font-semibold">{ item.arrival_airport.airport_code }</span>
                  </p>
                </div>

                <div className="text-center p-4 text-sm flex gap-2">
                  Date: <p className="font-semibold"><ModifiedDate date={item.date} /></p>
                </div>

                <div className="text-center p-4 text-sm flex gap-2">
                  Duration: <p className="font-semibold">{item.duration}</p> hour
                </div>

                <button className="p-2 border-2 border-white border rounded-md m-2" onClick={handleSubmit}>
                  Bookmark
                </button>
              </article>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Home;