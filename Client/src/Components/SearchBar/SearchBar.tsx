import { SearchOutlined } from "@mui/icons-material";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <SearchOutlined />
      <input
        className="search-input"
        placeholder="Search with prompt or name..."
      />
    </div>
  );
};

export default SearchBar;
