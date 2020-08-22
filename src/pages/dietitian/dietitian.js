import { Box, Button, List, Text, TextInput } from 'grommet'
import React, { useContext, useEffect, useState } from 'react'

import { UserContext } from '../../contexts/user-context'
import { useNavigate } from 'react-router'

const fakeNutritionist = {
  data: {
    id: 1,
    created_at: '2020-08-18T03:07:05.89824Z',
    updated_at: '2020-08-18T03:07:05.89824Z',
    deleted_at: null,
    specialty: 'sports_nutrition',
    years_of_experience: 10,
    customers: [
      {
        id: 2,
        created_at: '2020-08-19T16:37:18.232301Z',
        updated_at: '2020-08-19T16:37:18.232301Z',
        deleted_at: null,
        goal: 'maintain weight',
        allergy: '',
        weight: 0,
        height: '5\'11"',
        dietary_preference: '',
        gender: '',
        user_id: 4,
        user: {
          id: 4,
          created_at: '2020-08-19T16:37:18.225724Z',
          updated_at: '2020-08-19T16:37:18.225724Z',
          deleted_at: null,
          email: 'asdf@gmailc.om',
          first_name: 'asdd',
          last_name: 'fdasadf',
          type: 'customer'
        },
        dietitian_id: 1,
        dietitian: null,
        meal_plan: null
      },
      {
        id: 3,
        created_at: '2020-08-19T16:39:30.297028Z',
        updated_at: '2020-08-19T16:39:30.297028Z',
        deleted_at: null,
        goal: 'maintain weight',
        allergy: '',
        weight: 0,
        height: "5'11",
        dietary_preference: '',
        gender: '',
        user_id: 5,
        user: {
          id: 5,
          created_at: '2020-08-19T16:39:30.290874Z',
          updated_at: '2020-08-19T16:39:30.290874Z',
          deleted_at: null,
          email: 'asdf@gmail.zom',
          first_name: 'jos',
          last_name: 'uaaas',
          type: 'customer'
        },
        dietitian_id: 1,
        dietitian: null,
        meal_plan: null
      },
      {
        id: 4,
        created_at: '2020-08-19T16:42:47.453167Z',
        updated_at: '2020-08-19T16:42:47.453167Z',
        deleted_at: null,
        goal: 'gain muscle mass',
        allergy: '',
        weight: 100,
        height: "5'11",
        dietary_preference: '',
        gender: 'Male',
        user_id: 6,
        user: {
          id: 6,
          created_at: '2020-08-19T16:42:47.447507Z',
          updated_at: '2020-08-19T16:42:47.447507Z',
          deleted_at: null,
          email: 'ramosjosemari+1200@gmail.com',
          first_name: 'assdf',
          last_name: 'fdddss',
          type: 'customer'
        },
        dietitian_id: 1,
        dietitian: null,
        meal_plan: null
      },
      {
        id: 5,
        created_at: '2020-08-19T23:52:07.713087Z',
        updated_at: '2020-08-19T23:52:07.713087Z',
        deleted_at: null,
        goal: 'gain muscle mass',
        allergy: '',
        weight: 73.8,
        height: "5'4",
        dietary_preference: 'Ketogenic',
        gender: 'Male',
        user_id: 7,
        user: {
          id: 7,
          created_at: '2020-08-19T23:52:07.698649Z',
          updated_at: '2020-08-19T23:52:07.698649Z',
          deleted_at: null,
          email: 'ramosjosemari+10@gmail.com',
          first_name: 'JM',
          last_name: 'Ramos',
          type: 'customer'
        },
        dietitian_id: 1,
        dietitian: null,
        meal_plan: null
      },
      {
        id: 9,
        created_at: '2020-08-20T23:26:20.197895Z',
        updated_at: '2020-08-20T23:26:20.197895Z',
        deleted_at: null,
        goal: 'maintain weight',
        allergy: '',
        weight: 50,
        height: '182 cm',
        dietary_preference: 'Vegan',
        gender: 'Female',
        user_id: 11,
        user: {
          id: 11,
          created_at: '2020-08-20T23:26:20.191772Z',
          updated_at: '2020-08-20T23:26:20.191772Z',
          deleted_at: null,
          email: 'iandjx@test.com',
          first_name: 'ian',
          last_name: 'dj',
          type: 'customer'
        },
        dietitian_id: 1,
        dietitian: null,
        meal_plan: null
      }
    ],
    user: {
      id: 2,
      created_at: '2020-08-18T03:07:05.893091Z',
      updated_at: '2020-08-18T03:07:05.893091Z',
      deleted_at: null,
      email: 'ramosjosemari+4@gmail.com',
      first_name: 'James',
      last_name: 'Horton',
      type: 'dietitian'
    }
  }
}

const Dietitian = () => {
  const [user, setUser] = useContext(UserContext)
  const [customers, setCustomers] = useState(null)
  const navigate = useNavigate()

  //   useEffect(() => {
  //     if (user.data.user.type !== 'dietitian') {
  //       navigate('/home')
  //     }
  //   }, [])
  useEffect(() => {
    setUser(fakeNutritionist)
    if (user.data) {
      setCustomers(user.data.customers)
    }
  }, [user])

  const onCreatePlan = customer => {
    navigate('/create-meal-plan', { state: { ...customer } })
  }

  return (
    <Box>
      {customers && (
        <List data={customers} pad='medium'>
          {(datum, index) => (
            <Box
              key={index}
              direction='column-responsive'
              gap='large'
              size='xsmall'
              align='center'
            >
              <Box width='33%'>
                <Text weight='bold'>
                  {`${datum.user.first_name} ${datum.user.last_name}`}
                </Text>
                <Text>Goal: {datum.goal}</Text>
                <Text>Allergy: {datum.allergy}</Text>
                <Text>Height: {datum.height}</Text>
              </Box>
              <Box width='33%'>
                <Text>Weight: {datum.weight}</Text>
                <Text>Gender: {datum.gender}</Text>
                <Text>Dietary Preferences: {datum.dietary_preference}</Text>
              </Box>
              <Box width='33%' justify='end' align='end' alignContent='end'>
                <Button onClick={() => onCreatePlan(datum)}>
                  Create Meal Plan
                </Button>
              </Box>
            </Box>
          )}
        </List>
      )}
    </Box>
  )
}

export default Dietitian
