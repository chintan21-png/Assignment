import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {

  return (

    <div
      className={`
        bg-slate-800 text-white w-64 p-6
        transition-all duration-300
        ${isOpen ? "block" : "hidden"}
        md:block
      `}
    >

      <nav className="flex flex-col gap-4">

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>

      </nav>

    </div>

  );
}

export default Sidebar;