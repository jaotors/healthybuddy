import React, { useState, useEffect } from 'react';
import {
  Layout,
  Greetings,
  CustomerCalendar,
  MyDietitian,
  MealDay,
} from './customer-components';

const Customer = () => {
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
