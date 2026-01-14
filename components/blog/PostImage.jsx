import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const PostImage = ({ src, alt, url }) => (
  <div className="post-thumbnail content-image">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} className="img-fluid w-100" alt={alt} />
  </div>
);

PostImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PostImage;
