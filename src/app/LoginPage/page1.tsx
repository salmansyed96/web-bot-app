// components/LoginForm.tsx
"use client";
import React, { useEffect, useState } from "react";
import { apiService } from "../Service/apiService";
//import { useRouter } from 'next/router'; // Import useRouter from next/router
  import { useRouter } from 'next/router';



const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ROLE_SUPERADMIN");
  //const [isClient, setIsClient] = useState(false); 
  const [isClient, setIsClient] = useState(false);
 //const router = isClient ? useRouter() : null;
  //const router = useRouter(); // Use useRouter from next/router
  //const history = useHistory(); // React Router's history hook

  //const [router, setRouter] = useState(null); // useState to hold the router

  // useEffect(() => {
  //   setIsClient(true);
  //   if (typeof window !== 'undefined') {
  //     setRouter(useRouter()); // Initialize useRouter only when it's on client-side
  //   }
  // }, []);

  const router = useRouter();



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let data = {
      username: username,
      password: password,
      role: [role],
    };
    try {
      const response: any = await apiService.login(data);
      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.token);
      localStorage.setItem("token_expire", response.expiryTime);

      // add routing
      router.push('/User');
    } catch (error: any) {
      
      console.error("Login failed:", error.message);
    }

    //   {
    //     "username" : "superadmin",
    //     "password" : "12345",
    //     "role":["ROLE_SUPERADMIN"]
    // }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mt-5 text-center">
        <div className="bg-white shadow-md rounded-lg mx-auto max-w-md">
          <div className="card-header text-center py-4">
            <h4 className="text-2xl font-bold text-black">Welcome</h4>
            <h2 className=" text-gray-600">Sign up to get started</h2>
          </div>
          <div className="card-body mx-auto p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="form-group">
                <label
                  htmlFor="username"
                  className="block text-left text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="form-control w-full border border-gray-300 p-2 rounded-md text-black" // Added text-black for black text color
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="password"
                  className="block text-left text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control w-full border border-gray-300 p-2 rounded-md text-black" // Added text-black for black text color
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-left text-gray-700">Role</label>
                <div className="flex items-center space-x-4">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input mr-2"
                      type="radio"
                      id="adminRole"
                      name="role"
                      value="ROLE_ADMIN"
                      checked={role === "ROLE_ADMIN"}
                      onChange={() => setRole("ROLE_ADMIN")}
                    />
                    <label
                      className="form-check-label text-gray-700"
                      htmlFor="adminRole"
                    >
                      Admin
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input mr-2"
                      type="radio"
                      id="superadminRole"
                      name="role"
                      value="ROLE_SUPERADMIN"
                      checked={role === "ROLE_SUPERADMIN"}
                      onChange={() => setRole("ROLE_SUPERADMIN")}
                    />
                    <label
                      className="form-check-label text-gray-700"
                      htmlFor="superadminRole"
                    >
                      Superadmin
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center mt-3 text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
