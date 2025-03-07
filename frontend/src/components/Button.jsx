import "../styles/button.css";

const Button = ({ value, c }) => {
  return <button className={`button ${c}`}>{value}</button>;
};

export default Button;
