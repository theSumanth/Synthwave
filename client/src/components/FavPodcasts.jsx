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
      className="aspect-square h-8 w-8 max-md:h-6 max-md:w-6 rounded-md"
    />
  );
};

const FavPodcasts = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["favpodcasts"],
    queryFn: fetchFavPodcasts,
  });

  if (isPending) {
    return <Loader message={"Fetching favourites..."} />;
  }
  console.log("data", data);

  return (
    <main className="flex flex-col bg-[#151515] m-2 py-4 px-2 rounded-md overflow-y-scroll h-full">
      <div className="flex items-center justify-start p-2 mx-4 max-md:mx-0 max-md:justify-center">
        <h1 className="font-bold text-base max-md:hidden">
          Favourite Podcasts
        </h1>
      </div>
      {isError && (
        <Error
          message={error?.message || "Failed to fetch favourites"}
          title={"An error occured"}
        />
      )}
      <ul>
        {data.user.length == 0 && (
          <p className="mx-4 p-2">No favourites yet.</p>
        )}
        {data.user?.map(({ podcast }) => {
          return (
            <SidebarItem
              key={podcast._id}
              // Icon={<Icon source={podcast.thumbnailUrl} />}
              Icon={Icon}
              path={`/home/${podcast._id}`}
              label={podcast.podcastName}
              source={podcast.thumbnailUrl}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default FavPodcasts;
