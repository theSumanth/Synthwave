import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";

import PodcastCard from "../../components/PodcastCard";
import { fetchPodcasts } from "../../util/http";

const Podcasts = () => {
  const array = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["podcasts"],
    queryFn: fetchPodcasts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
  });

  return (
    <div className="m-6">
      <h1 className="font-bold text-3xl mb-4 text-purple-500">
        Popular Podcasts
      </h1>
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
        <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {array.map((el, index) => {
            return <PodcastCard key={index} />;
          })}
        </section>
        <footer className="text-lg font-bold text-center">
          You are all caught up!
        </footer>
      </InfiniteScroll>
    </div>
  );
};

export default Podcasts;
