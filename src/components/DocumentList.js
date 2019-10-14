import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class DocumentList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: documents } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {documents &&
          documents.map(({ node: document }) => (
            <div className="is-parent column is-6" key={document.id}>
              <article
                className={`blog-list-item tile is-child box notification`}
              >
                <header>
                  <p className="document-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={document.fields.slug}
                    >
                      {document.frontmatter.title}
                    </Link>
                  </p>
                </header>
                <p>
                  {document.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={document.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

DocumentList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query DocumentListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "document" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredDocument
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <DocumentList data={data} count={count} />}
  />
);
