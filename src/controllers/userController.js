const apiUrl = "https://dummyjson.com/users";

export async function getUsers() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.users;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

export async function createUser(userData) {
  try {
    const response = await fetch(`${apiUrl}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userData }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.users;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

export async function updateUser(id, newUserData) {
  try {
    const response = await fetch(`${apiUrl}/${id}}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newUserData }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.users;
  } catch (err) {
    console.error("Error updating users:", err);
    throw err;
  }
}

export async function deleteUser(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (err) {
    console.error("Error updating users:", err);
    throw err;
  }
}
