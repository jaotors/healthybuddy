import React, { useState, useCallback } from 'react';
import styled from 'styled-components/macro';
import {
  Box,
  Heading,
  Text,
  FormField,
  TextInput,
  Select,
  Form,
} from 'grommet';

import Button from '../../components/button';

export const GetStarted = ({ onClick }) => (
  <Box direction="column" align="center">
    <Heading
      textAlign="center"
      color="custom-text"
      css={`
        font-size: 120px;
        line-height: inherit;
        margin-bottom: 50px;
      `}
      margin="none"
    >
      Be the best Version of You
    </Heading>
    <Button
      label="Get Started"
      onClick={onClick}
      css={`
        width: 35%;
        margin: auto;
        font-size: 35px;
        padding: 20px;
        font-weight: bold;
        color: #444;
        transform: capitalize;
      `}
    />
  </Box>
);

export const BodyGoals = ({ onClick }) => (
  <Box direction="column">
    <Heading
      margin="none"
      alignSelf="center"
      color="custom-text"
      css={`
        margin-bottom: 4rem;
      `}
    >
      My Goal is...
    </Heading>
    <Box direction="row" justify="between">
      <Box
        direction="column"
        css={`
          width: 40%;
        `}
        onClick={() => onClick('gain muscle mass')}
      >
        <div
          css={`
            margin-bottom: 10px;
          `}
        >
          <img
            css={`
              width: 100%;
              height: 428px;
              border-radius: 15px;
            `}
            src="https://miro.medium.com/max/11232/1*xk4zmUpGTcs3HpevFU9QgQ.jpeg"
            alt="Muscle Mass"
          />
        </div>
        <Button
          label="Gain Muscle Mass"
          onClick={(e) => {
            e.stopPropagation();
            onClick('gain muscle mass');
          }}
          css={`
            width: 100%;
            font-size: 35px;
            padding: 20px;
            font-weight: bold;
            color: #444;
            transform: capitalize;
          `}
        />
      </Box>
      <Box
        direction="column"
        css={`
          width: 40%;
        `}
        onClick={() => onClick('maintain weight')}
      >
        <div
          css={`
            margin-bottom: 10px;
          `}
        >
          <img
            css={`
              width: 100%;
              height: 428px;
              border-radius: 15px;
              border: 1px solid rgba(0, 0, 0, 0.1);
            `}
            src="https://www.fashionlady.in/wp-content/uploads/2017/05/ways-to-become-slim-naturally.jpg"
            alt="Maintain Weight"
          />
        </div>
        <Button
          label="Maintain Weight"
          onClick={(e) => {
            e.stopPropagation();
            onClick('maintain weight');
          }}
          css={`
            width: 100%;
            font-size: 35px;
            padding: 20px;
            font-weight: bold;
            color: #444;
            transform: capitalize;
          `}
        />
      </Box>
    </Box>
  </Box>
);

