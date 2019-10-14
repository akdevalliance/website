import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class PartnerList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: partners } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {partners &&
          partners.map(({ node: partner }) => (
            <div className="is-parent column is-6" key={partner.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  partner.frontmatter.featuredDocument ? "is-featured" : ""
                }`}
              >
                <header>
                  {!!partner.frontmatter.image ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          alt: partner.name,
                          image: partner.frontmatter.image
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="partner-meta">
                    <a href={partner.frontmatter.url}>
                      {partner.frontmatter.name}
                    </a>
                  </p>
                </header>
                <p>{partner.frontmatter.description}</p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

PartnerList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query PartnerListQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___index] }
          filter: { frontmatter: { templateKey: { eq: "partner" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                description
                image {
                  childImageSharp {
                    fluid(maxWidth: 250, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                index
                name
                url
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PartnerList data={data} count={count} />}
  />
);
