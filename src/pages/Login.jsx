import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("User not registered");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      // Create session (5 minutes)
      const session = {
        user: storedUser.email,
        expiry: Date.now() + 5 * 60 * 1000,
      };

      localStorage.setItem("session", JSON.stringify(session));

      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?
          <Link to="/" className="text-blue-500 ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
