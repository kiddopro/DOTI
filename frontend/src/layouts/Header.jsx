import Button from "../components/Button.jsx";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Search" className="header-search" />
      <span>2025, Mar 07</span>
      <Button value="Add new task" c={"button-header"} />
    </div>
  );
};

export default Header;
