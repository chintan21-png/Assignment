import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div className="w-60 bg-gray-800 text-white min-h-screen p-5">

      <ul className="space-y-4">

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;