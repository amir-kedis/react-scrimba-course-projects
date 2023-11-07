export default function Card() {
  return (
    <div className="card">
      <img
        className="card__image"
        src="/assets/image 12.png"
        alt="famous swimmer"
      />
      <div className="card__stats">
        <img src="/assets/star.png" alt="Start" />
        <span className="card__rating">4.93</span>
        <span className="card__reviews">(223)</span>
        <span className="card__country">USA</span>
      </div>
      <p className="card__description">Life lessons with katie something</p>
      <span className="card__price">
        <b>From $136 /</b> person
      </span>
      <div className="card__badge">SOLD OUT</div>
    </div>
  );
}
