import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const withAuthentication = (WrappedComponent) => {
  const WithAuthentication = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuthentication = async () => {
        try {
          const response = await axios.get('/api/check_authentication');
          if (response.data.authenticated) {
            setIsAuthenticated(true);
          } else {
            navigate('/users/sign_up'); // Redirect to login page if not authenticated
          }
        } catch (error) {
          console.error('Error checking authentication:', error);
          navigate('/users/sign_in');
        }
      };

      checkAuthentication();
    }, [navigate]);

    if (!isAuthenticated) {
      return null; // Or render a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthentication;
};

export default withAuthentication;
