import GenerateImageForm from "../../Components/GenerateImageForm/GenerateImageForm";
import "./CreatePost.scss";

const CreatePost = () => {
  return (
    <div className="create-post-container">
      <div className="create-post-wrapper">
        <GenerateImageForm />
      </div>
    </div>
  );
};

export default CreatePost;
