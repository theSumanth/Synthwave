import { useQuery } from "@tanstack/react-query";

import { fetchFavPodcasts } from "../util/http";
import Loader from "../UI/Loader";
import Error from "../pages/Error";
import SidebarItem from "./Navbar/SidebarItem";
import FavPodcastSkeleton from "./skeletons/FavPodcastSkeleton";

const Icon = ({ source }) => {
  return (
    <img
      src={`data:image/png;base64,${source}`}
      alt="Podcast thumbnail"
      className="aspect-square h-12 w-12 max-md:h-6 max-md:w-6 rounded"
    />
  );
};

const FavPodcasts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["favpodcasts"],
    queryFn: fetchFavPodcasts,
    staleTime: 1000 * 60 * 5,
  });

  // const podcasts = data?.pages.reduce((acc, page) => {
  //   if (!page.podcasts) return [...acc];
  //   return [...acc, ...page.podcasts];
  // }, []);

  return (
    <main className="flex flex-col bg-[#151515] m-2 px-2 rounded-md max-md:hidden overflow-y-scroll h-full">
      <h1 className="font-bold text-base px-6 py-4 max-md:hidden sticky z-10 top-0 bg-inherit">
        Favourite Podcasts
      </h1>
      {isError && (
        <Error
          message={error?.message || "Failed to fetch favourites"}
          title={"An error occured"}
        />
      )}
      {data?.user?.length === 0 && (
        <p className="mx-4 p-2">No favourites yet.</p>
      )}
      <ul>
        {isLoading && <FavPodcastSkeleton count={5} />}
        {data?.user?.map(({ podcast }) => {
          let favouritePodcast = (
            <div className="flex flex-col">
              <h1 className="line-clamp-1">{podcast.podcastName}</h1>
              <span className="text-xs text-purple-400">{podcast.speaker}</span>
            </div>
          );

          return (
            <SidebarItem
              key={podcast._id}
              Icon={Icon}
              path={`/home/${podcast._id}`}
              label={favouritePodcast}
              source={podcast.thumbnailUrl}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default FavPodcasts;
