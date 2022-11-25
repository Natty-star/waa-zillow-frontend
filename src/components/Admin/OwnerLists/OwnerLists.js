import axios from 'axios';
import React, { useEffect, useState } from 'react'

function OwnerLists() {

    const [ownersData, setOwnersData] = useState([
        {
        id: "111",
        firstName: "Silvana",
        lastName: "Ishak",
        email: "silvana.nazih@gmail.com",
        isActive : "true"
        },
    {
      
        id: "112",
        firstName: "Merha",
        lastName: "Ayele",
        email: "m.ayele@gmail.com",
        isActive : "true"
        
      },
      {
        id: "113",
        firstName: "Nati",
        lastName: "Teshome",
        email: "nati.nazih@gmail.com",
        isActive : "false"
      },
      {
        id: "114",
        firstName: "Yemane",
        lastName: "Hadis",
        email: "yemane.nazih@gmail.com",
        isActive : "true"
      }
    
  ]);

  const [owners,setOwners] = useState([ownersData]);  

  useEffect(()=>{
    populateOwners();
  },[owners])


const populateOwners = ()=> {
    axios.get('http://localhost:8080/api/v1/users/deactivatedOwner').then(response => {
        setOwners(response.data)
        console.log("status updated");
    })
}

  const activationHandler = (owner) => {
    axios.delete('http://localhost:8082/api/v1/users//' + owner.id).then(response => {
        populateOwners();
        console.log("status updated");
    })
  }



    const propertyHTML = owners.map((owner) => {
    return (
      <tr key={owners.id}>
        <td>{owner.id}</td>
        <td>{owner.firstName}</td>
        <td>{owner.lastName}</td>
        <td>{owner.email}</td>
        <td>{owner.isActive}</td>
        <td> <button className='btn red' onClick={activationHandler(owner)} >Activate</button> </td>
        <td></td>
      </tr>
    );
  });
  return (
    <div className="orders">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Is Active</th>
          </tr>
        </thead>

        <tbody>{propertyHTML}</tbody>
      </table>
    </div>
  )
}

export default OwnerLists

