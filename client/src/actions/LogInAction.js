const ApiUrl = import.meta.env.VITE_API_URL;

export default async function LogInAction(formData) {
  try {
    const response = await fetch(`${ApiUrl}/api/auth/log-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    if (response.ok !== true) {
      // response.status !== 201
      return false;
    }
    const { user } = await response.json();
    return user;
  } catch (err) {
    console.error("Fetch error:", err);
    return false;
  }
}
