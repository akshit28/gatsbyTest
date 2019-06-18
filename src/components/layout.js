import React from "react"
import Footer from "./footer"
import Header from "./header"
import SubMenu from "./sub-menu"

class Layout extends React.Component {
  render() {
    const { location, title, children, isIndex } = this.props

    let maincontain

    if (isIndex === "true") {
      maincontain = (
        <static-page>
          <div class="new-design1">
            <div class="static-page-container clearfix">
              <SubMenu />
              <div class="static-page-content">
                <div id="newDesign" />
                {children}
              </div>
            </div>
          </div>
        </static-page>
      )
    } else {
      maincontain = (
        <static-page>
          <div class="new-design">
            <div class="static-page-container clearfix">
              <SubMenu />
              <div class="static-page-content">
                <div id="newDesign" />
                {children}
              </div>
            </div>
          </div>
        </static-page>
      )
    }
    return (
      <div>
        <Header />
        {maincontain}
        <Footer />
      </div>
    )
  }
}

export default Layout
