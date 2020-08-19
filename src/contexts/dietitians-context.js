import React, { useState, useEffect, createContext } from 'react';
import { getDietitians } from '../api';

export const DietitianContext = createContext();

export const DietitianProvider = (props) => {
  // initial state of user
  const [dietitians, setDietitians] = useState([]);

  useEffect(() => {
    /* fetch initial state of user here */
    (async () => {
      const data = await getDietitians();
      data &&
        setDietitians(
          data.map((d) => ({
            id: d.id,
            specialty: d.specialty.replace('_', ' '),
            yearsExp: d.years_of_experience,
            user: {
              id: d.user.id,
              email: d.user.email,
              type: d.user.type,
              firstname: d.user.first_name,
              lastname: d.user.last_name,
            },
          }))
        );
    })();
  }, []);

  return (
    <DietitianContext.Provider value={[dietitians, setDietitians]}>
      {props.children}
    </DietitianContext.Provider>
  );
};
