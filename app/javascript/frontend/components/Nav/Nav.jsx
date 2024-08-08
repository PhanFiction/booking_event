import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Hamburger from '../Hamburger/Hamburger';
import NavItem from "./NavItem";

const Nav = () => {
  const [isClosed, setCloseMenu] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('/check_authentication');
        if (response.data.authenticated) {
          setUser(response.data.user)
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    }
    checkAuthentication();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.delete('/users/sign_out', {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('[name=csrf-token]').content
        },
        withCredentials: true
      });

      if (response) {
        setUser('');
        window.location.href = '/users/sign_in'
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <nav className="w-full text-white bg-bluePurple p-6 fixed top-0 left-0">
      <ul className="flex gap-4 items-center w-full items-center">
        <Link
          to="/"
          className="btn btn-lg custom-button"
          role="button"
        >
          <li>
            <h3 className="font-bold text-2xl">FlightBooker</h3>
          </li>
        </Link>
        <div className="ml-auto relative">
        {
          user ? 
          <button onClick={() => {setCloseMenu(!isClosed)}}>
            <Hamburger />
          </button> 
          : 
          <a href="users/sign_in">Sign In</a>
        }
          {isClosed ? <NavItem user={user} handleLogout={handleLogout} /> : null}
        </div>
      </ul>
    </nav>
  )
}

export default Nav;