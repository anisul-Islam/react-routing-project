import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Product = ({ id, title, price, rating, description }) => {
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };
  return (
    <article className="product">
      <h3>{title}</h3>
      <p>Price: {price} euros</p>
      <p>Rating: {rating.rate}/5</p>
      <p>Description: {truncateString(description, 100)}</p>
      <Link to={`${id}`}>Learn More</Link>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.object,
  description: PropTypes.string
};

export default Product;
