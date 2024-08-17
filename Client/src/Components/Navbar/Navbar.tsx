import { AddRounded, ExploreRounded } from "@mui/icons-material";
import Button from "../Button/Button";
import "./Navbar.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <div className="navbar-container">
      Gen AI{" "}
      {path[1] === "post" ? (
        <Button
          onClick={() => navigate("")}
          leftIcon={
            <ExploreRounded
              style={{
                fontSize: "18px",
              }}
            />
          }
          text="Explore Posts"
          type="secondary"
        ></Button>
      ) : (
        <Button
          onClick={() => navigate("post")}
          leftIcon={
            <AddRounded
              style={{
                fontSize: "18px",
              }}
            />
          }
          text="Create new post"
        ></Button>
      )}
    </div>
  );
};

export default Navbar;
