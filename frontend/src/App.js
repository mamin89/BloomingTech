import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/progress-tracker",
    element: <progress-tracker />,
  }
]);

function App() {
  return (
    // Swap between home, login, signup, pt depending on the url
    <RouterProvider router={router} />
  );
}

export default App;
