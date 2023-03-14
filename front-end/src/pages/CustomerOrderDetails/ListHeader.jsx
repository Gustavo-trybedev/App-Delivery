import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OrderContext from './OrderContext';
import Button from '../../components/Button';
import axiosRequest from '../../utils/axios';

const lintLength = 4;
const lintLength2 = 10;

function ListHeader() {
  const { order, fetchOrder } = useContext(OrderContext);
  const [disabled, setDisabled] = useState(true);
  const token = useSelector((state) => state.user.token);
  const index = useSelector((state) => state.orders.findIndex((e) => e === order.saleId));
  // const date = new Date(order.saleDate).toLocaleDateString();

  useEffect(() => {
    setDisabled(order.status.toLowerCase() !== 'em trânsito');
  }, [order]);

  return (
    <div>
      <span
        className="order-index"
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {`PEDIDO ${String(order.saleId).padStart(lintLength, '0')}`}
      </span>
      <span
        className="seller"
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`P.Vend: ${order.seller.name}`}

      </span>
      <span
        className="date"
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {order.saleDate.slice(0, lintLength2).split('-').reverse().join('/')}

      </span>
      <span
        className="status"
        data-testid={
          `customer_order_details__element-order-details-label-delivery-status${index}`
        }
      >
        {order.status}

      </span>
      <Button
        className="confirm-delivery"
        datatestId="customer_order_details__button-delivery-check"
        type="button"
        clickDouble
        onClick={ async () => {
          const { status } = await axiosRequest({ authorization: token })
            .put(`/sales/user/${order.saleId}`);
          if (status) {
            fetchOrder(); // reload window to get new request
          }
        } }
        name="MARCAR COMO ENTREGUE"
        disabled={ disabled }
      />
    </div>
  );
}

export default ListHeader;
