"use client";

import React, { useState } from "react";
import { apiService } from "../Service/apiService"; // Adjust the path based on your folder structure
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("admin");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
      phoneNo,
      companyName,
      address,
      status: "Active",
      createdBy: "Sub admin", // You can make this dynamic as needed
      role: [role],
      organization: {
        orgId: 3, // Adjust this value based on your application logic
      },
    };

    try {
      const response = await apiService.signup(data); // Assuming you have a signup service

      // Store user data in local storage (optional)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);

      // Navigate to the desired page after successful registration
      router.push("/User"); // Redirect to your desired route

      // Show success toast
      toast.success("User registered successfully!");
    } catch (error: any) {
      console.error("Registration failed:", error.message);

      // Show error toast
      toast.error("Registration failed: " + (error.message || "Something went wrong."));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mt-5 text-center">
        <div className="bg-white shadow-md rounded-lg mx-auto max-w-md">
          <div className="card-header text-center py-4">
            <h4 className="text-2xl font-bold text-black">Create User</h4>
            <h2 className="text-gray-600">Create your account</h2>
          </div>
          <div className="card-body mx-auto p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username" className="block text-left text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control w-full border border-gray-300 p-2 rounded-md text-black"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-left text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control w-full border border-gray-300 p-2 rounded-md text-black"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="block text-left text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control w-full border border-gray-300 p-2 rounded-md text-black"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNo" className="block text-left text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control w-full border border-gray-300 p-2 rounded-md text-black"
                  id="phoneNo"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="companyName" className="block text-left text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control w-full border border-gray-300 p-2 rounded-md text-black"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter your company name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="block text-left text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control w-full border border-gray-300 p-2 rounded-md text-black"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-success w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
