import React from 'react';
import firebase from 'firebase';

import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      products: [],
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db
      .collection('products')
      // .where('price', '>=', 1399)
      .orderBy('price', 'desc')
      // Updates automatically on changes
      .onSnapshot(snapShot => {
        // console.log(snapShot);
        const products = snapShot.docs.map(doc => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }

  // increaseQuantity = id => {
  // 1
  // this.setState({
  //   qty: this.state.qty + 1,
  // });
  // 2 --> use this when previous state is required
  // this.setState(prevValue => {
  //   return {
  //     qty: prevValue.qty + 1,
  //   };
  // });
  // });
  // };

  handleIncreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1; // increase the quantity by 1
    // this.setState({ products: products });

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => console.log('Product count increased successfully'))
      .catch(err => console.log('Error 💥💥💥', err.message));
  };

  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty < 1) return;
    // products[index].qty -= 1;
    // this.setState({ products: products });

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .then(() => console.log('Product count reduced succssfully'))
      .catch(err => console.log('Error 💥💥💥', err.message));
  };

  handleDeleteProduct = product => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // products.splice(index, 1);
    // const items = products.filter(p => p.id !== product.id);
    // this.setState({ products: items });
    const productRef = this.db.collection('products').doc(products[index].id);
    productRef
      .delete()
      .then(() =>
        console.log('Product has been removed from the cart successfully')
      )
      .catch(err => console.log('Error 💥💥💥', err.message));
  };

  getCartCount = () => {
    const { products } = this.state;
    const totalCount = products
      .map(product => product.qty)
      .reduce((acc, cur) => acc + cur, 0);
    return totalCount;
  };

  getTotalPrice = () => {
    const { products } = this.state;
    const totalPrice = products
      .map(product => product.price * product.qty)
      .reduce((acc, cur) => acc + cur, 0);
    return totalPrice;
  };

  addProduct = () => {
    this.db
      .collection('products')
      .add({ title: 'Backpack', qty: 2, price: 1399, img: '' })
      .then(docRef => console.log('Product has been added', docRef))
      .catch(err => console.log('Error 💥💥💥', err.message));
  };

  render() {
    const { products, loading } = this.state;

    return (
      <div className="app">
        <Navbar totalCount={this.getCartCount()} addProduct={this.addProduct} />
        {loading && <h1>Loading products...</h1>}
        <Cart
          products={products}
          handleIncreaseQuantity={this.handleIncreaseQuantity}
          handleDecreaseQuantity={this.handleDecreaseQuantity}
          handleDeleteProduct={this.handleDeleteProduct}
        />
        {/* <button
          style={{
            padding: 10,
            fontSize: 20,
            backgroundColor: 'orangered',
            cursor: 'pointer',
            width: 200,
          }}
          onClick={this.addProduct}
        >
          Add a product
        </button> */}
        <div className="total-price-container">
          <h2>TOTAL PRICE: {this.getTotalPrice()}</h2>
        </div>
      </div>
    );
  }
}

export default App;
