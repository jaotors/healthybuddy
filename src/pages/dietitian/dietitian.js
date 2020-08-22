import * as Api from '../../api'

import { Box, Button, List, Text, TextInput } from 'grommet'
import React, { useContext, useEffect, useState } from 'react'

import { UserContext } from '../../contexts/user-context'
import { useNavigate } from 'react-router'

const Dietitian = () => {
  const [user, setUser] = useContext(UserContext)
  const [customers, setCustomers] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (user.user) {
      if (user.user.type !== 'dietitian') {
        navigate('/')
      }
    }
  }, [user])

  const fetchDietitian = async () => {
    const accessToken = await localStorage.getItem('access_token')
    const { data } = await Api.getDietitian(accessToken)
    await setUser(data)
  }

  useEffect(() => {
    fetchDietitian()
  }, [])

  useEffect(() => {
    if (user.customers) {
      setCustomers(user.customers)
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
