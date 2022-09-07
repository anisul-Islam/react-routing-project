import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
const Products = ({ products }) => {
  console.log(products);
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array
};

export default Products;
