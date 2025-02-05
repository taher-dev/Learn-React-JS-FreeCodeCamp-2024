import "./Card.css";
import marker from "../../assets/images/icon-marker.svg";
const Card = (props) => {
  console.log(props);

  return (
    <article className="card">
      <div className="card-left">
        <img
          className="card-main-img"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>

      <div className="card-right">
        <div className="card-right-line1">
          <img src={marker} alt="marker icon" />
          <p>{props.country}</p>
          <a href={props.googleMapsLink}>View on Google Maps</a>
        </div>
        <h2 className="card-right-title">{props.title}</h2>
        <p className="card-right-date">{props.dates}</p>
        <p className="card-right-text">{props.text}</p>
      </div>
    </article>
  );
};

export default Card;
