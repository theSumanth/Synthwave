import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import Input from "../../UI/Input";
import PodcastCard from "../../components/PodcastCard";

import { searchPodcast } from "../../util/http";
import Loader from "../../UI/Loader";
import H1 from "../../UI/H1";

const SearchPodcast = () => {
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [isSearching, setIsSearching] = useState(false);

  const { data, isPending, mutate } = useMutation({
    mutationKey: ["search", { search: searchTerm }],
    mutationFn: searchPodcast,
  });

  let timeoutId = null;
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setIsSearching(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      mutate({ searchTerm: value });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="m-6 w-2/3">
      <H1>Search a Podcast</H1>
      <section className="flex items-center gap-2 max-sm:flex-row">
        <Input
          id="name"
          name="name"
          type="text"
          placeholder={"Search something"}
          required
          defaultValue={searchTerm}
          onChange={handleInputChange}
        />
      </section>
      {isPending && <Loader message={"Searching"} />}

      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:place-items-center">
        {data?.map((podcast, index) => {
          return <PodcastCard key={index} podcast={podcast} />;
        })}
      </section>
      <footer className="text-lg font-bold text-center m-6">
        {!isSearching && "Please type something to search!"}
      </footer>
    </div>
  );
};

export default SearchPodcast;
