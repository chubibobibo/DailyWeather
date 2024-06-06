import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import pages
import HomeLayout from "./pages/HomeLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardLayout from "./pages/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";
import Index from "./pages/Index";

//import acions
import { action as registerAction } from "./pages/RegisterPage.jsx";
import { action as loginAction } from "./pages/LoginPage.jsx";
//loaders
// import { loader as weatherLoader } from "./pages/Index.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Index />,
          // loader: weatherLoader,
        },
        {
          path: "login",
          element: <LoginPage />,
          action: loginAction,
        },
        {
          path: "register",
          element: <RegisterPage />,
          action: registerAction,
        },
        {
          path: "Dashboard",
          element: <DashboardLayout />,
        },
      ],
    },
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
