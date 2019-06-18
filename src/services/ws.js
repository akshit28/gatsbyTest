import { sendMessage } from "./wsHelper"
import { sendmessageType } from "./packets/cm"

// var newLogin = null

const newLogin = (username, password, onLoginSuccess, onLoginFail) => {
  const loginWithPasswordRequest = sendmessageType.loginRequest(
    username,
    password,
    {}
  )

  sendMessage(JSON.stringify(loginWithPasswordRequest))
}

export { newLogin }
