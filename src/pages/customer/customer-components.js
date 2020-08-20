import React from 'react';
import styled from 'styled-components/macro';
import { Box, Heading, Text, Calendar } from 'grommet';

export const Layout = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: 'greetings calendar' 'mydietitian mealday';
`;

export const Greetings = ({ firstname }) => (
  <div
    css={`
      grid-area: greetings;
      padding: 20px;
      border-bottom: 1px solid #444;
      border-right: 1px solid #444;
    `}
  >
    <Heading
      margin="none"
      css={`
        margin-bottom: 23px;
      `}
    >
      Hello Joshua{/* {firstname} */}!
    </Heading>
  </div>
);

export const CustomerCalendar = ({ start, end }) => {
  return (
    <div
      css={`
        display: grid;
        grid-area: calendar;
        place-items: center;
        border-bottom: 1px solid #444;
        border-left: 1px solid #444;
      `}
    >
      <Calendar
        disabled={true}
        dates={[
          ['2020-04-03', '2020-04-08'],
          ['2020-05-03', '2020-05-08'],
        ]}
        range
      />
    </div>
  );
};

export const MyDietitian = ({ dietitian }) => {
  return (
    <div
      css={`
        grid-area: mydietitian;
        padding: 20px;
        border-top: 1px solid #444;
        border-right: 1px solid #444;
      `}
    >
      <Heading
        margin="none"
        css={`
          margin-bottom: 23px;
        `}
      >
        My Dietitian
      </Heading>
      <Box direction="column">
        <div
          css={`
            width: 240px;
          `}
        >
          <img
            css={`
              width: 100%;
              height: 100%;
            `}
            src="https://placedog.net/500"
            alt=""
          />
        </div>
        <Text>
          Joshua Turingan
          {/* {dietitian && dietitian.firstname} {dietitian && dietitian.lastname} */}
        </Text>
        <Text>
          Specialty: Sports Nutrition{/* {dietitian && dietitian.specialty} */}
        </Text>
      </Box>
    </div>
  );
};

export const MealDay = ({ meal }) => {
  return (
    <div
      css={`
        grid-area: mealday;
        padding: 20px;
        border-top: 1px solid #444;
        border-left: 1px solid #444;
      `}
    >
      <Heading margin="none">Meal for the Day</Heading>
      <Box direction="column">
        <Box direction="column">
          <Heading level={4}>Breakfast</Heading>
          <Text>
            Boiled Eggs (100 kcal), Orange Juice (150 kcal), Brown Rice (250
            kcal){/* {meal && meal.breakfast} */}
          </Text>
        </Box>
        <Box direction="column">
          <Heading level={4}>Lunch</Heading>
          <Text>
            Boiled Eggs (100 kcal), Orange Juice (150 kcal), Brown Rice (250
            kcal){/* {meal && meal.lunch} */}
          </Text>
        </Box>
        <Box direction="column">
          <Heading level={4}>Dinner</Heading>
          <Text>
            Boiled Eggs (100 kcal), Orange Juice (150 kcal), Brown Rice (250
            kcal){/* {meal && meal.dinner} */}
          </Text>
        </Box>
      </Box>
    </div>
  );
};
