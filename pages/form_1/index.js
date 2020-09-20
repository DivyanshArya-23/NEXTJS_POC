import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../components/loader/loader";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("FirstName Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("LastName Required"),
  email: Yup.string().email("Invalid email address").required("Email Required"),
  date: Yup.date().max(new Date()).required("Select Date"),
  contact: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Invalid Number")
    .required("Contact Required"),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      date: "",
      contact: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        formik.setSubmitting(false);
        alert("Data Submitted");
      }, 5000);
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mx-auto p-2 col-12 col-md-5"
    >
      {}
      <div className="form-group">
        <label htmlFor="firstName">First Name :</label>
        <input
          className="form-control"
          id="firstName"
          type="text"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <small className="form-text text-danger">
            {formik.errors.firstName}
          </small>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name :</label>
        <input
          className="form-control"
          id="lastName"
          type="text"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <small className="form-text text-danger">
            {formik.errors.lastName}
          </small>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address :</label>
        <input
          className="form-control"
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <small className="form-text text-danger">{formik.errors.email}</small>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact Number :</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">+91</span>
          </div>
          <input
            className="form-control"
            id="contact"
            type="text"
            {...formik.getFieldProps("contact")}
          />
        </div>
        {formik.touched.contact && formik.errors.contact ? (
          <small className="form-text text-danger">
            {formik.errors.contact}
          </small>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="date">Date :</label>
        <input
          className="form-control"
          id="date"
          type="date"
          {...formik.getFieldProps("date")}
        />
        {formik.touched.date && formik.errors.date ? (
          <small className="form-text text-danger">{formik.errors.date}</small>
        ) : null}
      </div>
      <button
        className="btn btn-success"
        type="submit"
        disabled={
          !formik.errors.email &&
          !formik.errors.firstName &&
          !formik.errors.lastName &&
          !formik.errors.date &&
          formik.touched.email &&
          formik.touched.firstName &&
          formik.touched.date &&
          formik.touched.lastName
            ? false
            : true
        }
      >
        Submit
      </button>
      {formik.isSubmitting && <Loader />}
    </form>
  );
};

export default SignupForm;
