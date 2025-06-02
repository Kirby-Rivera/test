const apiUrl = "https://dummyjson.com/users";

export async function getUsers() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.users; // Return the fetched JSON data
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Ensure errors propagate for handling elsewhere
  }
}
