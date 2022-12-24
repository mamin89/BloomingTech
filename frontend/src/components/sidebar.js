import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul>
      <li className="p-2">
        <Link to="/">About</Link>
      </li>
      <li className="p-2">
        <Link to="/resources">Resources</Link>
      </li>
      <li className="p-2">
        <Link to="/">Tech News</Link>
      </li>
      <li className="p-2">
        <Link to="/progress-tracker">Progress Tracker</Link>
      </li>
      <li className="p-2">
        <Link to="/">Contact Us</Link>
      </li>
      <li className="p-2">
        <Link to="/login">Login</Link>
      </li>
      <li className="p-2">
        <Link to="/signup">Sign up</Link>
      </li>
    </ul>
  );
}
