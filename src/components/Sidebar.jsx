import { Link } from "react-router-dom";

function Sidebar({ isOpen, closeSidebar }) {

  return (

    <>
      <div
        className={`
        fixed md:static top-0 left-0 h-full w-64
        bg-slate-800 text-white p-6
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        transition-transform duration-300
        z-50
        `}
      >

        <nav className="flex flex-col gap-4 mt-10">

          <Link to="/dashboard" onClick={closeSidebar}>Dashboard</Link>
          <Link to="/products" onClick={closeSidebar}>Products</Link>
          <Link to="/cart" onClick={closeSidebar}>Cart</Link>
          <Link to="/profile" onClick={closeSidebar}>Profile</Link>

        </nav>

      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

    </>
  );
}

export default Sidebar;