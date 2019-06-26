import React from "react"
import { handleLogin } from "../services/auth"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      error: false,
    }

    this.fireLogin = this.fireLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onLoginSuccess() {
    console.log("login success")
    this.setState(() => ({ loggedIn: true }))
    //this.props.setLoginState(true)
  }

  onLoginFail() {
    console.log("login failed ")
    this.setState(() => ({ loggedIn: false }))
    //this.props.setLoginState(false)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  fireLogin(event) {
    handleLogin(
      this.state.username,
      this.state.password,
      this.onLoginSuccess,
      this.onLoginFail
    )
  }

  render() {
    const { loggedIn, username, password } = this.state
    return (
      <login class="isDesktop">
        <div class="login-container">
          <div>
            <input
              id="username"
              maxlength=""
              placeholder="Username/Email"
              type="text"
              value={username}
              onChange={this.handleChange}
              name="username"
            />
          </div>
          <div>
            <input
              id="password"
              maxlength="14"
              placeholder="Password"
              type="password"
              value={password}
              onChange={this.handleChange}
              name="password"
            />
            <div class="forgot-link-label pointer">Forgot Password?</div>
          </div>
          <div class="login-btn-header">
            <button onClick={this.fireLogin}>Login</button>
          </div>
          <div class="word">OR</div>
          <div>
            <div class="fb-header-container">
              <facebook>
                <div class="social-btn-hdlr">
                  <div class="fb-login-header" />
                  <div class="gb-login-header" />
                </div>
              </facebook>
            </div>
          </div>
        </div>
      </login>
    )
  }
}

export default Login
