import * as React from "react"
import { graphql } from "gatsby"
import { Box, ChakraProvider, extendTheme, Text } from '@chakra-ui/react'
import Layout from "../../components/layout";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
      h1: {
        fontSize: '4xl',
        my: 4
      },
      h2: {
        fontSize: '3xl',
        my: 4
      },
      h3: {
        fontSize: '2xl',
        my: 4
      },
      h4: {
        fontSize: 'xl',
        my: 4
      }
    }
  }
});

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: { data: any }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <ChakraProvider theme={theme}>
      <Layout modalOpen={false}>
        <Box backgroundColor='gray.100' p={16}>
          <Box mt={20}>
            <Box my={5}>
              <Text fontSize={'6xl'}>{frontmatter.title}</Text>
              <Text fontSize={'xl'}>{frontmatter.date}</Text>
            </Box>
            <Box
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Box>
        </Box>
      </Layout>
    </ChakraProvider>
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