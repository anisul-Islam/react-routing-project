import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Data could not be fetched');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="products-container">
      <h2>All Products</h2>
      {isLoading && <p> Products are loading...</p>}
      {error && <p> error</p>}
      {!isLoading && !error && (
        <section className="products">
          {products &&
            products.length > 0 &&
            products.map((product) => {
              const { id, title, description, price, category, images } =
                product;
              return (
                <article key={id} className="product">
                  <img src={images[0]} alt={title} className="product__img" />
                  <h3>{title}</h3>
                  <p>Category: {category}</p>
                  <p>Price: {price}</p>
                  <p>
                    Price: {description && description.substring(0, 100)}...
                  </p>
                  <Link
                    to={`/products/${id}`}
                    state={product}
                    className="product__link"
                  >
                    Show Details
                  </Link>
                </article>
              );
            })}
        </section>
      )}
    </div>
  );
};

export default Products;
