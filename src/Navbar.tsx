const NavBar = () => {
  return (
    <div className="fixed top-0 flex justify-between py-3 w-full bg-gray-100">
      <h1 className="px-10 text-2xl font-bold cursor-pointer text-stone-500">
        UpSpace
      </h1>
      <ul className="flex items-center">
        <li className="px-3">
          <a href="#">Home</a>
        </li>
        <li className="px-3">
          <a href="#">Categories</a>
        </li>
        <li className="px-3">
          <a href="#">About</a>
        </li>
        <li className="px-3">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
