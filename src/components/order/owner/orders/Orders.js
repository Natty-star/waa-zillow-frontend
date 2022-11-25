import React from "react";
import Order from "../order/Order";
import { useState } from "react";
export default function Orders() {
  const [orders, setorders] = useState([
    {
      id: 123,
      customer: {
        customerId: "yemame123",
        customerName: "Silvana Ishak",
        customerEmail: "se.yemanebalemu@gmail.com",
      },

      property: {
        propertyId: "637c75f892731430d96bac2d",
        propertyType: "Guest House",
        propertyTitle: "Top 10 Gust House",
      },
      owner: {
        ownerId: "ownerId1234",
        ownerName: "Silvana Ishak",
        ownerEmail: "silvana.nazih@gmail.com",
      },
      price: 123.99,
      startDate: "2022-11-21",
      endDate: "2023-11-21",
    },
    {
      id: 345,
      customer: {
        customerId: "yemame123",
        customerName: "Silvana Ishak",
        customerEmail: "se.yemanebalemu@gmail.com",
      },

      property: {
        propertyId: "637c75f892731430d96bac2d",
        propertyType: "Guest House",
        propertyTitle: "Top 10 Gust House",
      },
      owner: {
        ownerId: "ownerId1234",
        ownerName: "Silvana Ishak",
        ownerEmail: "silvana.nazih@gmail.com",
      },
      price: 123.99,
      startDate: "2022-11-21",
      endDate: "2023-11-21",
    },
  ]);
  const removeOrder = (order) => {
    console.log("Order", order);
    let newOrders = orders.filter((item) => item.id !== order.id);
    setorders(newOrders);
  };

  return (
    <div>
      <Order orders={orders} removeOrder={removeOrder} />
    </div>
  );
}
