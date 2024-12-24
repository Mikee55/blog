import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = { email, password };

    try {
      const response = await fetch("api/user/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log("User Added");
      toast.success("User added successfully", {
        hideProgressBar: true,
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);

      const json = await response.json();

      if (!response) {
        setError(json.error);
      }
    } catch {
      console.error("Fetch error");
    }
  };
  return (
    <>
      <NavBar />
      <div className="mt-32 flex flex-col justify-center items-center">
        <h3 className="text-3xl">Log in</h3>

        <div className="">
          <form onSubmit={handleSubmit} className="flex flex-col p-10 px-64">
            <label htmlFor="">Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border-2 rounded-lg"
            />

            <label htmlFor="">Password</label>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border-2 rounded-lg"
            />

            <div className="flex justify-center m-2">
              <button className="m-2 p-2 w-40 rounded-lg bg-orange-400">
                Log in
              </button>
            </div>

            <div>
              <h1>
                Sign up{" "}
                <Link to={"/signup"} className="text-sky-700 underline">
                  here
                </Link>{" "}
                if you do not have an account.
              </h1>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />

      <Footer />
    </>
  );
};

export default Login;