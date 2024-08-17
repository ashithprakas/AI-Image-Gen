import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import "./GenerateImageForm.scss";
const GenerateImageForm = () => {
  return (
    <div className="generate-image-form">
      <div className="form-header">
        <div className="title">Generate Image with prompt</div>
        <div className="description">
          Write your prompt according to the iamge you want to generate
        </div>
      </div>
      <div className="form-body">
        <TextInput
          label="Author"
          placeholder="Enter your name . . ."
          name="name"
          rows={1}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image . . ."
          name="name"
          rows={4}
        />
        ** You can post the AI Generated Image to the Community **
      </div>
      <div className="form-actions">
        <Button text="Generate Image" leftIcon={<AutoAwesome />} />
        <Button
          text="Post Image"
          type="secondary"
          leftIcon={<CreateRounded />}
        />
      </div>
    </div>
  );
};

export default GenerateImageForm;
