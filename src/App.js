import React, { Component } from 'react';
import Product from './statefull/Product';
import './App.css';
import api from './lib/mock';

class App extends Component {
  constructor(){
    super();
    this.state = {
      product : []
    }
  }
  componentDidMount(){
    api.get()
    .then(res => this.setState({
      product : res
    }))
  }
  render() {
    console.log('STATE', this.state.product)
    return (
      <div className="App">
        <Product product={this.state.product}/>
      </div>
    );
  }
}

export default App;
