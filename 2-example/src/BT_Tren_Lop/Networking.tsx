import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
 
});

function Networking() {
     
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
        const url = 'https://63528f9fa9f3f34c37416bc8.mockapi.io/api/v1/users';
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((json) => {
            // Xử lý kết quả JSON ở đây
            console.log(json);
          })
          .catch((error) => {
            // Nếu có lỗi
            console.error(error);
          });
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
      
        <input className="form_submit" type="submit" value="Sign in"/>
    </div>
    </form>
  );
}

export default Networking;




