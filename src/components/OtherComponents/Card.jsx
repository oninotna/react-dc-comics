const Card = ({immagine, titolo}) => (
  <figure>
    <img src={ immagine } alt="" />
    <span>{ titolo }</span>
  </figure>
);

export default Card;
