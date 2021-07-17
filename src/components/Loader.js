import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={3}
    width={1000}
    height={440}
    viewBox="0 0 1000 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="20" rx="3" ry="3" width="980" height="80" />
    <rect x="2" y="124" rx="3" ry="3" width="980" height="80" />
    <rect x="2" y="228" rx="3" ry="3" width="980" height="80" />
    <rect x="2" y="332" rx="3" ry="3" width="980" height="80" />
  </ContentLoader>
);

export default Loader;
