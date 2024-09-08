import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          "https://tradescribe-1.onrender.com/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: formData.username,
              email: formData.email,
              password: formData.password,
            }),
          }
        );

        const result = await response.json();
        if (response.ok) {
          navigate("/signin");
        } else {
          setServerError(result.msg || "Error registering user");
        }
      } catch (error) {
        setServerError("Error connecting to the server");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-green-900 font-playfair">
       {/* Top-Right Button */}
       <div className=' flex gap-6 top-10 right-10 absolute sm:hidden bg-none '>
        <button className="btn border-none bg-primary opacity-70 text-white hidden lg:block hover:bg-green-900">
          <Link to="/">Home</Link>
        </button>
     
      <div className="">
        <button className="btn border-none bg-primary opacity-70 text-white hidden lg:block hover:bg-primary">
          <Link to="/">About</Link>
        </button>
      </div>
      </div>

      {/* Dropdown Button for Small Screens */}
      <div className="dropdown dropdown-end t lg:hidden absolute top-10 right-10">
        <div tabIndex={0} role="button" className="btn glass text-black bg-white opacity-20 m-1"><AddIcon /></div>
        <ul tabIndex={0} className="dropdown-content menu border-green-900 bg-gray-300 opacity-20 rounded-box z-[1] w-52 p-2 shadow">
          <li><Link to="/">Home</Link></li>
          <li><a>About</a></li>
        </ul>
      </div>
      <div className="w-full max-w-md p-8 bg-none rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-primary subs">
          Sign Up
        </h2>
        <form >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium  text-primary subs"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none bg-white opacity-20 focus:ring-2 focus:ring-primary"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary

"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white opacity-20 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-primary subs"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white opacity-20 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-primary subs

"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white opacity-20 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {serverError && (
            <p className="text-red-500 text-sm mt-4">{serverError}</p>
          )}

          <button
            onClick={handleSubmit}
            className="w-full py-2 px-4 btn glass  bg-primary-light text-white subs rounded-lg shadow-md hover:bg-primary"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-primary  font-bold text-sm hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
