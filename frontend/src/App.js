import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ProgressTracker from "./pages/progress-tracker";
import ContactUs from "./pages/contactUs";
import Resources from "./pages/Resources";
import TechNews from "./pages/tech-news";
import Log from "./pages/log";

import { useState, useEffect } from "react";
function App() {
  const [user, setUser] = useState(); // undefined if not logged; { _id: ..., email: ...} if user logged in

  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");
    if (localStorageUser) setUser(JSON.parse(localStorageUser));
    else setUser(null);
  }, []);

  return (
    // Swap between home, login, signup, pt depending on the url
    <BrowserRouter>
      <div className="flex">
        <div class="w-1/4 p-5 bg-gray-100 h-screen">
          <Sidebar setUser={setUser} user={user} />
        </div>
        <div className="w-3/4 p-5 text-center">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/progress-tracker" element={<ProgressTracker />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/logs/:id" element={<Log />} /> 
            {/* dynamtic routing find({title: "cool log"}) => [10 logs] findOne() => returns the *FIRST**/}
            <Route path="/tech-news" element={<TechNews />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
