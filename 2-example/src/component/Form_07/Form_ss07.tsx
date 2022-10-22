import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Email Error(need @gmail.com)"
    )
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("Email Address is required"),

  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),

  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

  address: Yup.string()
    .required("Address is required")
    .matches(/[0-9]/, "Enter number address")
    .matches(/[a-zA-Z]/, "Enter street"),

  address2: Yup.string()
    .required("Address is required")
    .matches(/[0-9]/, "Enter number address")
    .matches(/[a-zA-Z]/, "Enter aprtement, studio or floor"),
});

function RegisterFormWithYup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      address2: "",
      city: "Thành phố Hà Nội",
      district: "",
      commune: "",
      checkbox: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChange = (e: any) => {
    console.log(e.target);
  };

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="form_name">
        <p>Name: </p>
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.touched.name ? formik.errors.name : null}</p>
      </div>
      <div className="form_emailandpass">
      <div className="form_email">
        <p>Email: </p>
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.touched.email ? formik.errors.email : null}</p>
      </div>
      <div className="form_pass">
        <p>Password: </p>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.touched.password ? formik.errors.password : null}</p>
      </div>
      </div>
      <div className="form_add">
        <p>Address: </p>
        <input
          name="address"
          placeholder="1234 Main st"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.touched.address ? formik.errors.address : null}</p>
      </div>
      <div className="form_add2">
        <p>Address2: </p>
        <input
          name="address2"
          placeholder="Apartment, studio, or floor"
          value={formik.values.address2}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}

        />
        <p>{formik.touched.address2 ? formik.errors.address2 : null}</p>
      </div>
      <div className="form_city">
        <p>City: </p>
        <select
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="Thành phố Hà Nội">Thành phố Hà Nội</option>
          <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
          <option value="Thành phố Đà Nẵng">Thành phố Đà Nẵng</option>
        </select>
        <p>{formik.touched.city ? formik.errors.city : null}</p>
      </div>
      <div className="form_district">
        <p>District: </p>
        <select
          name="district"
          value={formik.values.district}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="Quận Thanh Xuân">Quận Thanh Xuân</option>
          <option value="Quận Hải Châu">Quận Hải Châu</option>
          <option value="Quận Đống Đa">Quận Đống Đa</option>
        </select>
        <p>{formik.touched.district ? formik.errors.district : null}</p>
      </div>
      <div className="form_commune">
        <p>Commune: </p>
        <select
          name="communes"
          value={formik.values.commune}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="Phường Hòa Cường Nam">Phường Hòa Cường Nam</option>
          <option value="Phường Hòa Cường Bắc">Phường Hòa Cường Bắc</option>
          <option value="Phường Hòa Thuận Đông">Phường Hòa Thuận Đông</option>
        </select>
        <p>{formik.touched.commune ? formik.errors.commune : null}</p>
      </div>
      <div className="form_checkbox">
      <input
        type="checkbox"
        name="checkbox"
        value={formik.values.commune}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />{" "}
      Check me out <br />
      </div>
      <input className="form_submit" type="submit" value="Sign in"/>
    
    </form>
  );
}

export default RegisterFormWithYup;
