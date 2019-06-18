import React, { Component } from "react"
import Login from "./login"
import Sidebar from "./sidebar"
import mrEmitter from "../emmiter/emmiter"

let Subscription = null
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
    }
    this.authSuccess = this.authSuccess.bind(this)
  }

  componentWillMount() {
    //   // Register and listen for our custom events that will be emitted by children.
    Subscription = mrEmitter.addListener("loginFailed", data => {
      console.log("EVENT_DATA", data)
    })

    Subscription = mrEmitter.addListener("loginSuccess", data => {
      console.log("EVENT_DATA", data)
      this.authSuccess(data)
    })
  }

  authSuccess(data) {
    this.setState({ isLoggedIn: true })
    console.log("authsuccess called", this.state.isLoggedIn)
  }

  render() {
    return (
      <page-header className="fixed-header">
        <div className="container">
          <div className="page-header-wrapper">
            <a href="https://www.jungleerummy.com/">
              <div className="hp-old-logo" />
            </a>
            {!this.state.isLoggedIn ? (
              <nav>
                <div className="prize-won">
                  <i className="header-prize-icon" />
                  <span>Trusted By</span>
                  <span>5 Million+ Players</span>
                </div>
              </nav>
            ) : null}

            {this.state.isLoggedIn ? <Sidebar /> : <Login />}
            <div className="isMobile goToLogin">
              <a className="text-white">Login</a>
            </div>
          </div>
        </div>
      </page-header>
    )
  }
}

export default Header
