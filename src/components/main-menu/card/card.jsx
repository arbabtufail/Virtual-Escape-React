import "./card.styles.scss";

const Card = ({ children, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-logo-center">
        <img src={imageUrl} alt={children} />
      </div>
      <div className="card-sentence">{children}</div>
    </div>
  );
};
export default Card;
