import React from 'react';

import './index.css';

const Navbar = props => {
  return (
    <div className="navbar">
      <h1>Reactive Cart</h1>
      <div className="right-container">
        <button
          style={{
            padding: 10,
            fontSize: 20,
            backgroundColor: 'orangered',
            cursor: 'pointer',
            width: 200,
          }}
          onClick={props.addProduct}
        >
          Add a product
        </button>
        <div className="cart-icon-container">
          <img
            src="https://image.flaticon.com/icons/png/128/1124/1124199.png"
            alt="cart-icon"
          />
          <button>
            <span>{props.totalCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
