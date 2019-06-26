// import React from "react"
import mrEmitter from "../emmiter/emmiter"

const handleLoginFailed = data => {
  console.log("login failed")
  mrEmitter.emit("loginFailed", data)
}

const handleLoginSuccess = data => {
  mrEmitter.emit("loginSuccess", data)
}

const messageTypes = {
  "sm-login-failed": handleLoginFailed,
  "sm-login-success": handleLoginSuccess,
}

const getResponsetype = data => {
  const jsonData = JSON.parse(data)

  const handleForMsgType = messageTypes[jsonData.type]
  handleForMsgType && handleForMsgType(jsonData)
}

export { getResponsetype }
