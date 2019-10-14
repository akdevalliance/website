import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class LeadershipList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: leaders } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {leaders &&
          leaders.map(({ node: leader }) => (
            <div className="is-parent column is-6" key={leader.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  leader.frontmatter.featuredDocument ? "is-featured" : ""
                }`}
              >
                <header>
                  {!!leader.frontmatter.image ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          alt: leader.name,
                          image: leader.frontmatter.image
                        }}
                        style={{ width: 150 }}
                      />
                    </div>
                  ) : null}
                  <p className="leader-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={leader.fields.slug}
                    >
                      {leader.frontmatter.name}
                    </Link>
                    <span></span>
                    <span className="subtitle is-size-5 is-block">
                      {leader.frontmatter.role}
                    </span>
                  </p>
                </header>
                <p>{leader.frontmatter.bio}</p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

LeadershipList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query LeadershipListQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___index] }
          filter: { frontmatter: { templateKey: { eq: "leadership" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
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
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <LeadershipList data={data} count={count} />}
  />
);
