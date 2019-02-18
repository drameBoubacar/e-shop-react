import React, { Component } from 'react';
import Product from './statefull/Product';
import Panier from './statefull/Panier';
import './App.css';
import api from './lib/mock';

class App extends Component {
  constructor(){
    super();
    this.state = {
      product : [],
      panier : {}
    }
    this.addProduct = this.addProduct.bind(this)
  }
  componentDidMount(){
    api.get()
    .then(res => this.setState({
      product : res
    }))
  }
  addProduct(product){
    const panier = Object.assign({}, this.state.panier)
    if(Object.keys(panier).includes(''+product.id)){
      panier[product.id].number ++
    } else {
      panier[product.id] = product
      panier[product.id].number = 1
    }
    this.setState({ panier })  
  }
  render() {
    return (
      <div className="App">
        <Product product={this.state.product} addProduct={this.addProduct}/>
        <Panier panier={this.state.panier}/>
      </div>
    );
  }
}

export default App;
