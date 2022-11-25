import { Divider, ImageList, ImageListItem } from "@mui/material";
import axios from "axios";
import { React, useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";
import "./propertyDetail.css";
export default function PropertyDetail() {
  const formData = useRef();
  const param = useParams();
  const [property, setProperty] = useState({});

  const rentProperty = async (e) => {
    e.preventDefault();
    const form = formData.current;
    const order = {
      customer: {
        customerId: "yemane123",
        customerName: "SilvanaIshak",
        customerEmail: "se.yemanebalemu@gmail.com",
      },
      property: {
        propertyId: property.id,
        propertyType: property.category,
        propertyTitle: property.title,
      },
      owner: {
        ownerId: "ownerID",
        ownerName: "Yemane Abrha",
        ownerEmail: property.ownerEmail,
      },
      price: property.price,
      startDate: form["intialdate"].value,
      endDate: form["finaldate"].value,
    };

    axios
      .post("http://localhost:8083/api/v1/orders/", order)
      .then((response) => {
        console.log("Submited Success fully");
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(order);
  };

  const buyProperty = async (e) => {
    const order = {
      customer: {
        customerId: "yemane123",
        customerName: "SilvanaIshak",
        customerEmail: "se.yemanebalemu@gmail.com",
      },
      property: {
        propertyId: property.id,
        propertyType: property.category,
        propertyTitle: property.title,
      },
      owner: {
        ownerId: "ownerID",
        ownerName: "Yemane Abrha",
        ownerEmail: property.ownerEmail,
      },
      price: property.price,
      startDate: "Today",
      endDate: "No Limit",
    };
    axios
      .post("http://localhost:8083/api/v1/orders/", order)
      .then((response) => {
        console.log("Submited Success fully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const fetchProduct = () => {
    axios
      .get("http://localhost:8084/api/v1/property/" + param.id)

      .then((response) => {
        setProperty(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {property != null && property.images != null ? (
        <div className="detail">
          <div className="left-detail">
            <ImageList
              sx={{ width: 1000, height: 1000 }}
              cols={2}
              rowHeight={164}
            >
              {property.images.map((item) => (
                <ImageListItem key={item} className="imageItem">
                  <img className="image" src={item} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </div>

          <div className="center">
            <div className="right-detail">
              <div>
                <div>
                  <h4>
                    Title : <strong>{property.title}</strong>{" "}
                  </h4>
                </div>
                <Divider />

                <div>
                  <h4>
                    Home Type : <strong>{property.homeType}</strong>
                  </h4>
                </div>

                <Divider />

                <div>
                  <h4>
                    Bedrooms : <strong>{property.bedrooms}</strong>
                  </h4>
                </div>
                <Divider />

                <div>
                  <h4>
                    Bathrooms : <strong>{property.bathrooms}</strong>
                  </h4>
                </div>
                <Divider />

                <div>
                  <h4>
                    Price : <strong>{property.price}</strong>
                  </h4>
                </div>
                <Divider />

                <div>
                  <h4>
                    Area : <strong>{property.area} sq ft</strong>
                  </h4>
                </div>
                <Divider />

                <div>
                  <h4>
                    Owner Email : <strong>{property.ownerEmail}</strong>
                  </h4>
                </div>
                {property.category == "RENT" ? (
                  <div>
                    <form ref={formData}>
                      <label for="first_name">Intial Date</label>
                      <input name="intialdate" type="date" class="datepicker" />
                      <label for="first_name">Final Date</label>
                      <input type="date" name="finaldate" class="datepicker" />
                      <button
                        name="action"
                        onClick={rentProperty}
                        className="succcess btn-large"
                      >
                        RENT
                      </button>
                    </form>
                  </div>
                ) : (
                  <button onClick={buyProperty} className="succcess btn-large ">
                    BUY
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}
