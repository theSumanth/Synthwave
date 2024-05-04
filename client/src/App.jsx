import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import LoginLayout from "./pages/LoginLayout";
import Auth from "./pages/Auth";
import "./App.css";
import HomeLayout from "./pages/HomeLayout";
import Podcasts from "./pages/Podcast/Podcasts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LoginLayout /> },
      { path: "auth", element: <Auth /> },
      {
        path: "home",
        element: <HomeLayout />,
        children: [
          { index: true, element: <Podcasts /> },
          { path: "create-podcast", element: <></> },
        ],
      },
      { path: "search", element: <></> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
