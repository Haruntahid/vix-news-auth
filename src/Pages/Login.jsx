import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

function Login() {
  const { logInUser } = useContext(AuthContext);

  const handelLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then((result) => console.log(result.user))
      .then((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className=" mt-16">
        <div className="card shrink-0 w-full max-w-xl shadow-2xl mx-auto bg-base-100">
          <form onSubmit={handelLogIn} className="card-body p-16">
            <p className="text-center text-4xl font-semibold">
              Login your account
            </p>
            <div className="divider"></div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white">Login</button>
            </div>
            <div className="text-center mt-4 font-medium">
              <h2>
                Dont’t Have An Account ?{" "}
                <Link className="text-red-400" to={"/register"}>
                  Register
                </Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
