import React from "react";

import Layout from "../../components/Layout";
import PartnerList from "../../components/PartnerList";

export default class PartnerIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
              color: "white",
              padding: "1rem"
            }}
          >
            Partners and Sponsors
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h2>
                The Alaska Developers Alliance is made possible with the help of
                our strategic partnerships and sponsors. We are always looking
                for new ways to work with organizations. If you like what we are
                doing get in touch!
              </h2>

              <PartnerList />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
