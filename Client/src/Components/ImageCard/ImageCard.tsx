import { Avatar } from "@mui/material";
import "./ImageCard.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DownloadRounded } from "@mui/icons-material";
import FileSaver from "file-saver";

interface CardItem {
  img: string;
  author: string;
  prompt: string;
}
const ImageCard: React.FC<CardItem> = (cardItem) => {
  return (
    <div className="card-container">
      <LazyLoadImage width="100%" src={cardItem.img} />
      <div className="hover-overlay">
        <div className="hover-info">
          <div className="prompt">{cardItem.prompt}</div>
        </div>
        <div className="hover-owner">
          <div className="author">
            <Avatar sx={{ height: "32px", width: "32px" }}>
              {cardItem.author[0]}
            </Avatar>
            {cardItem.author}
          </div>
          <div className="download">
            <DownloadRounded
              onClick={() => FileSaver.saveAs(cardItem.img, "download")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
