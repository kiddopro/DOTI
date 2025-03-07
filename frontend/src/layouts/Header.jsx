import Button from "../components/Button.jsx";
import "../styles/header.css";
import { useModal } from "../contexts/ModalContext.jsx";

const Header = () => {
  const { openModal } = useModal();

  return (
    <div className="header">
      <input type="text" placeholder="Search" className="header-search" />
      <span>2025, Mar 07</span>
      <Button value="Add new task" c={"button-header"} onClick={openModal} />
    </div>
  );
};

export default Header;
