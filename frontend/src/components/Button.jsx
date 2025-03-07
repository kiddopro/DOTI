import "../styles/button.css";

const Button = ({ value, c, onClick }) => {
  return (
    <button onClick={onClick} className={`button ${c}`}>
      {value}
    </button>
  );
};

export default Button;
