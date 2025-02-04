import "./Card.css";
const Card = (props) => {
  console.log(props);

  return (
    <>
      <div className="card">
        <img
          className="card_main-img"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
    </>
  );
};

export default Card;
