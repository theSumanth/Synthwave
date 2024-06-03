import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { SkeletonTheme } from "react-loading-skeleton";

import RootLayout from "./pages/Root";
import HomeLayout from "./pages/HomeLayout";
import LoginLayout from "./pages/LoginLayout";
import Podcasts from "./pages/Podcast/Podcasts";
import SearchPodcast from "./pages/Podcast/SearchPodcast";
import PageContextProvider from "./store/PageContextProvider";
import CreatePodcast, {
  loader as checkPrivateRoute,
} from "./pages/Podcast/CreatePodcast";
import Error from "./pages/Error.jsx";
import ViewSinglePodcast, {
  loader as addViewForPodcast,
} from "./pages/Podcast/ViewSinglePodcast";
import Auth, { action as authAction } from "./pages/Auth";
import { checkAuthorized } from "./util/auth";
import { action as logoutAction } from "../src/pages/Logout";
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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageContextProvider>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <RouterProvider router={router} />
        </SkeletonTheme>
      </PageContextProvider>
    </QueryClientProvider>
  );
}

export default App;
