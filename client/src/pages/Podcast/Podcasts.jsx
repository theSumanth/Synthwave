import PodcastCard from "../../components/PodcastCard";

const Podcasts = () => {
  const array = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  return (
    <div className="m-6">
      <h1 className="font-bold text-3xl mb-4">Popular Podcasts</h1>
      <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {array.map((el, index) => {
          return <PodcastCard key={index} />;
        })}
      </section>
    </div>
  );
};

export default Podcasts;
