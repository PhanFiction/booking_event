import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ModifiedDate from './Date/ModifiedDate';

export default function Booking() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('/api/bookings/index');
        setBookings(res.data);
      } catch (e) {
        navigate("/");
      }
    }
    fetchBookings();
  }, [])

  return (
    <div className="bg-white-05 p-2 md:p-8 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center sm:justify-start">
        {
          bookings?.map((item, index) => 
            <article className="flex flex-col items-start bg-gradient-white border rounded" key={index}>
              <div className="flex">
                <p className="text-center p-4 text-sm">
                  From: <span className="font-semibold">{ item.flight.departure_airport.airport_code }</span>
                </p>
                <p className="text-center p-4 text-sm">
                  To: <span className="font-semibold">{ item.flight.arrival_airport.airport_code }</span>
                </p>
              </div>

              <div className="text-center p-4 text-sm flex gap-2">
                Date: <p className="font-semibold"><ModifiedDate date={item.flight.date} /></p>
              </div>

              <div className="text-center p-4 text-sm flex gap-2">
                Duration: <p className="font-semibold">{item.flight.duration}</p> hour
              </div>

              <button className="p-2 border-2 border-white border rounded-md m-2">
                Bookmark
              </button>

            </article>
          )
        }
      </div>
    </div>
  )
}
