import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ setUser, user }) {
  const navigate = useNavigate();
  return (
    <ul className="text-purple-500 text-lg">
      <li className="p-2">
        <Link to="/">About</Link>
      </li>
      <li className="p-2">
        <Link to="/resources">Resources</Link>
      </li>
      <li className="p-2">
        <Link to="/tech-news">Tech News</Link>
      </li>
      <li className="p-2">
        <Link to="/progress-tracker">Progress Tracker</Link>
      </li>
      <li className="p-2">
        <Link to="/contact-us">Contact Us</Link>
      </li>
      {user ? (
        <li className="p-2">
          <button
            onClick={() => {
              localStorage.removeItem("user");
              setUser();
              navigate("/");
            }}
          >
            Logout
          </button>
        </li>
      ) : (
        <>
          <li className="p-2">
            <Link to="/login">Login</Link>
          </li>
          <li className="p-2">
            <Link to="/signup">Sign up</Link>
          </li>
        </>
      )}
    </ul>
  );
}
