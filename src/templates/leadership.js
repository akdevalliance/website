import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const LeadershipTemplate = ({
  bio,
  content,
  contentComponent,
  description,
  helmet,
  image,
  name,
  role
}) => {
  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {name}
            </h1>
            <h2>{role}</h2>
            <PreviewCompatibleImage
              imageInfo={{
                image: image,
                alt: name
              }}
              style={{ width: 200 }}
            />
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

LeadershipTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const Leadership = ({ data }) => {
  const { markdownRemark: document } = data;

  return (
    <Layout>
      <LeadershipTemplate
        bio={document.frontmatter.bio}
        content={document.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Leadership">
            <title>{`${document.frontmatter.name} | ${document.frontmatter.role}`}</title>
            <meta name="description" content={`${document.frontmatter.bio}`} />
          </Helmet>
        }
        image={document.frontmatter.image}
        name={document.frontmatter.name}
        role={document.frontmatter.role}
      />
    </Layout>
  );
};

Leadership.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Leadership;

export const pageQuery = graphql`
  query LeadershipByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        bio
        image {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        index
        name
        role
      }
    }
  }
`;
