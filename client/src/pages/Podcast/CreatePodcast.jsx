import { useContext, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpFromLine,
  CircleCheck,
  CircleX,
  SquarePlus,
} from "lucide-react";
import { Toaster, toast } from "sonner";

import Button from "../../UI/Button";
import { createNewPodcast } from "../../util/http";
import { PageContext } from "../../store/PageContextProvider";
import CreatePodcastForm from "../../components/CreatePodcastForm";

const CreatePodcast = () => {
  const inputRef = useRef();
  const inputRef2 = useRef();
  const [podcastFile, setPodcastFile] = useState(null);
  const [imageObj, setImageObj] = useState({
    imageBase64: "",
    imageUrl: null,
  });

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPodcastFile(file);
    toast.success("File uploaded succesfully", {
      classNames: {
        toast: "bg-green-400",
        title: "text-green-400",
        description: "text-green-400",
        actionButton: "bg-zinc-400",
        cancelButton: "bg-orange-400",
        closeButton: "bg-lime-400",
      },
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      setImageObj({
        imageBase64: base64String,
        imageUrl: URL.createObjectURL(file),
      });
    };

    reader.readAsDataURL(file);
  };

  const handleUploadAudioClick = () => {
    inputRef.current.click();
  };

  const handleUploadImageClick = () => {
    inputRef2.current.click();
  };

  const pageCtx = useContext(PageContext);

  const { mutate, isPending } = useMutation({
    mutationFn: createNewPodcast,
    onSuccess: () => {
      navigate("/home");
      pageCtx.changePageStatus("/home");
      toast("Posted your podcast", {
        icon: <CircleCheck color="white" />,
      });
    },
    onError: () => {
      toast("Failed to post the podcast", { icon: <CircleX color="white" /> });
    },
  });

  const [fileType, setFileType] = useState("audio");

  const handlePodcastUpload = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("file", podcastFile);
    formData.append("thumbnailUrl", imageObj.imageBase64);
    formData.append("category", fileType);

    mutate({ formData });
  };

  console.log(fileType);

  return (
    <div className="m-6 w-1/3 flex flex-col max-md:w-full">
      <h1 className="font-bold text-3xl mb-4 text-purple-500">
        Create a Podcast
      </h1>
      <form
        className="flex flex-col"
        method="POST"
        onSubmit={handlePodcastUpload}
      >
        <div
          className="border-solid hover:cursor-pointer border-neutral-800 border-2 w-20 h-20 flex items-center justify-center rounded-md"
          onClick={handleUploadImageClick}
        >
          <input
            ref={inputRef2}
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            className="hidden"
          />
          {imageObj.imageUrl && (
            <img
              src={imageObj.imageUrl}
              className="aspect-sqaure object-cover w-20 h-20 rounded-md"
            />
          )}
          {!imageObj.imageUrl && <SquarePlus />}
        </div>

        <CreatePodcastForm
          onChangeType={(value) => setFileType(value)}
          fileType={fileType}
        />

        <div className="my-4">
          <input
            ref={inputRef}
            type="file"
            accept={fileType === "audio" ? "audio/*" : "video/*"}
            onChange={handleFileChange}
            className="hidden"
          />
          <Button onClick={handleUploadAudioClick} type="button">
            <ArrowUpFromLine
              className="rounded-mdhover:cursor-pointer inline-block"
              size={20}
            />
            <span className="text-xs">Upload file</span>
          </Button>

          {fileType === "audio" && podcastFile && (
            <div className="mt-4">
              <audio controls>
                <source
                  src={URL.createObjectURL(podcastFile)}
                  type={podcastFile.type}
                />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
          {fileType === "video" && podcastFile && <span>{podcastFile}</span>}
        </div>
        <div
          id="form-actions"
          className="flex items-center justify-end font-extrabold"
        >
          <Button
            underline
            type="button"
            onClick={() => {
              navigate("..");
              pageCtx.changePageStatus("/home");
              toast("Posted your podcast", {
                icon: <CircleCheck color="white" />,
              });
            }}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Posting" : "Post the Podcast"}
          </Button>
        </div>
      </form>
      <Toaster position="bottom-right" visibleToasts={1} />
    </div>
  );
};

export default CreatePodcast;
