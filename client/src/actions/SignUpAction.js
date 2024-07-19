const ApiUrl = import.meta.env.VITE_API_URL;

export default async function SignUpAction(formData) {
  try {
    const response = await fetch(`${ApiUrl}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok !== true) {
      // response.status !== 201
      return false;
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return false;
  }
  return true;
}
