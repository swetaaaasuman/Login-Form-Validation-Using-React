// components/Details.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Details.module.css";

const Details = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  if (!formData) {
    return <p>No data available</p>;
  }

  return (
    <>
      <div className={styles.detailsbody}>
        <div className={styles.details}>
          <h2 className={styles.detailsheading}>Submitted Details</h2>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
          <p>Phone No.: {formData.phone}</p>
          <p>Country: {formData.country}</p>
          <p>City: {formData.city}</p>
          <p>PAN No.: {formData.pan}</p>
          <p>Aadhar No.: {formData.aadhar}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
