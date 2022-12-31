import React, { useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        console.log(user);
        if (!user) {
          console.log("Login failed");
          setError("Login failed");
        } else {
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          navigate("/");
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl mb-4 text-left">Login</h1>
      {error}
      <form className="max-w-sm flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <label>Email</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            className="px-2 bg-gray-100 rounded-xl border border-gray-200"
          />
        </div>
        <div className="flex justify-between">
          <label>Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            className="px-2 bg-gray-100 rounded-xl border border-gray-200"
          />
        </div>

        <button className="bg-gray-200 rounded-xl py-1">Submit</button>
      </form>
    </div>
  );
}
