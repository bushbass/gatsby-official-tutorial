import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <>
      <Layout pageTitle="About Me">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
        <p>in layout on about.js</p>
      </Layout>
      <div>
        <p>outside of layout on about</p>
      </div>
    </>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
