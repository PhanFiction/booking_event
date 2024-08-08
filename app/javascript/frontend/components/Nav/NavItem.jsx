import React from 'react';
import { Link } from "react-router-dom";

export const NavItem = ({ user, handleLogout }) => {
  return (
    <div className="w-[150px] bg-bluePurple absolute top-8 right-0 p-4 rounded-md outline">
      <ul className="flex flex-col">
        <Link
          to="/"
          className="btn btn-lg custom-button"
          role="button"
        >
          { user.username }
        </Link>
        <hr />
        <a href="/users/sign_up">Sign Up</a>
        <Link
          to="/recipes"
          className="btn btn-lg custom-button"
          role="button"
        >
          Bookmarks
        </Link>
        <Link
          to="/recipes"
          className="btn btn-lg custom-button"
          role="button"
        >
          <button onClick={handleLogout}>Logout</button>
        </Link>
      </ul>
    </div>
  )
}

export default NavItem