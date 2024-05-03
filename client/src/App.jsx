import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import LoginLayout from "./pages/LoginLayout";
import Auth from "./pages/Auth";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LoginLayout /> },
      { path: "auth", element: <Auth /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
