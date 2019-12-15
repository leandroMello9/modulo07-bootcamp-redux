import React from 'react';
import Img from '../../img/E74-0492-006_detalhe2.jpg';
import {removeToCart, updateAmount} from '../../store/modules/cart/actions';
import {connect} from 'react-redux';
import {MdRemoveCircleOutline,MdAddCircleOutline, MdDelete} from 'react-icons/md';
import {formatPrice} from '../../util/format';
import { Container,ProductTable, Total } from './style';

 function Cart({cart,total, dispatch}) {
   const incriment = (product) => {
     dispatch(updateAmount(product.id, product.amount + 1))
   
   }

   const decrement = (product) => {
     dispatch( updateAmount(product.id, product.amount - 1))
   
   }
  return (
   <Container>
     <ProductTable>
        <thead>
          <tr>
            <th/>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
              <tr>
              <td>
                <img src={product.image} alt=""/>
              </td>
              <td>
              <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                  <MdRemoveCircleOutline size={20} color="#7159c1"/>
                  </button>
                <input type="number" readOnly value={product.amount}/>
                  <button type="button" onClick={() => incriment(product)}>
                  <MdAddCircleOutline size={20} color="#7159c1"/>
                  </button>
                </div>
              </td>
              <td>
          <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => dispatch(removeToCart(product.id))}>
                  <MdDelete size={20} color="#7159c1"/>
                </button>
              </td>
            </tr>
          )  )}
        </tbody>
     </ProductTable>
     <footer>
       <button type="button">
         Finalizar Pedido.
       </button>
         <Total>
           <span>TOTAL</span>
           <strong>{total}</strong>
         </Total>
     </footer>
   </Container>
  );
}

export default connect(
  state => ({
    cart: state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount)
    })),
    total: formatPrice( state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    },0))
  })
)(Cart);