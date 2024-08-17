import ImageCard from "../../Components/ImageCard/ImageCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <div className="headline">
        Explore popuplar posts in the Community!{" "}
        <div className="sub-headline">Generated with AI</div>
        <SearchBar />
      </div>
      <div className="home-wrapper">
        <div className="card-wrapper">
          <ImageCard
            img="https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="author"
            prompt="prompt"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
