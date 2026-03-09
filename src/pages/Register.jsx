import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Registration Successful!");

    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-500 ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
