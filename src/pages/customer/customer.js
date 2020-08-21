import React, { useState, useEffect } from 'react';
import {
  Layout,
  Greetings,
  CustomerCalendar,
  MyDietitian,
  MealDay,
} from './customer-components';

import * as Api from '../../api';

const Customer = () => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    // implementing api in here to add it to customer
    (async () => {})();
  }, []);

  return (
    <Layout>
      <Greetings />
      <CustomerCalendar />
      <MyDietitian />
      <MealDay />
    </Layout>
  );
};

export default Customer;
