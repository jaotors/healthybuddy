import React, { useState, useEffect } from 'react';

import {
  Layout,
  Greetings,
  CustomerCalendar,
  MyDietitian,
  MealDay,
} from './customer-components';
import * as Api from '../../api';
import groupedByMealTime from '../../utils/grouped-by-meal-time';
import Loading from '../../components/loading';
import moment from 'moment';

const INITIAL_DATA = {
  firstname: '',
  start: moment().format('YYYY-MM-DD'),
  end: moment().format('YYYY-MM-DD'),
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

      setInfo((prevInfo) => ({
        start: data.meal_plan?.start_date || moment().format('YYYY-MM-DD'),
        end: data.meal_plan?.end_date || moment().format('YYYY-MM-DD'),
        meal: data.meal_plan
          ? {
              description: data.meal_plan.description,
              plan: groupedByMealTime(data.meal_plan.entries),
            }
          : prevInfo.meal,
        dietitian: {
          specialty: data.dietitian.specialty.replace('_', ' '),
          firstname: data.dietitian.user.first_name,
          lastname: data.dietitian.user.last_name,
        },
        firstname: data.user.first_name,
      }));
      setOpened(false);
    })();
  }, []);

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
