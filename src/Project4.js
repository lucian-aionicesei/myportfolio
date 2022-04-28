import NavBar from "./NavBar";

export default function Project4() {
    return (
      <>
      <NavBar theme="project-theme4"/>
        <div className="project-intro project-theme4">
          <article>
            <section>
              <h1><a className="white-text" href="https://graphite.dk//semester_1/04_Basic_animation_S21/index.html" target="_blank"
                rel="noreferrer noopener">Student Joe</a></h1>
              <h3>Interactive game</h3>
              <p>Joe has an assignment and decided to go to the library to gain more knowledge. But the library is haunted by ghosts where some are willing to help Joe, but some are evil.</p>
              <p>In this individual assignment I developed a "clicker"-game using Html, Css and JavaScript.</p>
              <nav className="links">
                <a className="white-text" href="https://graphite.dk//semester_1/04_Basic_animation_S21/index.html" target="_blank"
                rel="noreferrer noopener"><img src="/assets/icons/website.svg" alt="" /> Student Joe</a>
                <a className="white-text" href="https://github.com/lucian-aionicesei/Student_Joe_Game" target="_blank"
                rel="noreferrer noopener"><img src="/assets/icons/github.svg" alt="" /> GitHub repo</a>
              </nav>
            </section>
            <a href="https://graphite.dk//semester_1/04_Basic_animation_S21/index.html" target="_blank"
                rel="noreferrer noopener"><img className="img-preview" src="/assets/images/joe/joe.svg" alt="" /></a>
          </article>
        </div>
        <div className="tiles">
        <article className="project-theme4up">
          <section className="white-text">
            <h1 className="theme4-line">Tools</h1>
            <p>Html</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Adobe Illustrator</p>
            <p>Adobe XD</p>
            <p>Lucid.app</p>
          </section>
        </article>
        <article className="project-theme4up">
          <section className="white-text">
            <h1 className="theme4-line">Project focus</h1>
            <p>The focus of the project was to learn to use Query selectors, implement simple CSS animations and basic JavaScript functionalities.</p>
            <p>We learned the importance of an Activity Diagram in structuring the code and explaining the concept.</p>
          </section>
        </article>
        <article className="project-theme4up">
          <section className="white-text">
            <h1 className="theme4-line">Tools</h1>
            <p>Design & Concept</p>
            <p>Coding</p>
          </section>
        </article>
      </div>
    </>
    );
  }