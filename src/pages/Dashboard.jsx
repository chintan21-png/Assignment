import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const session = JSON.parse(localStorage.getItem("session"));

    if (!session) {
      navigate("/login");
      return;
    }

    const currentTime = Date.now();

    if (currentTime > session.expiry) {
      localStorage.removeItem("session");
      alert("Session expired. Please login again.");
      navigate("/login");
    }

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("session");
    navigate("/login");
  };

  return (

    <div className="p-10">

      <div className="flex justify-between">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

      <p className="mt-5 text-lg">
        Welcome to the E-Commerce Dashboard 
      </p>

      <p className="mt-2 text-gray-600">
        Session expires in 5 minutes.
      </p>

    </div>

  );
}

export default Dashboard;