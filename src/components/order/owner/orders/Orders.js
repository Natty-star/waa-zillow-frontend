import React from "react";
import Order from "../order/Order";
import { useState,useEffect } from "react";
import axios from "axios";
export default function Orders() {
  const [orders, setorders] = useState([
    
     
    
  ]);


  // http://localhost:8083/api/v1/orders/user/123

  const fetchOrders = () => {

    
    axios.get("http://localhost:8083/api/v1/orders/user/123",{
      params:{
        role:"ADMIN"
      }
    }
    ).then((response) => {
      console.log(response.data);
      setorders(response.data)
    }).catch((err) => {
      console.log(err.message)
    })
  }

  useEffect(() => {
    fetchOrders();
  }, []);


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
