import React from 'react';

const NavBar = (props) => {
  console.log(Object.values(props.panier).reduce((acc, num) => {
    return acc += num.number
  }, 0)
  );
  return(
    <div className="contain-nav">
    <div className="space-nav"></div>
      <h1>e-shop mobile</h1>
      <li className="list-item-nav"><i className="fas fa-shopping-cart fa-2x"></i> <p className="count-panier">{Object.values(props.panier).reduce((acc, num) => {
        return acc += num.number
      }, 0)}</p></li>
     
    </div>
  )
}
export default NavBar;