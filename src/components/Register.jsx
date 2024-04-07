import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

function Register() {
  // const { createUser } = useContext(AuthContext);
  const { createUser } = useContext(AuthContext);

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // create user
    createUser(email, password)
      .then((result) => console.log(result.user))
      .then((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <div className=" mt-16">
        <div className="card shrink-0 w-full max-w-xl shadow-2xl mx-auto bg-base-100">
          <form onSubmit={handelRegister} className="card-body p-16">
            <p className="text-center text-4xl font-semibold">
              Register your account
            </p>
            <div className="divider"></div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Photo URL"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white">Register</button>
            </div>
            <div className="text-center mt-4 font-medium">
              <h2>
                Already Have An Account ?{" "}
                <Link className="text-red-400" to={"/login"}>
                  Login
                </Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
