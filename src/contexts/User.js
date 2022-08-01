import { createContext, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getUserId = async () => {
    try {
      const data = await axios.get('https://api-3sxs63jhua-uc.a.run.app/v1/userId');
      setUserId(data.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserId();
  }, [loading]);

  return <UserContext.Provider value={{ userId, error }}>{children}</UserContext.Provider>;
};

export default UserProvider;
