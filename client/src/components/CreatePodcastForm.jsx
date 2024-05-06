import Input from "../UI/Input";

const CreatePodcastForm = ({ onChangeType, fileType }) => {
  return (
    <>
      <Input
        label="Podcast Name"
        id="name"
        name="name"
        type="text"
        placeholder={"Enter Podcast name"}
        required
      />
      <Input
        textarea
        label="Description"
        id="description"
        name="description"
        type="text"
        placeholder={"Enter description"}
        required
      />
      {/* <Input
        label="Type of Podcast"
        id="category"
        name="category"
        type="text"
        placeholder={"Audio/Video"}
        required
      /> */}
      <Input
        label="Speaker Name"
        id="speaker"
        name="speaker"
        type="text"
        placeholder={"Enter the speaker name"}
        required
      />
      <div className="flex items-center my-4">
        <input
          checked={fileType === "audio"}
          id="default-radio-1"
          type="radio"
          value=""
          name="podcastFile"
          onChange={() => onChangeType("audio")}
          className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600"
        />
        <label
          htmlFor="default-radio-1"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Audio File
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked={fileType === "video"}
          id="default-radio-2"
          type="radio"
          value=""
          name="podcastFile"
          onChange={() => onChangeType("video")}
          className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600"
        />
        <label
          htmlFor="default-radio-2"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Video File
        </label>
      </div>
    </>
  );
};

export default CreatePodcastForm;
