const ComicsCard = ({img, title}) => {
  return (
    <div className="col-1-6">
      <div className="card">
        <div className="card-img" style={{backgroundImage: `url(${img})` }}></div>
        <div className="title-card">{title.toUpperCase()}</div>
      </div>    
    </div>
  );
};

export default ComicsCard;
