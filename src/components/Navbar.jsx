import { useNavigate } from "react-router-dom";

function Navbar({ toggleSidebar }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("session");
    navigate("/login");
  };

  return (

    <div className="bg-blue-600 text-white flex items-center justify-between px-4 py-3">

      <div className="flex items-center gap-3">

        <button
          className="text-2xl"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        <h1 className="text-lg md:text-xl font-bold">
          E-Commerce Dashboard
        </h1>

      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>

    </div>

  );
}

export default Navbar;