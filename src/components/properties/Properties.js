import React from "react";
import "./properties.css";
import Property from "./customer/property/Property";
import SearchInput from "./search/SearchInput";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Properties() {
  const userDetail = localStorage.getItem("user");
  console.log("User Detail", userDetail);
  const [fevPro, setFevPro] = useState([]);

  const addToFev = (property) => {
    let tempFevPro = [...fevPro, property];
    setFevPro(tempFevPro);
    console.log(fevPro);
  };
  const [properties, setProperties] = useState([
    {
      id: "637c75f892731430d96bac2d",
      category: "Rent",
      homeType: null,
      type: "guest house",
      bedrooms: 2,
      title: "first house",
      description: "this is an amazing house",
      price: 1000,
      status: false,
      ownerEmail: "merhatsidk29@gmail.com",
      images: ["https://property-managment.s3.amazonaws.com/1669101047837_png"],
      location: [45.34, 23.34],
    },
    {
      id: "637c75f892731430d96bac2d",
      category: "Rent",
      homeType: null,
      type: "guest house",
      bedrooms: 2,
      title: "first house",
      description: "this is an amazing house",
      price: 1000,
      status: false,
      ownerEmail: "merhatsidk29@gmail.com",
      images: ["https://property-managment.s3.amazonaws.com/1669101047837_png"],
      location: [45.34, 23.34],
    },
  ]);

  const fetchProperties = () => {
    axios
      .get("http://localhost:8084/api/v1/property/")

      .then((response) => {
        console.log(response.data);
        setProperties(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchProperties();
  }, []);

  const propertyListHTML = properties.map((property) => {
    return <Property property={property} fevPro={fevPro} addToFev={addToFev} />;
  });

  return (
    <>
      <div className="cover">
        <div className="center-content center container">
          <div>
            <form className="">
              <SearchInput />
            </form>
          </div>
        </div>
      </div>
      {propertyListHTML}
    </>
  );
}
