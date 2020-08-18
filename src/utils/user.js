import jwt from 'jsonwebtoken'

export const decodeUserJWT = accessToken => {
  const decodedJwt = jwt.verify(
    accessToken,
    'd929af12-2194-44a2-bca2-a31b135b6c76'
  )
  const { User } = decodedJwt
  return User
}
