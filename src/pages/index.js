import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JWRIndex = props => {
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
