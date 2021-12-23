import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
  graphql`
    query {
        site {
            siteMetadata {
                siteUrl
                title
            }
        }
    }
  `,
  );
  return site.siteMetadata;
};

export default useSiteMetadata;