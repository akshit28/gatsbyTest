import React from "react"

export default () => (
  <page-header class="fixed-header">
    <div class="container">
      <div class="page-header-wrapper">
        <a aria-label="old logo" href="https://www.jungleerummy.com/">
          <div class="hp-old-logo" />
        </a>

        <nav>
          <div class="prize-won">
            <i class="header-prize-icon" />
            <span>Trusted By</span>
            <span>5 Million+ Players</span>
          </div>
        </nav>
        <login class="isDesktop">
          <div class="login-container">
            <div>
              <input
                id="username"
                maxlength=""
                placeholder="Username/Email"
                value=""
                aria-label="username"
              />
            </div>
            <div>
              <input
                id="password"
                maxlength="14"
                placeholder="Password"
                type="password"
                aria-label="password"
              />
              <div class="forgot-link-label pointer">Forgot Password?</div>
            </div>
            <div class="login-btn-header">
              <button>Login</button>
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
        <div class="isMobile goToLogin">
          <a class="text-white">Login</a>
        </div>
      </div>
    </div>
  </page-header>
)
