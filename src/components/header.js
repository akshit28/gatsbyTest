import React, { Component } from "react"
import Login from "./login"
import Navbar from "./navbar"
import mrEmitter from "../emmiter/emmiter"

let Subscription = null
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      toggleMenu: false,
    }
    this.authSuccess = this.authSuccess.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
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

  toggleMenu() {
    if (this.state.toggleMenu == false) {
      this.setState({ toggleMenu: true })
      mrEmitter.emit("showMenu", true)
    } else {
      this.setState({ toggleMenu: false })
      mrEmitter.emit("showMenu", false)
    }
  }

  render() {
    return (
      <page-header className="fixed-header">
        <div className="container">
          <div className="page-header-wrapper">
            <span
              className={`side-menu ${
                this.state.toggleMenu == true ? "open" : ""
              }`}
              id="sideMenu"
              onClick={this.toggleMenu}
            ></span>
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

            {this.state.isLoggedIn ? <Navbar /> : <Login />}
            <div className="isMobile goToLogin">
              <a className="text-white">Login</a>
            </div>
          </div>
        </div>
        <div
          className={`side-mask ${this.state.toggleMenu == true ? "show" : ""}`}
          onClick={this.toggleMenu}
        ></div>
      </page-header>
    )
  }
}

export default Header
