import React from 'react';

import './index.css';
import CartItem from './CartItem';

const Cart = props => {
  const { products } = props;
  const {
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleDeleteProduct,
  } = props;
  return (
    <div className="cart">
      {products.map(product => {
        return (
          <CartItem
            key={product.id}
            product={product}
            onIncreaseQuantity={() => handleIncreaseQuantity(product)}
            onDecreaseQuantity={() => handleDecreaseQuantity(product)}
            onDeleteQuantity={() => handleDeleteProduct(product)}
          />
        );
      })}
    </div>
  );
};

export default Cart;
