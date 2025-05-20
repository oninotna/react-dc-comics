export default function Header() {
  return (
    <div className="header-section container flex">
      <figure>
        <img src="/img/dc-logo.png" alt="logo dc comics" />
      </figure>
      <ul className="header-link flex">
        <li>CHARACTERS</li>
        <li className="active">COMICS</li>
        <li>MOVIES</li>
        <li>TV</li>
        <li>GAMES</li>
        <li>COLLECTIBLES</li>
        <li>VIDEOS</li>
        <li>FANS</li>
        <li>NEWS</li>
        <li>SHOP</li>
      </ul>
    </div>
  );
};
