import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav className="navBar" id="naviBar">
      <Link to={"/"}>
        <h3 className="logo">Lucian Aionicesei</h3>
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Projects</li>
        </Link>
        <Link to={"/about"}><li>About</li></Link>
        <li>
          <a
            href="https://github.com/lucian-aionicesei"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}
