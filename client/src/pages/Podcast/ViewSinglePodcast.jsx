// import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { AudioPlayer } from "react-audio-player-component";

import {
  fetchSinglePodcast,
  url as API_KEY,
  addViewForPodcast,
} from "../../util/http";
import { Plus } from "lucide-react";

const ViewSinglePodcast = () => {
  const { podcastId } = useParams();

  const { data: podcast, isPending } = useQuery({
    queryKey: ["podcast", podcastId],
    queryFn: ({ signal }) => fetchSinglePodcast({ podcastId, signal }),
  });

  // const [isFavourite, setIsFavourite] = useState(podcast);

  const { mutate, isPending: isAddingFavPending } = useMutation({
    mutationFn: addViewForPodcast,
    onSuccess: () => {},
  });

  if (isPending) {
    return <p className="text-center">Fetching the podcast...</p>;
  }

  let addToFavContent = (
    <span
      onClick={() => {
        mutate({ podcastId });
      }}
      className="flex items-center text-xs bg-neutral-300 text-gray-300 bg-opacity-30 p-1 rounded m-2"
    >
      <Plus /> add to favourites
    </span>
  );

  return (
    <div className="flex flex-col items-center w-full bg-cover h-screen bg-center bg-podcast-background">
      <div className="p-6 bg-gradient-to-b from-neutral-950 w-full">
        <h1 className="flex mb-2 items-center gap-3 justify-between">
          <span className="font-bold text-3xl text-purple-500">
            {podcast.podcastName} - {podcast.category} {addToFavContent}
          </span>
          <div className="bg-neutral-900 p-2 bg-opacity-6]70 rounded">
            views: {podcast.views}
          </div>
        </h1>
        <p>
          Speaker: <span className="font-semibold">{podcast.speaker}</span>
        </p>
        <p className="text-sm mt-2 bg-neutral-900 p-2 rounded-md bg-opacity-40">
          {podcast.description}
        </p>
      </div>
      <div className="h-screen flex justify-center items-center aspect-square max-md:w-28">
        <AudioPlayer
          src={`${API_KEY}/${podcast.fileUrl}`}
          minimal={false}
          width={350}
          trackHeight={75}
          barWidth={1}
          gap={1}
          visualise={true}
          backgroundColor="#FFF8DE"
          barColor="#C1D0B5"
          barPlayedColor="#99A98F"
          skipDuration={2}
          showLoopOption={true}
          showVolumeControl={true}
          seekBarColor="purple"
          volumeControlColor="blue"
          hideSeekBar={true}
          hideTrackKnobWhenPlaying={true}
        />
      </div>
    </div>
  );
};

export default ViewSinglePodcast;

export async function loader({ params }) {
  const { podcastId } = params;

  await addViewForPodcast(podcastId);

  return null;
}
