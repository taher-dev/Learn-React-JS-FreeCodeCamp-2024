import "./Card.css";
const Card = (props) => {
  return (
    <section className="card">
      <div className="card_main-img">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <h2>{props.title}</h2>
      <p>{props.country}</p>
    </section>
  );
};

export default Card;
