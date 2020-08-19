import React, { useState, useCallback, useContext } from 'react';
import styled from 'styled-components/macro';
import { DietitianContext } from '../../contexts/dietitians-context';
import { Box, Button } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

import { registerCustomer } from '../../api';
import {
  GetStarted,
  BodyGoals,
  SelectDietian,
  RegisterPage,
} from './home-components';

const INITIAL_DATA = {
  goal: '',
  dietitian: -1,
};

const Home = () => {
  const [steps, setSteps] = useState(0);
  const [data, setData] = useState(INITIAL_DATA);
  const [dietitians] = useContext(DietitianContext);

  const onStart = () => {
    setSteps(1);
  };

  const onClickGoals = (type) => {
    setData((state) => ({ ...state, goal: type }));
    setSteps((state) => ++state);
  };

  const onSelectDietitian = (id) => {
    setData((state) => ({ ...state, dietitian: id }));
    setSteps((state) => ++state);
  };

  const onBack = () => {
    setSteps((state) => --state);
  };

  const onRegister = useCallback(
    async (meta) => {
      setSteps((state) => ++state);
      const test = await registerCustomer({
        email_address: meta.email,
        first_name: meta.firstname,
        last_name: meta.lastname,
        password: meta.password,
        weight: Number(meta.weight),
        height: meta.height,
        allergy: meta.allergies,
        dietary_preference: meta.preferences,
        gender: meta.gender,
        goal: data.goal,
        dietitian_id: data.dietitian,
      });
    },
    [data]
  );

  const onReset = () => {
    setSteps(0);
    setData(INITIAL_DATA);
  };

  const renderView = useCallback(() => {
    switch (steps) {
      case 1:
        return <BodyGoals onClick={onClickGoals} />;
      case 2:
        return (
          <SelectDietian
            onClick={onSelectDietitian}
            dietitianList={dietitians}
          />
        );
      case 3:
        return <RegisterPage onRegister={onRegister} />;

      default:
        return <GetStarted onClick={onStart} />;
    }
  }, [steps, dietitians, onRegister]);

  return (
    <Box
      css={`
        width: 90%;
        height: 90%;
        position: relative;
      `}
      justify="center"
    >
      {steps > 0 && (
        <Button
          css={`
            position: absolute;
            top: 0;
            left: 0;
            padding: 0;
          `}
          icon={<LinkPrevious />}
          onClick={onBack}
        />
      )}
      {renderView()}
    </Box>
  );
};

export default Home;
