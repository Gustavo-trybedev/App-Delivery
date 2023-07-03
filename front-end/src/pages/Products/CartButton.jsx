import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';

const Fixed = styled(Button)`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    /* size-adjust: inherit; */
    position: sticky;
    bottom: 0.5rem;
    top: 0;
    height: 1.5rem;
    width: auto;
    font-size: 0.9rem;
    border-radius: 25px;
    padding: 0.7rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    border-color: #036B52;
    background-color:#036B52;
    color: white;
    box-shadow: 0.3rem 0.3rem 0.7rem #333333;

    span {
      color: #fff;
      font-weight: bold;
      font-size: 12px;
    }
  }
`;

function CartButton() {
  const navigate = useNavigate();
  const goToCart = () => navigate('/customer/checkout');
  const productsRedux = useSelector((state) => state.cart.items);

  const totalPrice = productsRedux.reduce((acc, curr) => (
    acc + (curr.quantity * curr.price)
  ), 0);

  return (
    <Fixed
      type="button"
      datatestId="customer_products__button-cart"
      name={
        <>
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            {`Ver carrinho: R$${totalPrice.toFixed(2).replace('.', ',')}` }
          </span>
        </>
      }
      disabled={ totalPrice <= 0 }
      onClick={ goToCart }
    />
  );
}

export default CartButton;
