import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  return (
    <section>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price}</p>
      <Link to="/products">Back to products</Link>
    </section>
  );
};

export default SingleProduct;
