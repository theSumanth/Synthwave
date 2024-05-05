import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";

import PodcastCard from "../../components/PodcastCard";
import { fetchPodcasts } from "../../util/http";

const Podcasts = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isError,
    error,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["podcasts"],
    queryFn: fetchPodcasts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.Podcasts?.length
        ? allPages.length + 1
        : undefined;
      console.log("nextpage", nextPage);
      return nextPage;
    },
  });

  const podcasts = data?.pages.reduce((acc, page) => {
    if (!page.Podcasts) return [...acc];
    return [...acc, ...page.Podcasts];
  }, []);

  // console.log(podcasts);

  return (
    <div className="m-6">
      <h1 className="font-bold text-3xl mb-4 text-purple-500">
        Popular Podcasts
      </h1>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {podcasts &&
            podcasts.map((podcast) => {
              return <PodcastCard key={podcast._id} podcast={podcast} />;
            })}
        </section>
        <footer className="text-lg font-bold text-center">
          {isFetchingNextPage && "Loading more Podcasts"}
          {!hasNextPage && "You are all caught up!"}
        </footer>
      </InfiniteScroll>
    </div>
  );
};

export default Podcasts;
