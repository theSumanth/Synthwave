import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";

import PodcastCard from "../../components/PodcastCard";
import Loader from "../../UI/Loader";
import Error from "../Error";

const Podcasts = ({ fetchFn, qKey }) => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isError,
    error,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [qKey],
    queryFn: fetchFn,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.podcasts?.length === 10 ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  const podcasts = data?.pages.reduce((acc, page) => {
    if (!page.podcasts) return [...acc];
    return [...acc, ...page.podcasts];
  }, []);

  if (isLoading) {
    return <Loader message={"Fetching the podcats! Stand by please"} />;
  }

  return (
    <div className="m-6">
      <h1 className="font-bold text-3xl mb-4 text-purple-500">{qKey}</h1>
      {isError && (
        <Error
          title="Failed to fetch selectable images"
          message={error?.info?.message || "Failed to fetch images"}
        />
      )}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {podcasts &&
            podcasts.map((podcast) => {
              return <PodcastCard key={podcast._id} podcast={podcast} />;
            })}
        </section>
        <footer className="text-lg font-bold text-center my-10">
          {isFetchingNextPage && "Loading more Podcasts..."}
          {!hasNextPage && "You are all caught up!"}
        </footer>
      </InfiniteScroll>
    </div>
  );
};

export default Podcasts;
