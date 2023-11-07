export default function Card(props) {
  let badgeText: string | null = null;
  if (props.openSpots == 0) badgeText = "SOLD OUT";
  else if (props.location == "Online") badgeText = "ONLINE";

  return (
    <div className="card">
      <img
        className="card__image"
        src={`/assets/${props.coverImg}`}
        alt={props.coverImg}
      />
      <div className="card__stats">
        <img src="/assets/star.png" alt="Start" />
        <span className="card__rating">{props.stats.rating}</span>
        <span className="card__reviews"> ({props.stats.reviewCount})</span>
        {props.location !== "Online" && (
          <span className="card__country">{props.location}</span>
        )}
      </div>
      <p className="card__description">{props.title}</p>
      <span className="card__price">
        <b>From ${props.price} /</b> person
      </span>
      {badgeText && <div className="card__badge">{badgeText}</div>}
    </div>
  );
}
