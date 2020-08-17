import axios from 'axios'

const url = 'https://healthy-buddy.herokuapp.com/login'

export const login = async (email, password) => {
  const response = await axios.post(
    url,
    {},
    {
      auth: {
        username: email,
        password: password
      }
    }
  )
  return response
}

export const register = async (
  email,
  first_name,
  last_name,
  password,
  weight,
  height,
  goal,
  allergy,
  dietary_preference,
  gender
) => {
  const response = await axios.post(url, {
    email: email,
    first_name: first_name,
    last_name: last_name,
    password: password,
    weight: weight,
    height: height,
    goal: goal,
    allergy: allergy,
    dietary_preference: dietary_preference,
    gender: gender
  })
  return response
}
