import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import RootLayout from "./pages/Root";
import LoginLayout from "./pages/LoginLayout";
import Auth, { action as authAction } from "./pages/Auth";
import "./App.css";
import HomeLayout from "./pages/HomeLayout";
import Podcasts from "./pages/Podcast/Podcasts";
import CreatePodcast from "./pages/Podcast/CreatePodcast";
import { action as logoutAction } from "../src/pages/Logout";

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
          { path: "search", element: <></> },
        ],
      },
      { path: "logout", action: logoutAction },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
