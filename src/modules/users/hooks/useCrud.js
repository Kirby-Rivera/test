import { getUsers } from "controllers/userController";
import { useState, useEffect } from "react";

export function useCrud() {
  const [users, setUsers] = useState();

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return {
    users,
  };
}
