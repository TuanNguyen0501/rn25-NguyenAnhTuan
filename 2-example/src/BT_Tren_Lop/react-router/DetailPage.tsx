import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

interface IUser {
  id: string;
  name: string;
}

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

  return (
    <>
      <div className="rounded-lg ml-2 w-[25%] p-1 text-sm text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <p className="m-3 p-3 border rounded-lg">
          ID USER:   
          <code className="text-yellow-600 font-bold text-[16px] ml-3">
            {user.id}
          </code>
        </p>
        <p className="m-3 p-3 border rounded-lg">
          NAME USER:   
          <code className="text-yellow-600 font-bold text-[16px] ml-3">
            {user.name}
          </code>
        </p>
        <div className="btn_backlistPage">
        <button
          className="backListPage text-center"
          type="button"
          onClick={() => backListPage()}
        >
          Back to ListPage
        </button>
        </div>
      </div>
    </>
  );
}

export default DetailPage;