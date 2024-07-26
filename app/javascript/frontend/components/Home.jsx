import React from "react";
import { Link } from "react-router-dom";

export default function Home () {
  React.useEffect(() => {
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
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <h1 className="display-4">Sign Up</h1>
      <hr className="my-4" />
      <a href="/users/sign_up">Sign up</a>
{/*       <Link
        to="/users/sign_up"
        className="btn btn-lg custom-button"
        role="button"
      >
        React Sign Up
      </Link> */}
    </div>
  )
}