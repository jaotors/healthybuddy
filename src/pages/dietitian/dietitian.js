import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Box, List, Text } from 'grommet';
import 'styled-components/macro';

import { UserContext } from '../../contexts/user-context';
import * as Api from '../../api';
import Button from '../../components/button';

const Dietitian = () => {
  const [user, setUser] = useContext(UserContext);
  const [customers, setCustomers] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.user) {
      if (user.user.type !== 'dietitian') {
        navigate('/');
      }
    }
  }, [user, navigate]);

  const fetchDietitian = useCallback(async () => {
    const accessToken = await localStorage.getItem('access_token');
    const { data } = await Api.getDietitian(accessToken);
    await setUser(data);
  }, [setUser]);

  useEffect(() => {
    fetchDietitian();
  }, [fetchDietitian]);

  useEffect(() => {
    if (user.customers) {
      setCustomers(user.customers);
    }
  }, [user]);

  const onCreatePlan = (customer) => {
    navigate('/create-meal-plan', { state: { ...customer } });
  };

  return (
    <Box
      css={`
        overflow-y: scroll;
        max-height: 850px;
        overflow-x: hidden;

        &::-webkit-scrollbar {
          width: 3px;
        }
        &::-webkit-scrollbar-track {
          background: transparent;
        }
        &::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
        }
      `}
    >
      {customers && (
        <List data={customers} pad="medium">
          {(datum, index) => (
            <Box
              key={index}
              direction="row"
              gap="large"
              size="xsmall"
              align="center"
            >
              <Box width="33%">
                <Text weight="bold">
                  {`${datum.user.first_name} ${datum.user.last_name}`}
                </Text>
                <Text>Goal: {datum.goal}</Text>
                <Text>Allergy: {datum.allergy}</Text>
                <Text>Height: {datum.height}</Text>
              </Box>
              <Box width="33%">
                <Text>Weight: {datum.weight}</Text>
                <Text>Gender: {datum.gender}</Text>
                <Text>Dietary Preferences: {datum.dietary_preference}</Text>
              </Box>
              <Box width="33%" justify="end" align="end" alignContent="end">
                <Button
                  color="custom-primary"
                  onClick={() => onCreatePlan(datum)}
                  label="Create Meal Plan"
                />
              </Box>
            </Box>
          )}
        </List>
      )}
    </Box>
  );
};

export default Dietitian;
