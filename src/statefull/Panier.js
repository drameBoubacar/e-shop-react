import React,{Component} from 'react';

class Panier extends Component{
  render(){
    return(
      <div id="panier">
        <h4>Panier</h4>
        <p>Total : 
        { Object.values(this.props.panier).reduce((acc, panier) => {
          return acc + panier.price * panier.number
        }, 0)
        }
        </p> 
        <ul>
          {
             Object.values(this.props.panier).map( (product, i) => {
              return (                  
                <li key={i} className="list-item">
                  {product.number + " : " + product.name + " - " + product.price + "$"}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Panier;