import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h2>Contact</h2>
      <section>
        <ul>
          <li>
            <a
              href="http://linkedin.com/in/lucian-aionicesei"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="assets/icons/linkedin.svg" alt="" />{" "}
              linkedin.com/in/lucian-aionicesei
            </a>
          </li>
          <li>
            <a
              href="http://github.com/lucian-aionicesei"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="assets/icons/github.svg" alt="" />{" "}
              github.com/lucian-aionicesei
            </a>
          </li>
          <li>
            <img src="assets/icons/gmail.svg" alt="" />
            lucian.aionicesei@gmail.com
          </li>
        </ul>
        <nav>
          <a href="#naviBar">Lucian Aionicesei</a>
          <a href="#naviBar">Projects</a>
          <Link to={"/about"}>About</Link>
        </nav>
        <a href="#naviBar" className="arrow-up">
          <img src="assets/icons/arrow-up.svg" alt="go up" />
        </a>
      </section>
    </footer>
  );
}
