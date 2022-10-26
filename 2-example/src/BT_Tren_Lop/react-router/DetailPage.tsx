import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

interface IUser {
  id: string;
  name: string;
}

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});

function DetailPage() {
  let params = useParams();
  const [user, setUser] = useState<IUser>({
    name: "",
    id: "",
  });
  const navi = useNavigate();
  const backListPage = () => {
    navi("/ListPage");
  };

  useEffect(() => {
    getUserApi();
  }, []);

  const getUserApi = () => {
    const url =
      "https://63566e4ea2d1844a97748dc8.mockapi.io/users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
        setUser(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: user.name,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
      const url =
        "https://63566e4ea2d1844a97748dc8.mockapi.io/users/" + params.id;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((json) => {
          // Xử lý kết quả JSON ở đây
          console.log(json);
          getUserApi();
        })
        .catch((error) => {
          // Nếu có lỗi
          console.error(error);
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="detail_user">
          <p className="m-3 p-3 border rounded-lg">
            ID USER:
            {user.id}
          </p>
          <p className="m-3 p-3 border rounded-lg">
            NAME USER:
            {user.name}
          </p>

          <p className="m-3 p-3 border rounded-lg">
            UPDATE NAME:
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </p>
          <div className="btn_backlistPage">
            <button
              className="backListPage text-center"
              type="button"
              onClick={() => backListPage()}
            >
              Back to ListPage
            </button>

            <button
              className="backListPage text-center"
              type="submit"
              onClick={() => {
                alert("Update User Success !!!!!");
                getUserApi();
              }}
            >
              Update User
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default DetailPage;
