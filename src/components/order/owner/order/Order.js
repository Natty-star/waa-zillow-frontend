import React from "react";
import "./orders.css";
export default function Order(props) {
  const declineOrderHandler = (order) => {
    //send http request

    props.removeOrder(order);
    console.log(order.price);
  };
  const approveOrderHandler = (order) => {
    //send http request

    props.removeOrder(order);

    console.log(order.price);
  };

  const orders = props.orders;
  const propertyHTML = orders.map((order) => {
    return (
      <tr key={order.id}>
        <td>{order.price}</td>
        <td>{order.customer.customerName}</td>
        <td>{order.property.propertyTitle}</td>
        <td>{order.startDate}</td>
        <td>{order.endDate}</td>
        <td>
          <button className="btn" onClick={() => approveOrderHandler(order)}>
            Approve
          </button>
          <button
            className="btn red"
            onClick={() => declineOrderHandler(order)}
          >
            Decline
          </button>
        </td>
        <td></td>
      </tr>
    );
  });
  return (
    <div className="orders">
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Customer Name</th>
            <th>Property Title</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>

        <tbody>{propertyHTML}</tbody>
      </table>
    </div>
  );
}
