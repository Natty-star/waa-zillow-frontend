import React from "react";
import { useState } from "react";


const PropertyList = (props) => {

    const [properties, setproperties] = useState([
        {
            property: {
                id: "637c75f892731430d96bac2d",
                homeType: "Guest House",
                title: "Top 10 Gust House",
            },
            owner: {
                ownerId: "ownerId1234",
                ownerName: "Silvana Ishak",
                ownerEmail: "silvana.nazih@gmail.com",
            },
            price: 123.99,
            startDate: "2022-11-21",
            endDate: "2023-11-21"

        },
        {
            property: {
                id: "637c75f892731430d96bac2d",
                homeType: "Guest House",
                title: "Top 10 Gust House",
            },
            owner: {
                ownerId: "ownerId1234",
                ownerName: "Silvana Ishak",
                ownerEmail: "silvana.nazih@gmail.com",
            },
            price: 123.99,
            startDate: "2022-11-21",
            endDate: "2023-11-21"
        },
        {
            property: {
                id: "637c75f892731430d96bac2d",
                homeType: "Guest House",
                title: "Top 10 Gust House",
            },
            owner: {
                ownerId: "ownerId1234",
                ownerName: "Silvana Ishak",
                ownerEmail: "test@gmail.com",
            },
            price: 123.99,
            startDate: "2022-11-21",
            endDate: "2023-11-21"
        },
    ]);

    // const propertylist = props.propertylist;
    const propertyHTML = properties.map((property) => {
        return (

            <tr key={property.id}>
                <td>{property.property.homeType}</td>
                <td>{property.property.title}</td>
                <td>{property.price}</td>
                <td>{property.owner.ownerEmail}</td>

                {/* <td>{order.startDate}</td>
            <td>{order.endDate}</td> */}
                {/* <td>
                <button className="btn" onClick={() => approveOrderHandler(order)}>
                    Approve
                </button>
                <button
                    className="btn red"
                    onClick={() => declineOrderHandler(order)}
                >
                    Decline
                </button>
            </td> */}
                <td></td>
            </tr>

        );
    });
    return (
        <div className="properties">
            <h4>Most recent Properties</h4>
            <table>
                <thead>
                    <tr>
                        <th>Property Title</th>
                        <th>Property Type</th>
                        <th>Property Price</th>
                        <th>Owner</th>
                    </tr>
                </thead>

                <tbody>{propertyHTML}</tbody>
            </table>
        </div>
    );
}

export default PropertyList;