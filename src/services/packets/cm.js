const LoginWithPasswordRequest = function(login, password, LoginAttachments) {
  return {
    type: "cm-login-pass",
    network: "JUNGLEERUMMY",
    login,
    password,
    extras: LoginAttachments,
  }
}

const registrationConfig = function() {
  return {
    type: "cm-registration-config-request",
  }
}

const serverStatus = function() {
  return {
    type: "server-status-request",
    subscribeServerStatus: true,
  }
}

const sendmessageType = {
  serverStatus: serverStatus,
  registrationConfig: registrationConfig,
  loginRequest: LoginWithPasswordRequest,
}

export { sendmessageType }
