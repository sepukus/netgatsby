import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";

export const PageTemplate = ({ title, body }) => (
  <div>
    <h1>{title}</h1>
    <div>{body}</div>
  </div>
);

PageTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log("YOOOOOOO", data);

  return (
    <Layout>
      <PageTemplate title={frontmatter.title} body="asodijfasdfoij" />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query PageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
