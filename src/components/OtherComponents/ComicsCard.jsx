const ComicsCard = ({img, title, price}) => {
  return (
    <div className="col-1-6">
      <div className="card">
        <div className="card-img" style={{backgroundImage: `url(${img})` }}></div>
        <div className="title-card">{title.toUpperCase()}</div>
        <span className="comic-price">{price}</span>
      </div>    
    </div>
  );
};

export default ComicsCard;
