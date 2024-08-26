import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>程序员， 迪士尼爱好者</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
