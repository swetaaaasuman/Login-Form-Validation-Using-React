import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/details", { state: { formData: formValues } });
    }
  }, [formErrors, isSubmit, navigate, formValues]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "FirstName is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.country) {
      errors.country = "Country is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.pan) {
      errors.pan = "PAN number is required!";
    }
    if (!values.aadhar) {
      errors.aadhar = "Aadhar number is required!";
    }

    return errors;
  };

  return (
    <div className={styles.formbody}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.containerForm}>
          <h1 className={styles.heading}>Login Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label className={styles.fields}>Firstname</label>
              <input
                type="text"
                name="firstName"
                placeholder="FirstName"
                value={formValues.firstName}
                onChange={handleChange}
              />
            </div>
            <p className={styles.formp}>{formErrors.firstName}</p>

            <div className="field">
              <label className={styles.fields}>Lastname</label>
              <input
                type="text"
                name="lastName"
                placeholder="Lastname"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </div>
            <p className={styles.formp}>{formErrors.lastName}</p>

            <div className="field">
              <label className={styles.fields}>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p className={styles.formp}>{formErrors.username}</p>

            <div className="field">
              <label className={styles.fields}>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className={styles.formp}>{formErrors.email}</p>

            <div className="field">
              <label className={styles.fields}>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className={styles.formp}>{formErrors.password}</p>

            <div className="field">
              <label className={styles.fields}>Phone No.</label>
              <input
                type="text"
                name="phone"
                placeholder="Phone No."
                value={formValues.phone}
                onChange={handleChange}
              />
            </div>
            <p className={styles.formp}>{formErrors.phone}</p>

            <div className="field">
              <label className={styles.fields}>Country</label>
              <select
                name="country"
                value={formValues.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <p className={styles.formp}>{formErrors.country}</p>

            <div className="field">
              <label>City</label>
              <br />
              <select
                name="city"
                value={formValues.city}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="Odisha">Cuttack</option>
                <option value="Maharashtra">Bhubaneswar</option>
                {/* Add more cities as needed */}
              </select>
            </div>
            <p className={styles.formp}>{formErrors.city}</p>

            <div className="field">
              <label className={styles.fields}>PAN No.</label>
              <input
                type="text"
                name="pan"
                placeholder="PAN No."
                value={formValues.pan}
                onChange={handleChange}
              />
            </div>
            <p className={styles.formp}>{formErrors.pan}</p>

            <div className="field">
              <label className={styles.fields}>Aadhar No.</label>
              <input
                type="text"
                name="aadhar"
                placeholder="Aadhar No"
                value={formValues.aadhar}
                onChange={handleChange}
              />
            </div>
            <p className={styles.formp}>{formErrors.aadhar}</p>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
