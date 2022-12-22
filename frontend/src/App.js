import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ProgressTracker from "./pages/progress-tracker";

function App() {
  return (
    // Swap between home, login, signup, pt depending on the url
    <BrowserRouter>
      <div className="flex">
        <div class="w-1/4 p-5 bg-gray-100 h-screen">
          <Sidebar />
        </div>
        <div className="w-3/4 p-5 text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/progress-tracker" element={<ProgressTracker />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
