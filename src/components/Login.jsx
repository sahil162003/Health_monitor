import React from 'react';
import cal from "../assets/images/cal.jpg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const [message, setMessage] = useState("")
  const handleLogin=(e)=>{

  
  if(name==="sahil" && password==="sahil")
    {
      setMessage("login successfull")
      navigate("/Home")
    }
    else {
      alert("login failed")
      
    }
   
  }
 
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[1000px] h-[900px] relative overflow-hidden rounded-xl">
        {/* Background Image */}
        <img
          src={cal}
          alt="Login banner"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Form overlay */}
        <div className="absolute top-[350px] left-[360px] flex items-center justify-center z-90">
          <form onSubmit={handleLogin}
           className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-[800%] max-w-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Full Name"
              className="w-full py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none mb-4"
            />

            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

              id="password"
              placeholder="Password"
              className="w-full py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none mb-4"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg mb-4"
            >
              Login
            </button>

            <div className="text-center">
              <span className="text-sm text-gray-700">Don't have an account? </span>
              <Link
                to="/Signup"
                className="text-sm font-semibold text-orange-600 hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
