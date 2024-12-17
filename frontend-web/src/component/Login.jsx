import React, { useState } from "react";

const Login = () => {
  const [loginID, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", { loginID, password, role });
    // Add your login logic here (e.g., API call)
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Login ID Field */}
          <div className="mb-4">
            <label
              htmlFor="loginID"
              className="block text-gray-700 text-sm font-medium"
            >
              Login ID
            </label>
            <input
              type="text"
              id="loginID"
              value={loginID}
              onChange={(e) => setLoginID(e.target.value)}
              placeholder="Enter your login ID"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-gray-700 text-sm font-medium"
            >
              Login As
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>

        {/* Footer Links */}
        <div className="flex justify-between items-center mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
