import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [laoding, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + id)
      .then((res) => res.json())
      .then((json) => {
        setSingleProduct(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Single Product details</h2>
      {laoding ? (
        <p>Data is loading</p>
      ) : (
        <article className="product">
          <h3>{singleProduct.title}</h3>
          <p>Price: {singleProduct.price} euros</p>
          {/* <p>Rating: {singleProduct.rating.rate}/5</p> */}
          <p>Description: {singleProduct.description}</p>
        </article>
      )}
    </div>
  );
};

export default SingleProduct;
