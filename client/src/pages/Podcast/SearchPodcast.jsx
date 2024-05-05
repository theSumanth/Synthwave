import Input from "../../UI/Input";
import PodcastCard from "../../components/PodcastCard";

const SearchPodcast = () => {
  const array = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  return (
    <div className="m-6">
      <h1 className="font-bold text-3xl mb-4 text-purple-500">
        Search Podcasts
      </h1>
      <section className="flex items-center gap-2 max-sm:flex-row">
        <Input
          id="name"
          name="name"
          type="text"
          placeholder={"Search a Podcast"}
          required
        />
      </section>

      <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {array.map((el, index) => {
          return <PodcastCard key={index} />;
        })}
      </section>
      <footer className="text-lg font-bold text-center">
        Please type something to search!
      </footer>
    </div>
  );
};

export default SearchPodcast;
