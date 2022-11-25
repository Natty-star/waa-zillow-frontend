import React from "react";
import { useState } from "react";
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


const CustomerList = (props) => {

    const [customers, setcustomers] = useState([
        {
            id: 123,
            firstName: "Silvana",
            lastName: "Ishak",
            email: "se.yemanebalemu@gmail.com",
        },
        {
            id: 1111,
            firstName: "test first",
            lastName: "test last",
            email: "testmail@gmail.com",
        },
        {
            id: 123,
            firstName: "test 2",
            lastName: "last 2",
            email: "test2@gmail.com",

        },

    ]);

    const customerHTML = customers.map((customer) => {

        return (
            <tr key={customer.id}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
                <td></td>
            </tr>
        );
    });
    return (
        <div className="customers">
            <h4>Most recent Customers</h4>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Customer Email</th>
                    </tr>
                </thead>
                <tbody>{customerHTML}</tbody>
            </table>
        </div>
    );
}
export default CustomerList;