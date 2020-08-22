import { Request } from './client'

export const login = async params => {
  const data = await Request.post('/login', { params })
  return data
}

export const registerCustomer = async params => {
  const data = await Request.post('/register/customer', { params })
  return data
}

export const getDietitians = async () => {
  const { data } = await Request.get('/dietitians')
  return data
}

export const getCustomer = async token => {
  const data = await Request.get('/customer', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}

export const getDietitian = async token => {
  const data = await Request.get('/dietitian', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}

export const createMealPlan = async (token, params) => {
  const data = await Request.post('/dietitian/meal', {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  return data
}
