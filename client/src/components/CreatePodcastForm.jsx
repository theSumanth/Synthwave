import Input from "../UI/Input";

const CreatePodcastForm = () => {
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
      <Input
        label="Speaker Name"
        id="speaker"
        name="speaker"
        type="text"
        placeholder={"Enter the speaker name"}
        required
      />
    </>
  );
};

export default CreatePodcastForm;
