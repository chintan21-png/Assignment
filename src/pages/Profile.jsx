import { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));

    alert("Profile updated successfully!");
  };

  return (
    <div>
      <div className="flex">
        <div className="p-6 flex-1">
          <h2 className="text-2xl font-bold mb-6">Profile</h2>

          <div className="max-w-md space-y-4">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Name"
            />

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Email"
            />

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Password"
            />

            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
