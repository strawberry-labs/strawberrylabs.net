import * as React from "react"
import { graphql } from "gatsby"
import { chakra } from '@chakra-ui/react'

export default function BlogPostTemplate({
    data, // this prop will be injected by the GraphQL query below.
}: { data: any }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div>
            <div>
                <chakra.h1>{frontmatter.title}</chakra.h1>
                <h2>{frontmatter.date}</h2>
                <div
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`