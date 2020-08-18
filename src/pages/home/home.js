import React, { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      {`${user.username},${user.firstname},${user.lastname}`}
      Get help from a certified nutritionist to achieve your wellness goals!
    </div>
  );
};

export default Home;
