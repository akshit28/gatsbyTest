import { getResponsetype } from "./wsResponse"
import { sendmessageType } from "./packets/cm"
// const WebSocket = require('ws');

const isBrowser = typeof window !== `undefined`
const WsHelper = () => isBrowser && "WebSocket" in window

// const wS = (typeof window !== `undefined` && window).WebSocket

if (WsHelper()) {
  var socket = new WebSocket("wss://www.jungleerummy.com/ws")
}else{
  var socket = {}
}

socket.onopen = function() {
  wsConnected()
}

socket.onmessage = function(evt) {
  onResponse(evt)
}

socket.onclose = function() {
  // websocket is closed.
  alert("Connection is closed...")
  setTimeout(function() {
    //socket.open()
    // socket.open()
  }, 3000)
}

socket.onerror = function(evt) {
  alert("Connection error...")
  setTimeout(function() {
    //socket.open()
    // socket.open()
  }, 3000)
}

function sendMessage(msg) {
  socket.send(msg)
}

function wsConnected() {
  sendMessage(JSON.stringify(sendmessageType.registrationConfig()))
  sendMessage(JSON.stringify(sendmessageType.serverStatus()))
}

function onResponse(response) {
  getResponsetype(response.data)
  //   console.log("response=>", response)
}

function onDisconnection(data) {
  console.log(data)
}

// const registrationConfig = function() {
//   this.type = "cm-registration-config-request"
// }

// const serverStatus = function() {
//   this.type = "server-status-request"
//   this.subscribeServerStatus = true
// }

export { sendMessage }
