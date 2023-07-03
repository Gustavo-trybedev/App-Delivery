import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { clearCart } from '../../redux/slices/cartSlice';
import { addOrder } from '../../redux/slices/orderSlice';
import axiosRequest from '../../utils/axios';

// styles
import SForm from './styles/SForm';
import SelectSeller from './styles/SSelectSeller';

const FieldsContainer = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
  }
`;

const SubmitButton = styled(Button)`
    background-color: #FF6442;
    color: #fff;
    width: 216px;
    height: 47px;
    border-radius: 22px;
    border-color: #FF6442;
    margin-bottom: 2rem;
    margin-top: 2rem;
    &:hover {
      color: white;
      transform: scale(1.05);
    }
`;

function DeliveryDetails() {
  const [selectedSeller, setSelectedSeller] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [sellers, setSellers] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.user.id);
  const token = useSelector((state) => state.user.token);
  const totalPrice = products.reduce((acc, curr) => (
    acc + (curr.quantity * curr.price)
  ), 0);

  useEffect(() => {
    setBtnDisabled(!address || !addressNumber);
  }, [address, addressNumber]);

  useEffect(() => {
    const fetchSellers = async () => {
      const { data } = await axiosRequest({ authorization: token }).get('/sales/sellers'); // por url de get seller
      setSellers(data); // fazer a limpeza dos dados antes
      setSelectedSeller(data[0].id);
    };
    fetchSellers();
  }, [token]);

  return (
    <SForm
      onSubmit={ async (event) => {
        event.preventDefault();
        try {
          const { data } = await (axiosRequest({ authorization: token })).post('/sales', {
            userId,
            address: {
              street: address,
              number: addressNumber,
            },
            sellerId: selectedSeller,
            totalPrice,
            products: products
              .filter((e) => e.quantity > 0)
              .map(({ id, quantity }) => ({ id, quantity })),
          });
          // console.log(`status ${status}`);
          dispatch(addOrder(data.saleId)); // add new order to redux store
          dispatch(clearCart()); // clear cart after purchase
          navigate(`/customer/orders/${data.saleId}`); // url to navigate
        } catch (error) {
          console.log(error);
        }
      } }
    >
      <FieldsContainer>
        <SelectSeller
          name="Vendedor"
          dataTestid="customer_checkout__select-seller"
          value={ selectedSeller }
          onChange={ (e) => { setSelectedSeller(e.target.value); } }
          options={ sellers.map((e) => ({
            name: e.name,
            value: e.id,
          })) }
        />
        <Input
          name="Endereço"
          datatestId="customer_checkout__input-address"
          type="text"
          value={ address }
          onChange={ (e) => { setAddress(e.target.value); } }
          className="address"
        />
        <Input
          name="Número"
          datatestId="customer_checkout__input-address-number"
          type="text"
          value={ addressNumber }
          onChange={ (e) => { setAddressNumber(e.target.value); } }
          className="address-number"
        />
      </FieldsContainer>
      <SubmitButton
        name="Finalizar Pedido"
        datatestId="customer_checkout__button-submit-order"
        disabled={ btnDisabled }
      />
    </SForm>
  );
}

DeliveryDetails.propTypes = {};

export default DeliveryDetails;
