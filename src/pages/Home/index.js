import React,{Component} from 'react';
import Img from '../../img/E74-0492-006_detalhe2.jpg'
import {MdAddShoppingCart} from 'react-icons/md';
import api from '../../services/api';
import {formatPrice} from '../../util/format';
import {addToCart, addToCartRequest} from '../../store/modules/cart/actions';
import {connect} from 'react-redux'

 import { ProductList } from './styles';

 class Home extends Component {
  state = {
    productList: []
  }
  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))
    this.setState({productList: data})
  }

  handleAddProduct = id => {
    const { dispatch } = this.props

    dispatch(addToCartRequest(id))
  }
  render() {
    const {productList} = this.state;
    const {amount} = this.props;

    return (
      <ProductList>
        {productList.map(product => (
          
        <li key={product.id}>
          <img src={product.image} alt="tenis"></img>
          <strong>{product.title}</strong>
        <span> {product.priceFormatted}</span>
          <button type="button" onClick={() => this.handleAddProduct(product.id)}> 
            <div>
              <MdAddShoppingCart size={16} color="#fff"/> {amount[product.id] || 0}
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
        ))}
       
      </ProductList>
    );
  }
}
export default connect(
  state => ({
    amount: state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    },{})
  })
)(Home)
