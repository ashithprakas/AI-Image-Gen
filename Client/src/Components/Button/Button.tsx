import { ReactNode } from "react";
import "./Button.scss";
interface ButtonProps {
  text: string;
  leftIcon: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
}
const Button: React.FC<ButtonProps> = ({
  text,
  leftIcon,
  type = "primary",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${
        type === "secondary" ? "secondary" : "primary"
      }`}
    >
      {leftIcon}
      <div className="text">{text}</div>
    </button>
  );
};

export default Button;
