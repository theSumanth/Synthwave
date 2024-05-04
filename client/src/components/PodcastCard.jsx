import logo from "/images/logo.png";

const PodcastCard = () => {
  return (
    <div className="group flex flex-col m-2 p-4 hover:bg-neutral-800 rounded hover:scale-105 transition-all hover:cursor-pointer">
      <img
        src={logo}
        alt=""
        className="aspect-square h-32 w-32 shadow-md mb-2 object-cover rounded-md"
      />
      <h1 className="font-medium text-lg">Animal</h1>
      <span className="text-xs">By someone</span>
    </div>
  );
};

export default PodcastCard;
