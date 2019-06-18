import React, { useState } from "react"
// import {Router} from "@reach/router"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"
// import { EventEmitter } from "fbemitter"

// export const AppContext = React.createContext({
//   isLoggedIn: false,
// })

const JWRIndex = props => {
  // constructor(props){
  //   super(props);
  // }

  const [loggedIn, setLoggedIn] = useState(false)

  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const pages = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle} isIndex="true">
      <SEO
        title="All pages "
        keywords={[`jwr`, `gatsby`, `javascript`, `react`]}
      />
    </Layout>
  )
}

export default JWRIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
