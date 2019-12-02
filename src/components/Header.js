import React from 'react';

import { Container, Cart } from './styles';
import logo from '../img/logo.svg';
import {Link} from 'react-router-dom';
import {MdShoppingBasket} from 'react-icons/md';
import Home from '../pages/Home'
import {connect} from 'react-redux'

function Header({cartSize}) {
  
  return (
    <Container>
      <Link to="/">
      <img src={logo} alt="rocketshoes"></img>
      </Link>
      <Cart to="/cart">
          <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>

          </div>
       
        <MdShoppingBasket size={36} color="#fff"/>
      </Cart>
    </Container>  
  );
}
export default connect(
  state => ({
    cartSize: state.cart.length
  })
)(Header);