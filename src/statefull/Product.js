import React,{Component} from 'react';

class Product extends Component {
  render(){
    return(
      <div id="product">
        <ul>
        {this.props.product.map((product, i) =>{
          return (<span key={i}>
            <img src={`/assets/${product.img}`} className="img-style"></img>            
            <li className='list-item'><strong>Name : </strong>{product.name}</li>
            <li className='list-item'><strong>Price : </strong>{product.price + ' €'}</li>
            <li><button onClick={(e) => this.props.addProduct(product)} className="btn-product">+</button></li> 
          </span>)
        })
        }
        </ul>
      </div>
    )
  }
}

export default Product;