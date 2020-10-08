import { graphql, useStaticQuery } from 'gatsby'

const useIcons = () => {
  const data = useStaticQuery(graphql`
    query {
      metamask: file(relativePath: { eq: "metamask.png" }) {
        sharp: childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      walletconnect: file(relativePath: { eq: "walletconnect.png" }) {
        sharp: childImageSharp {
          fixed(width: 76, height: 48) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      coinbasewallet: file(relativePath: { eq: "coinbasewallet.png" }) {
        sharp: childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      fortmatic: file(relativePath: { eq: "fortmatic.png" }) {
        sharp: childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      portis: file(relativePath: { eq: "portis.png" }) {
        sharp: childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return data
}

export default useIcons
