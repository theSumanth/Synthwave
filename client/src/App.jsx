import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import RootLayout from "./pages/Root";
import HomeLayout from "./pages/HomeLayout";
import LoginLayout from "./pages/LoginLayout";
import Podcasts from "./pages/Podcast/Podcasts";
import CreatePodcast from "./pages/Podcast/CreatePodcast";
import SearchPodcast from "./pages/Podcast/SearchPodcast";
import Auth, { action as authAction } from "./pages/Auth";
import { loader as logoutLoader } from "../src/pages/Logout";
import "./App.css";
import PageContextProvider from "./store/PageContextProvider";

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
          { path: "search", element: <SearchPodcast /> },
        ],
      },
      { path: "logout", loader: logoutLoader },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageContextProvider>
        <RouterProvider router={router} />
      </PageContextProvider>
    </QueryClientProvider>
  );
}

export default App;
