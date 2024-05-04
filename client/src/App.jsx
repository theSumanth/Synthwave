import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import LoginLayout from "./pages/LoginLayout";
import Auth, { action as authAction } from "./pages/Auth";
import "./App.css";
import HomeLayout from "./pages/HomeLayout";
import Podcasts from "./pages/Podcast/Podcasts";
import CreatePodcast from "./pages/Podcast/CreatePodcast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LoginLayout /> },
      { path: "auth", element: <Auth />, action: authAction },
      {
        path: "home",
        element: <HomeLayout />,
        children: [
          { index: true, element: <Podcasts /> },
          { path: "create-podcast", element: <CreatePodcast /> },
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
