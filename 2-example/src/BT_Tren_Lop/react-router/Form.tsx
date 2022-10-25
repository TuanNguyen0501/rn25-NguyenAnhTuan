import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ||
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Enter Phone number or Email(need @gmail.com)"
    )
    .required("The name is not blank"),

  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

function Form_06() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
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
    <form className="form6" onSubmit={formik.handleSubmit}>
      <div className="banner_app">
        <img
          width={"900px"}
          height={"700px"}
          src="https://grovia.wpenginepowered.com/wp-content/uploads/2022/08/Grovia-HeroImage.png"
          alt=""
        />
      </div>

      <div className="login_app">
        <img
          width={"200px"}
          height={"100px"}
          src="https://grovia.io/wp-content/uploads/2021/03/Grovia-Logo-01.png"
          alt=""
        />
        <h1 className="mt-5 mb-5">Login</h1>
        <p className="fw-bold">Login to your account</p>
        <p>
          Thanks you for get back to Grovia,lets access our the best
          recommendation contact for you.
        </p>

        <div className="form6_name">
          <p>Username </p>
          <input
            className="w-100"
            name="name"
            placeholder="Email or Phone Number"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{formik.touched.name ? formik.errors.name : null}</p>
        </div>
        <div className="form6_pass">
          <p>Password </p>
          <input
            className="w-100"
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{formik.touched.password ? formik.errors.password : null}</p>
        </div>
        <div className="form6_checkbox mb-3">
          <input
            className="checkbox"
            type="checkbox"
            name="checkbox"
            value={formik.values.checkbox}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Remember me
          <div className="resetPass">
            <span>
              <a className="text-danger" href="">
                Reset Password?
              </a>
            </span>
          </div>
        </div>
        <input
          className="form_submit w-100 bg-danger text-uppercase"
          type="submit"
          value="Sign in"
        />

        <div className="footer mt-3">
          <span>Don't have an account yet?</span>
          <span>
            <a className="text-danger" href="">
              Join Grovia Now!
            </a>
          </span>
        </div>
      </div>
    </form>
  );
}

export default Form_06;
