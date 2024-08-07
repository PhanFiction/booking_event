import React, { useState } from "react";
import Hamburger from '../Hamburger/Hamburger';
import NavItem from "./NavItem";

const Nav = () => {
  const [isClosed, setCloseMenu] = useState(false);
  return (
    <nav className="w-full text-white bg-bluePurple p-6 fixed top-0 left-0">
      <ul className="flex gap-4 items-center w-full items-center">

        <li>
          <h3 className="font-bold text-2xl">FlightBooker</h3>
        </li>

        <div className="ml-auto relative">
          <button onClick={() => {setCloseMenu(!isClosed)}}>
            <Hamburger />
          </button>
          {isClosed ? <NavItem /> : null}
        </div>
      </ul>
    </nav>
  )
}

export default Nav;