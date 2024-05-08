import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import RootLayout from "./pages/Root";
import HomeLayout from "./pages/HomeLayout";
import LoginLayout from "./pages/LoginLayout";
import Podcasts from "./pages/Podcast/Podcasts";
import CreatePodcast, {
  loader as checkPrivateRoute,
} from "./pages/Podcast/CreatePodcast";
import SearchPodcast from "./pages/Podcast/SearchPodcast";
import Error from "./pages/Error.jsx";
import PageContextProvider from "./store/PageContextProvider";
import ViewSinglePodcast, {
  loader as addViewForPodcast,
} from "./pages/Podcast/ViewSinglePodcast";
import Auth, { action as authAction } from "./pages/Auth";
import { action as logoutAction } from "../src/pages/Logout";
import { checkAuthorized } from "./util/auth";
import {
  fetchPodcasts,
  fetchTrendingPodcasts,
  queryClient,
} from "./util/http.js";
import "./App.css";

const routeDefinitons = createRoutesFromElements(
  <Route>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LoginLayout />} />
      <Route path="auth" element={<Auth />} action={authAction} />
      <Route path="logout" action={logoutAction} />
      <Route path="home" element={<HomeLayout />} loader={checkAuthorized}>
        <Route
          index
          element={
            <Podcasts fetchFn={fetchPodcasts} qKey={"Synthwave Podcasts"} />
          }
        />
        <Route
          path="create-podcast"
          element={<CreatePodcast />}
          loader={checkPrivateRoute}
        />
        <Route path="search" element={<SearchPodcast />} />
        <Route
          path=":podcastId"
          element={<ViewSinglePodcast />}
          loader={addViewForPodcast}
        />
        <Route
          path="trending-podcasts"
          element={
            <Podcasts
              fetchFn={fetchTrendingPodcasts}
              qKey={"Trending Podcasts"}
            />
          }
        />
      </Route>
    </Route>
  </Route>
);

const router = createBrowserRouter(routeDefinitons);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: (
//       <Error
//         message={"Failed to provide response"}
//         title={"An error occured"}
//       />
//     ),
//     children: [
//       { index: true, element: <LoginLayout /> },
//       { path: "auth", element: <Auth />, action: authAction },
//       {
//         path: "home",
//         element: <HomeLayout />,
//         loader: checkAuthorized,
//         children: [
//           {
//             index: true,
//             element: (
//               <Podcasts fetchFn={fetchPodcasts} qKey={"Synthwave Podcasts"} />
//             ),
//           },
//           {
//             path: "create-podcast",
//             element: <CreatePodcast />,
//             loader: () => {
//               if (!checkIsAdmin()) return redirect("/home");
//               return null;
//             },
//           },
//           { path: "search", element: <SearchPodcast /> },
//           {
//             path: ":podcastId",
//             element: <ViewSinglePodcast />,
//             loader: addViewForPodcast,
//           },
//           {
//             path: "trending-podcasts",
//             element: (
//               <Podcasts
//                 fetchFn={fetchTrendingPodcasts}
//                 qKey={"Trending Podcasts"}
//               />
//             ),
//           },
//         ],
//       },
//       { path: "logout", action: logoutAction },
//     ],
//   },
// ]);

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
