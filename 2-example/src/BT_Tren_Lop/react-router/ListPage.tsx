import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}

function ListPage() {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const navi = useNavigate();

  useEffect(() => {
    getListUserApi();
  }, []);

  const gotoDetail = (id: string) => {
    console.log(id);
    navi("/DetailPage/" + id);
  };

  const getListUserApi = () => {
    const url = "https://63566e4ea2d1844a97748dc8.mockapi.io/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        // console.log(json);
        setUsers(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  const deleteUser = (id: string) => {
    console.log("delete", id);
    const url = "https://63566e4ea2d1844a97748dc8.mockapi.io/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log("delete success", json);
        let arr = users.filter((user) => user.id !== json.id);
        setUsers(arr);
        getListUserApi();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
    <table className="table table-dark table-striped mt-5">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="py-5 px-6 w-[20%]">ID</th>
              <th className="py-5 px-6 w-[50%]">Name</th>
              <th className="py-5 px-6 w-[25%]">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: IUser) => {
              return (
                <tr
                  key={`userID-${user.id}`}
                  className="bg-white border-b dark:bg-green-800 dark:border-green-700"
                >
                  <th className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    {user.id}
                  </th>
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6">
                    <button
                      type="button"
                      className="btn btn-info me-4"
                      onClick={() => gotoDetail(user.id)}
                    >
                      Detail
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
</table>

        
    </>
  );
}

export default ListPage;