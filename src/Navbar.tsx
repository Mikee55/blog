const NavBar = () => {
  return (
    <div>
      <h1>UpScale</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <form action="#">
          <input type="text" placeholder="search...   " />
        </form>
      </ul>
    </div>
  );
};

export default NavBar;
