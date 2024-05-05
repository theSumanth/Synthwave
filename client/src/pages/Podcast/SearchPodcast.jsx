import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import Input from "../../UI/Input";
import PodcastCard from "../../components/PodcastCard";

import { searchPodcast } from "../../util/http";

const SearchPodcast = () => {
  const [searchTerm, setSearchTerm] = useState(undefined);

  const { data, isPending, isError, error, mutate } = useMutation({
    mutationFn: searchPodcast,
  });

  let timeoutId = null;
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      mutate({ searchTerm: value });
    }, 1000);
  };

  console.log(data);

  return (
    <div className="m-6 w-2/3">
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
          defaultValue={searchTerm}
          onChange={handleInputChange}
        />
      </section>

      <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {data?.map((podcast, index) => {
          return <PodcastCard key={index} podcast={podcast} />;
        })}
      </section>
      <footer className="text-lg font-bold text-center">
        Please type something to search!
      </footer>
    </div>
  );
};

export default SearchPodcast;
