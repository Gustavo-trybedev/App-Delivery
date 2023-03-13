import React, { useContext, useEffect, useState } from 'react';
import OrderContext from './OrderContext';
import Button from '../../components/Button';

const lintLength = 4;

function ListHeader() {
  const order = useContext(OrderContext);
  const [disabled, setDisabled] = useState(true);
  const index = 1;// tem que pegar o index

  useEffect(() => {
    setDisabled(order.status.toLowerCase() === 'entregue');
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
        {order.date}

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
        onClick={ () => {} }
        name="MARCAR COMO ENTREGUE"
        disabled={ disabled }
      />
    </div>
  );
}

export default ListHeader;
