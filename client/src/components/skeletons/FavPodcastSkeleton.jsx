import Skeleton from "react-loading-skeleton";

const FavPodcastSkeleton = ({ count }) => {
  const favPodcasts = Array(count).fill(0);

  return (
    <>
      {favPodcasts.map(() => (
        <div className="flex m-2 px-2 gap-2 items-center" key={Math.random()}>
          <div className="podcast_thumbnail">
            <Skeleton width={50} height={50} />
          </div>
          <div className="w-full">
            <div>
              <Skeleton count={2} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FavPodcastSkeleton;
