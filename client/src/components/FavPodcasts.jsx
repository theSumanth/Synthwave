import { useQuery } from "@tanstack/react-query";

import { fetchFavPodcasts } from "../util/http";
import Loader from "../UI/Loader";
import Error from "../pages/Error";
import SidebarItem from "./Navbar/SidebarItem";

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
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["favpodcasts"],
    queryFn: fetchFavPodcasts,
    staleTime: 1000 * 60 * 5,
  });

  if (isPending) {
    return <Loader message={"Fetching favourites..."} />;
  }

  return (
    <main className="flex flex-col bg-[#151515] m-2 px-2 rounded-md max-md:hidden overflow-y-scroll h-full">
      <h1 className="font-bold text-base px-6 py-4 max-md:hidden sticky top-0 bg-inherit">
        Favourite Songs
      </h1>
      {isError && (
        <Error
          message={error?.message || "Failed to fetch favourites"}
          title={"An error occured"}
        />
      )}
      {data.user?.length === 0 && (
        <p className="mx-4 p-2">No favourites yet.</p>
      )}
      <ul>
        {data.user?.map(({ podcast }) => {
          let favouriteSong = (
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
              label={favouriteSong}
              source={podcast.thumbnailUrl}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default FavPodcasts;
