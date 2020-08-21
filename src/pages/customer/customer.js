import React, { useState, useEffect } from 'react';

import {
  Layout,
  Greetings,
  CustomerCalendar,
  MyDietitian,
  MealDay,
} from './customer-components';
import * as Api from '../../api';
import groupedBy from '../../utils/groupedBy';
import Loading from '../../components/loading';

const INITIAL_DATA = {
  firstname: '',
  start: '',
  end: '',
  dietitian: {
    specialty: '',
    firstname: '',
    lastname: '',
  },
  meal: {
    description: '',
    plan: [],
    remarks: '',
  },
};

const Customer = () => {
  const [info, setInfo] = useState(INITIAL_DATA);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    // implementing api in here to add it to customer
    (async () => {
      setOpened(true);
      const accessToken = localStorage.getItem('access_token');
      const { data } = await Api.getCustomer(accessToken);

      setInfo({
        start: data.meal_plan.start_date,
        end: data.meal_plan.end_date,
        meal: {
          description: data.meal_plan.description,
          plan: groupedBy('meal_time', data.meal_plan.entries),
        },
        dietitian: {
          specialty: data.dietitian.specialty.replace('_', ' '),
          firstname: data.dietitian.user.first_name,
          lastname: data.dietitian.user.last_name,
        },
        firstname: data.user.first_name,
      });
      setOpened(false);
      console.log('data', data);
    })();
  }, []);

  console.log(info.meal);

  return (
    <Layout>
      <Greetings firstname={info.firstname} />
      <CustomerCalendar start={info.start} end={info.end} />
      <MyDietitian dietitian={info.dietitian} />
      <MealDay meal={info.meal} />
      {opened && <Loading onClose={() => setOpened(false)} />}
    </Layout>
  );
};

export default Customer;
