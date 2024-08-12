import React, { useState, useContext } from 'react';
import { AlertContext } from '../../context';
// import PropTypes from 'prop-types';

/**
 * Alert component to display differnt types of alert messages.
 * 
 * @example
 * const alertType = 'success';
 * const alertMessage = 'This is a success message!';
 * 
 * @typedef {Object} AlertProps
 * @property {('success'|'info'|'warning'|'error')} alertType - The type of alert to display.
 * @property {string} alertMessage - The message to display in the alert.
 *
 * @param {AlertProps} props - The props for the Alert component
 *
 */
const Alert = () => {
  let className;
  let svgClassName;
  const [showAlert, setShowAlert] = useState(true);
  const { alertType, alertMessage } = useContext(AlertContext);

  switch (alertType) {
    case 'success':
      className = 'bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 w-3/4 sm:w-1/4 mx-auto mt-4';
      svgClassName = 'text-green-600';
      break;
    case 'info':
      className = 'bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100';
      svgClassName = 'text-blue-600';
      break;
    case 'warning':
      className = 'bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100';
      svgClassName = 'text-yellow-600';
      break;
    case 'error':
      className = 'bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100';
      svgClassName = 'text-red-600';
      break;
    default:
      className = '';
  }

  return (
    <>
      {
        showAlert &&
        (alertType ? (
          <div 
            role="alert" 
            className={`${className} p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-${alertType === 'success' ? 'green' : alertType === 'info' ? 'blue' : alertType === 'warning' ? 'yellow' : 'red'}-200 dark:hover:bg-${alertType === 'success' ? 'green' : alertType === 'info' ? 'blue' : alertType === 'warning' ? 'yellow' : 'red'}-800 transform hover:scale-105 hover:cursor-pointer w-3/4 sm:w-1/4 absolute inset-x-0 mx-auto`}
            onClick={() => { setShowAlert(false)}} 
          >
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`h-5 w-5 flex-shrink-0 mr-2 ${svgClassName}`} xmlns="http://www.w3.org/2000/svg">
              <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <p className="text-xs font-semibold">{alertMessage}</p>
            <div className="mr-0 ml-auto text-gray-600 hover:text-gray-900">
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        ) : null)
      }
    </>
  );
}

/* Alert.propTypes = {
  alertType: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  alertMessage: PropTypes.string
}; */

export default Alert;