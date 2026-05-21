import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/SA-en-20260511-TRIFECTA-perspective_13385521-6c56-45ed-bc1b-ba5c67e8d866_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 my-36 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Nmae"
            className="my-4 p-4 w-full bg-gray-600 "
          />
        )}
        <input
          type="text"
          placeholder="E-mail"
          className="my-4 p-4 w-full bg-gray-600 "
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-600"
        />
        <button className="bg-red-700 my-6 p-4 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 px-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
