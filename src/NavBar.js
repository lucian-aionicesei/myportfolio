import { Link } from "react-router-dom";

export default function NavBar(props) {

  const darkText = props.theme === "project-theme2" || props.theme === "project-theme3" ? "dark-text" : "white-text";

  return (
    <nav className={"navBar " + props.theme} id="naviBar">
      <Link to={"/"}>
        <h3 className={"logo " + darkText}>Lucian Aionicesei</h3>
      </Link>
      <ul>
        <Link to={"/"}>
          <li className={darkText}>Projects</li>
        </Link>
        <Link className={darkText} to={"/about"}><li>About</li></Link>
        <li>
          <a className={darkText}
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
