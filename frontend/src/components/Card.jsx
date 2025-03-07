import "../styles/card.css";

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <div className="main-section">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <footer>
        <span>Done</span>
        <div className="icons">
          <span>X</span>
          <span>Y</span>
          <span>Z</span>
        </div>
      </footer>
    </div>
  );
};

export default Card;
