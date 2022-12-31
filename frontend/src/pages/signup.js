import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
      }),
    }).then(() => navigate("/login"));
  };

  return (
    <div>
      <h1 className="text-2xl mb-4 text-left">Sign up</h1>
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
        <div className="flex justify-between">
          <label>Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="password"
            className="px-2 bg-gray-100 rounded-xl border border-gray-200"
          />
        </div>

        <button className="bg-gray-200 rounded-xl py-1">Submit</button>
      </form>
    </div>
  );
}
