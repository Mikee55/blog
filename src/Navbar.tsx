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
          <a href="#">About</a>
        </li>
        <li className="px-3">
          <a href="#">Contact</a>
        </li>
        <li className="flex items-center px-5 text-slate-100 bg-slate-400 rounded-lg h-7">
          <Link to="/newblog">New Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
