import { useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ArrowUpFromLine } from "lucide-react";

import Input from "../../UI/Input";
import Button from "../../UI/Button";

const CreatePodcast = () => {
  const inputRef = useRef();
  const [audioFile, setAudioFile] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAudioFile(file);
  };

  const handleOnClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="m-6 w-1/3 flex flex-col">
      <h1 className="font-bold text-3xl mb-4">Create a Podcast</h1>
      <Form className="flex flex-col">
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
          label="Type of Podcast"
          id="typeofpodcast"
          name="TypeOfPodcast"
          type="text"
          placeholder={"Audio/Video "}
          required
        />
        <Input
          label="Speaker Name"
          id="speakername"
          name="speakername"
          type="text"
          placeholder={"Enter the speaker name"}
          required
        />
        <div className="my-4 flex gap-4">
          <input
            ref={inputRef}
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <Button onClick={handleOnClick} type="button">
            <ArrowUpFromLine
              className="rounded-mdhover:cursor-pointer inline-block"
              size={20}
            />
            <span className="text-xs">Upload</span>
          </Button>

          {audioFile && (
            <div>
              <audio controls>
                <source
                  src={URL.createObjectURL(audioFile)}
                  type={audioFile.type}
                />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
        <div
          id="form-actions"
          className="flex items-center justify-end font-extrabold"
        >
          <Button underline type="button" onClick={() => navigate("..")}>
            Cancel
          </Button>
          <Button type="submit">Post the Podcast</Button>
        </div>
      </Form>
    </div>
  );
};

export default CreatePodcast;
