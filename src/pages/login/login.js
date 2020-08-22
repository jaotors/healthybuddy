import 'styled-components/macro'

import * as Api from '../../api'

import React, { useState } from 'react'

import { Box } from 'grommet'
import Loading from '../../components/loading'
import { LoginForm } from './login-components'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [opened, setOpened] = useState()
  const onClick = async ({ email, password }) => {
    setOpened(true)
    try {
      const { data } = await Api.login({
        email_address: email,
        password: password
      })
      localStorage.setItem('access_token', data.access_token)
      setOpened(false)

      switch (data.user_type) {
        case 'dietitian':
          navigate('/dietitian')
          break
        case 'customer':
          navigate('/customer')
          break
        default:
          navigate('')
          break
      }
    } catch (error) {
      setOpened(false)
    }
  }

  const onClose = () => {
    setOpened(false)
  }

  return (
    <>
      <Box
        direction='row'
        justify='center'
        alignContent='center'
        css={`
          width: 25%;
        `}
      >
        <LoginForm onClick={onClick} />
      </Box>
      {opened && <Loading onClose={onClose} />}
    </>
  )
}

export default Login
