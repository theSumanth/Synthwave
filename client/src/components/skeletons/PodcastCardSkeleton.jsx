import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PodcastCardSkeleton = ({ cardsCount }) => {
  const podcastCards = Array(cardsCount).fill(0);
  return (
    <>
      {podcastCards.map(() => {
        return (
          <section className="flex flex-col gap-1 w-56 p-4" key={Math.random()}>
            <div>
              <Skeleton width={"12rem"} height={"12rem"} />
            </div>
            <h1>
              <Skeleton height={25} />
            </h1>
            <span>
              <Skeleton />
            </span>
            <span className="mt-2">
              <Skeleton />
            </span>
          </section>
        );
      })}
    </>
  );
};

export default PodcastCardSkeleton;
