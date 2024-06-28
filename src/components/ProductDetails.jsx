import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { state } = useLocation();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const fetchData = () => {
    setIsLoading(true);
    setError(null);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Data could not be fetched');
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="product-details">
      <h2>product details</h2>
      {isLoading && <p> Product is loading...</p>}
      {error && <p> error</p>}
      {!isLoading && !error && (
        <article className="product-details__article">
          <img
            src={state.images[0]}
            alt={state.title}
            className="product-details__img"
          />
          <h3 className="product-details__title">{state.title}</h3>
          <p>
            <strong>Category:</strong> {state.category}
          </p>
          <p>
            <strong>Price: </strong>
            {state.price}
          </p>
          <p>
            <strong>Rating: </strong>
            {state.rating}
          </p>
          <p>
            <strong>Brand: </strong>
            {state.brand}
          </p>
          <p>
            <strong>Description</strong>{' '}
            {state.description && state.description.substring(0, 100)}...
          </p>
          <Link to="/products" className="product__link">
            Continue Shopping
          </Link>
        </article>
      )}
    </div>
  );
};

export default ProductDetails;
