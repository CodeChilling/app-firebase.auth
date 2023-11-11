/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../config/AuthContext";
import { Toaster, toast } from "react-hot-toast";

const SignUpComponent = () => {
  const navigate = useNavigate();

  const { signup } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!user.username.trim()) {
      validationErrors.username = "fullname is required";
    }
    if (!user.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!user.password.trim()) {
      validationErrors.password = "password is required";
    } else if (user.password.length < 6) {
      validationErrors.password = "password should be at least 6 char";
    }

    if (user.confirm !== user.password) {
      validationErrors.confirm = "password not matched";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await signup(user.email, user.password);
        toast.success("Account created successfully", {
          duration: 3000,
        });
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } catch (err) {
        console.log(err);
        setErrors(err.message);
        toast.error(err.message, {
          duration: 3000,
        });
      }
    }
  };
  return (
    <div>
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-lg shadow-lg min-w-full"
          >
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
              SignUp!
            </h1>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="username"
                id="username"
                placeholder="username"
                onChange={handleChange}
              />
              {errors.username && <span>{errors.username}</span>}
            </div>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="@email"
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={handleChange}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="confirm"
              >
                Confirm password
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="password"
                name="confirm"
                id="confirm"
                placeholder="confirm password"
                onChange={handleChange}
              />
              {errors.confirm && <span>{errors.confirm}</span>}
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              Register
            </button>
          </form>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <Link
              to="/login"
              className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans"
            >
              <span>Already have an account?</span>
              <br />

              <p className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">
                Login
              </p>
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUpComponent;