export const SelectDietian = ({ onClick, dietitianList }) => {
  return (
    <Box direction="row" justify="between" alignContent="center">
      <Heading
        color="custom-text"
        margin="none"
        css={`
          font-size: 90px;
          line-height: inherit;
          align-self: center;
        `}
      >
        Choose your Dietitian
      </Heading>
      <Box
        direction="column"
        justify="center"
        css={`
          width: 50%;
          & > div:not(:last-child) {
            margin-bottom: 10px;
          }
        `}
      >
        {dietitianList.map((d, key) => (
          <Box
            key={`d_${d.user.id}_${key}`}
            direction="row"
            pad="small"
            border={{ color: 'custom-primary', side: 'all' }}
            css={`
              border-radius: 5px;
              cursor: pointer;
            `}
            onClick={() => onClick(d.id)}
          >
            <div
              css={`
                min-width: 100px;
                max-width: 15%;
                margin-right: 10px;
              `}
            >
              <img
                css={`
                  width: 100%;
                  height: 100%;
                `}
                src="https://i.pinimg.com/originals/be/2d/30/be2d307e7f0004d3b014ee1120756a93.png"
                alt="avatar"
              />
            </div>
            <Box
              direction="column"
              justify="center"
              css={`
                & > span:not(:last-child) {
                  margin-bottom: 5px;
                }
              `}
            >
              <Text size="medium" weight="bold">
                {d.user.firstname} {d.user.lastname}
              </Text>
              <Text size="small">Registered Dietitian</Text>
              <Text size="small">{d.yearsExp} Years of Experience</Text>
              <Text
                size="small"
                css={`
                  text-transform: capitalize;
                `}
              >
                {d.specialty}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const RegisterPage = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retryPassword, setRetryPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [gender, setGender] = useState('');
  const [preferences, setPreferences] = useState('');
  const [allergies, setAllergies] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState('');

  const onSubmit = useCallback(() => {
    onRegister({
      email,
      password,
      firstname,
      lastname,
      gender,
      preferences,
      allergies,
      weight,
      height,
    });
  }, [
    email,
    password,
    firstname,
    lastname,
    gender,
    preferences,
    allergies,
    weight,
    height,
  ]);

  return (
    <Box direction="row" justify="between" alignContent="center">
      <Heading
        color="custom-text"
        margin="none"
        css={`
          font-size: 90px;
          line-height: inherit;
          align-self: center;
        `}
      >
        Kindly provide us your info
      </Heading>
      <Box
        direction="column"
        justify="center"
        css={`
          width: 60%;
          & > div:last-child {
            margin-bottom: 0;
          }
        `}
      >
        <Form onSubmit={onSubmit} validate="blur">
          <FormField name="email" label="Email" required>
            <TextInput
              id="email"
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </FormField>
          <Box direction="row" gap="small" required>
            <FormField
              name="password"
              label="Password"
              css={`
                width: 100%;
              `}
              required
            >
              <TextInput
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </FormField>
            <FormField
              name="retry-password"
              label="Retry Password"
              css={`
                width: 100%;
              `}
              required
            >
              <TextInput
                id="retry-password"
                type="password"
                placeholder="Retry Password"
                name="retry-password"
                value={retryPassword}
                onChange={(evt) => setRetryPassword(evt.target.value)}
              />
            </FormField>
          </Box>
          <Box direction="row" gap="small">
            <FormField
              name="firstname"
              label="First Name"
              css={`
                width: 100%;
              `}
              required
            >
              <TextInput
                id="firstname"
                placeholder="First Name"
                name="firstname"
                value={firstname}
                onChange={(evt) => setFirstname(evt.target.value)}
              />
            </FormField>
            <FormField
              name="lastname"
              label="Last Name"
              css={`
                width: 100%;
              `}
              required
            >
              <TextInput
                id="lastname"
                placeholder="Last Name"
                name="lastname"
                value={lastname}
                onChange={(evt) => setLastname(evt.target.value)}
              />
            </FormField>
          </Box>
          <FormField label="Gender">
            <Select
              id="gender"
              options={['Male', 'Female']}
              value={gender}
              onChange={({ option }) => setGender(option)}
            />
          </FormField>
          <Box direction="row" gap="small">
            <FormField label="Meal Preferences">
              <Select
                id="preferences"
                options={['Vegan', 'Pescetarian', 'Gluten-Free', 'Muscle Gain']}
                value={preferences}
                onChange={({ option }) => setPreferences(option)}
              />
            </FormField>
            <FormField
              name="allergies"
              label="Allergies"
              css={`
                width: 100%;
              `}
            >
              <TextInput
                id="allergies"
                placeholder="Leave it blank if none"
                name="allergies"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
              />
            </FormField>
          </Box>

          <Box direction="row" gap="small">
            <FormField
              name="weight"
              label="Weight (kgs)"
              css={`
                width: 100%;
              `}
              required
            >
              <TextInput
                id="weight"
                type="number"
                placeholder="Weight"
                name="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </FormField>
            <FormField
              name="height"
              label="Height"
              css={`
                width: 100%;
              `}
              required
            >
              <TextInput
                id="height"
                placeholder="Height"
                name="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </FormField>
          </Box>
          <Box justify="center">
            <Button
              label="Register"
              type="submit"
              css={`
                width: 45%;
                margin: 20px auto 0;
                font-size: 20px;
              `}
            />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};
