import { useQuery } from "@tanstack/react-query";

import { fetchFavPodcasts } from "../util/http";
import Loader from "../UI/Loader";
import Error from "../pages/Error";

const FavPodcasts = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["favpodcasts"],
    queryFn: fetchFavPodcasts,
  });

  if (isPending) {
    return <Loader message={"Fetching favourites..."} />;
  }
  console.log(data);

  return (
    <main className="flex flex-col bg-[#151515] m-2 py-4 px-2 rounded-md overflow-y-scroll h-full">
      {/* <section className="mx-4 p-2 flex flex-col rounded max-md:hidden">
          <h1 className="font-bold text-base max-md:hidden">Your Favourites</h1>
        </section> */}
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
        {data.user.map((podcast) => {
          <p>{podcast.speaker}</p>;
        })}
      </ul>
    </main>
  );
};

export default FavPodcasts;
