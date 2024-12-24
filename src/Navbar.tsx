import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed z-10 top-0 flex justify-between py-3 w-full bg-gray-100">
      <h1 className="px-10 text-2xl font-bold cursor-pointer text-stone-500">
        <Link to="/">UpSpace</Link>
      </h1>
      <ul className="flex items-center m-2">
        <li className="px-3">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3">
          <Link to="/categories">Categories</Link>
        </li>
        <li className="px-3">
          <Link to="/about">About</Link>
        </li>

        <li className="flex items-center px-5 mx-4 text-slate-800 bg-opacity-85 rounded-lg h-7 border-2 border-sky-700 hover:bg-orange-600">
          <Link to="/newblog">Add Blog</Link>
        </li>
        <li className="flex items-center px-5 text-slate-100 border-2 border-sky-700 bg-sky-700 bg-opacity-85 rounded-lg h-7  hover:bg-orange-600">
          <Link to="/login">Login/Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
