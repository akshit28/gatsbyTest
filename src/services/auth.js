import { newLogin } from "./ws"

export const getUser = () => {
  var userId = localStorage.getItem("userId")
  var token = localStorage.getItem("authToken")
}

export const handleLogin = (
  username,
  password,
  onLoginSuccess,
  onLoginFail
) => {
  newLogin(username, password, {})
}
