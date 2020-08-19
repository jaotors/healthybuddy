import React, { useState, useEffect, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  // initial state of user
  const [user, setUser] = useState({});

  useEffect(() => {
    /* fetch initial state of user here */
    const test = setTimeout(() => {
      setUser({
        username: 'fakerusername',
        firstname: 'fakerfirstname',
        lastname: 'fakerlastname',
      });
    }, 5000);

    return () => {
      clearTimeout(test);
    };
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
