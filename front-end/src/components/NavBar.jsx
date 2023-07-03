import React, { useEffect, useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { FaOpencart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { clearCart } from '../redux/slices/cartSlice';
import { logout } from '../redux/slices/userSlice';
import Button from './Button';

const SNav = styled.nav`
@media only screen and (min-width: 360px) and (max-width: 480px) {  
  ${tw`
  flex
  justify-between
  items-center
  top-0
  w-full
  `}
  max-width: 100vw;
  height: 3rem;
  span {
    display: flex;
    text-align: center;
    align-items: center;
  }
  background-color: #433f5a;
  }
`;

const SRigth = styled.ul`
@media only screen and (min-width: 360px) and (max-width: 480px) {
  ${tw`
  flex
  justify-end
  right-0
  items-center
  `}

.cart-quantity {
  align-items: center;
  background-color: #FF6442;
  color: #ffcc00;
  border-radius: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  font-size: 11px;
  font-weight: bold;
  height: 15px;
  justify-content: center;
  position: absolute;
  right: 3px;
  top: 1px;
  width: 15px;
  transition: 0.1s ease-in-out 0s;
}
  
  span {
    color: #ffcc00;
    font-weight: bold;
    font-size: 12px;
  }

  button {
    background-color: #433f5a;
    color: #ffcc00;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    height: 1.2rem;
    width: 1.5rem;
    &:active {
      transition: 0.1s;
      transform: scale(1.1);
    }
  }
}
`;

const SLeft = styled.ul`
@media only screen and (min-width: 360px) and (max-width: 480px) {
  ${tw`
  flex
  justify-start
  items-center
  m-1
  left-0
  `}
  align-items: center;

  button {
    background-color: #433f5a;
    border: 1px solid #ffcc00;
    /* color: #ff6442; */
    color: #ffcc00;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    height: 1.2rem;
    width: 4rem;
      &:active {
      transition: 0.1s;
      transform: scale(1.1);
      border: 1px solid rgb(255, 197, 0);
      color: rgb(255, 197, 0);
    }
  }
}
`;

function NavBar(products) {
  const [username, setUsername] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToProducts = () => navigate('/customer/products');

  const goToOrders = (user) => {
    const urlToNavigate = `/${user}/orders`;
    if (urlToNavigate === location.pathname) {
      window.location.reload();
    } else {
      navigate(urlToNavigate);
    }
  };
  
  const logoutOnClick = () => {
    dispatch(clearCart());
    dispatch(logout());
    localStorage.clear();
    navigate('/');
  };

  const name = useSelector((state) => state.user.name);
  const role = useSelector((state) => state.user.role);
  const items = useSelector((state) => state.cart.items);

  const totalQuantity = () => {
    const quantityArray = items.map((item) => item.quantity);

    const sum = quantityArray.reduce((acc, curr) => acc + curr, 0);

    return sum;
  }

  useEffect(() => {
    setUsername(name);
  }, [setUsername, name]);

  return (
    <SNav>
      <SLeft>
        { role === 'seller'
        && <Button
          name="Pedidos"
          datatestId="customer_products__element-navbar-link-orders"
          onClick={ () => goToOrders('seller') }
        />}

        {
          role === 'customer'
        && (
          <>
            <Button
              name="Produtos"
              datatestId="customer_products__element-navbar-link-products"
              onClick={ goToProducts }
            />
            <Button
              name="Pedidos"
              datatestId="customer_products__element-navbar-link-orders"
              onClick={ () => goToOrders('customer') }
            />
          </>
        )
        }
      </SLeft>
      <SRigth>
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { username }
        </span>

        <Button
          name={ <BiLogOut /> }
          datatestId="customer_products__element-navbar-link-logout"
          onClick={ logoutOnClick }
        />
        <div className='cart-quantity'>
          { totalQuantity() }
        </div>
        <Button
          name={ <FaOpencart /> }
          onClick= { () => navigate('/customer/checkout')}
        />
      </SRigth>
    </SNav>
  );
}

export default NavBar;
