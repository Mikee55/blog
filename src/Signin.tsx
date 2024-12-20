import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Signin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
      });
  });

  return (
    <>
      <NavBar />
      <div className="mt-32">
        <h1>Log in</h1>
        <h1>Sign Up</h1>
      </div>
      <div>{user}</div>
      <Footer />
    </>
  );
};

export default Signin;
