import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const session = JSON.parse(localStorage.getItem("session"));

  useEffect(() => {
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
  }, [navigate, session]);

  const timeLeft = session
    ? Math.floor((session.expiry - Date.now()) / 1000)
    : 0;

  return (
    <div>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />

        <div className="p-6 flex-1">
          <h1 className="text-3xl font-bold">Welcome {user?.name} 👋</h1>

          <p className="mt-4 text-gray-600">
            Session expires in {timeLeft} seconds
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
