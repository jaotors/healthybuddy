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
      Hello {firstname}!
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
      <Calendar dates={[[start, end]]} range />
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
          {dietitian.firstname} {dietitian.lastname}
        </Text>
        <Text
          css={`
            text-transform: capitalize;
          `}
        >
          Specialty: {dietitian.specialty}
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
        ${meal.plan.length < 1 && `display: grid; place-items: center;`}
      `}
    >
      {meal.plan.length > 0 ? (
        <>
          <Box
            direction="column"
            css={`
              margin-bottom: 15px;
            `}
          >
            <Heading margin="none">Meal for the Day</Heading>
            <Text>{meal.description}</Text>
          </Box>
          <Box
            direction="column"
            css={`
              ${meal.plan.length < 1 && `display: grid; place-items: center;`}
              & > div:not(:last-child) {
                margin-bottom: 20px;
              }
            `}
          >
            {meal.plan.map((m, key) => (
              <Box direction="column" key={key}>
                <Heading
                  level={4}
                  margin="none"
                  css={`
                    text-transform: capitalize;
                  `}
                >
                  {m.time}{' '}
                  {m.description && (
                    <span
                      css={`
                        font-size: 13px;
                        font-weight: normal;
                        text-transform: none;
                        vertical-align: middle;
                      `}
                    >
                      ({m.description})
                    </span>
                  )}
                </Heading>
                <Text>
                  {m.meal.map((f) => `${f.food} (${f.calories} kcal) `)}
                </Text>
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <Heading level="3">No Meal Plan yet</Heading>
      )}
    </div>
  );
};
