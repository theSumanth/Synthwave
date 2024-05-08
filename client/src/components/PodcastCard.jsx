import { Play } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PodcastCard = ({ podcast }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handlePodcastClick = () => {
    navigate(`/home/${podcast._id}`);
  };

  return (
    <section
      onClick={handlePodcastClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col justify-between m-2 w-56 h-80 items-center p-4 rounded hover:scale-105 transition-all ease-in-out duration-200 hover:cursor-pointer hover:bg-neutral-800 bg-[#151515]"
    >
      <div>
        <img
          src={`data:image/png;base64,${podcast.thumbnailUrl}`}
          alt="Podcast thumbnail"
          className="aspect-square shadow-md mb-2 object-cover rounded-md"
        />
        <h1 className="font-medium line-clamp-1 text-lg overflow-hidden">
          {podcast.podcastName}
        </h1>
        <span className="text-xs line-clamp-2 overflow-hidden">
          {podcast.description}
        </span>
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="flex w-full justify-between text-xs font-medium text-purple-500 mt-2">
          <span>{podcast.speaker}</span>
          <span>&#8226; {`${podcast.views} views`}</span>
        </div>
      </div>
      {isHovered && (
        <Play
          size={40}
          fill="white"
          color="#ffffff"
          strokeWidth={0}
          absoluteStrokeWidth
          className="absolute top-36 right-5 rounded-full p-2 m-2 bg-purple-500 shadow-glow"
        />
      )}
    </section>
  );
};

export default PodcastCard;
