import axios from "api/axios";

export async function getUsers() {
  try {
    const response = await axios.get("/users?limit=12");

    if (response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.data;
    return data.users;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

export async function createUser(userData) {
  try {
    const response = await axios.post("/users/add", userData);

    if (response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.data;
    return data;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

export async function updateUser(id, newUserData) {
  try {
    const response = await axios.put(`/users/${id}`, newUserData);

    if (response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.data;
    return data;
  } catch (err) {
    console.error("Error updating users:", err);
    throw err;
  }
}

export async function deleteUser(id) {
  try {
    const response = await axios.delete(`/users/${id}`);

    if (response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (err) {
    console.error("Error updating users:", err);
    throw err;
  }
}
