import React, { useEffect, useState } from 'react';
import axios from 'axios';

const withAuthentication = (WrappedComponent) => {
  const WithAuthentication = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const checkAuthentication = async () => {
        try {
          const response = await axios.get('/check_authentication');
          if (response.data.authenticated) {
            setIsAuthenticated(true);
          } else {
            window.location.href = '/users/sign_up'; // Redirect to sign up page if not authenticated
          }
        } catch (error) {
          console.error('Error checking authentication:', error);
          window.location.href = '/users/sign_in'; // Redirect to sign in page on error
        }
      };

      checkAuthentication();
    }, []);

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthentication;
};

export default withAuthentication;
