const PodcastCard = ({ podcast }) => {
  return (
    <div className="flex flex-col m-2 items-center p-4 hover:bg-neutral-800 rounded hover:scale-105 transition-all hover:cursor-pointer">
      <img
        src={`data:image/png;base64,${podcast.thumbnailUrl}`}
        alt="Podcast thumbnail"
        className="aspect-square h-32 w-32 shadow-md mb-2 object-cover rounded-md"
      />
      <h1 className="font-medium text-lg overflow-hidden">
        {podcast.podcastName}
      </h1>
      <span className="text-xs font-medium overflow-hidden">
        By {podcast.speaker}
      </span>
      <span className="text-xs font-medium text-purple-500">
        {podcast.category}
      </span>
    </div>
  );
};

export default PodcastCard;
