import "../styles/card.css";

const Card = ({ title, description, done, archived, createdAt }) => {
  const completed = done ? "completed" : "incompleted";
  return (
    <div className="card">
      <div className="main-section">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <footer>
        <span
          className={completed}
          style={{
            color: "#fff",
            backgroundColor: done ? "green" : "orange",
            padding: "3px 10px",
            borderRadius: "12px",
          }}
        >
          {completed}
        </span>
        <div className="icons">
          <i class="fa-solid fa-box-archive"></i>
          <i class="fa-solid fa-trash"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </footer>
    </div>
  );
};

export default Card;
