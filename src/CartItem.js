import React from 'react';

const CartItem = props => {
  const { title, price, qty, img } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteQuantity,
  } = props;
  // console.log(this.props);
  return (
    <div className="cart-item">
      <div className="left-block">
        <img src={img} alt="" style={style.image} />
      </div>
      <div className="right-block">
        <div>{title}</div>
        <div style={{ color: '#777' }}>{price}₹</div>
        <div style={{ color: '#777' }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          <img
            className="action-icons"
            src="https://image.flaticon.com/icons/png/128/992/992683.png"
            alt="decrease"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            className="action-icons"
            src="https://image.flaticon.com/icons/png/128/992/992651.png"
            alt="increase"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            className="action-icons"
            src="https://image.flaticon.com/icons/png/128/3096/3096673.png"
            alt="delete"
            onClick={() => onDeleteQuantity(product)}
          />
        </div>
      </div>
    </div>
  );
};

const style = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
};

export default CartItem;
