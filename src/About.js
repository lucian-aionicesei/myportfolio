import NavBar from "./NavBar";

export default function About() {
  return (
    <>
      <NavBar theme="about-theme"/>
      <Introduction />
      <div className="tiles">
        <article className="about-theme">
          <section className="white-text">
            <h1 className="theme3-line">Skills</h1>
            <div className="skillset">
            <p> <img src="assets/icons/html.png" alt="" /> HTML</p>
            <p> <img src="assets/icons/css.png" alt="" /> CSS/Sass</p>
            <p> <img src="assets/icons/js.png" alt="" /> JavaScript</p>
            <p> <img src="assets/icons/react.png" alt="" /> React</p>
            <p> <img src="assets/icons/git.png" alt="" /> Git</p>
            <p> <img src="assets/icons/xd.png" alt="" /> Adobe XD</p>
            <p> <img src="assets/icons/ai.png" alt="" /> Illustrator</p>
            <p> <img src="assets/icons/figma.png" alt="" /> Figma</p>
            </div>
          </section>
        </article>
        <article className="about-theme">
          <section className="white-text">
            <h1 className="theme3-line">Loking for internship</h1>
            <p>
              From August 22nd until 28 October
            </p>
          </section>
        </article>
      </div>
    </>
  );
}

function Introduction() {
  return (
    <section className="introduction about-theme">
      <img src="assets/images/lucian.png" alt="lucian" />
      <article>
        <h4>Lucian</h4>
        <p>Frontend Development student at KEA</p>
        <section className="intro-content">
          <p>
            The ability to make a design come to life and make it functional is
            the number one reason why I love frontend development.
          </p>
          <p>
            I got inspired to study Multimedia Design during the first lockdown
            when I realized that, bartending may not be most sustainable job for
            my future. But it is also during lockdown that I started a course in
            programming called CS50, that made me fall in love with coding.
          </p>
          <p>
            At KEA I got a good understanding of the design principles and how
            to make design decisions based on research. But the excitement I got
            from solving the little tasks, like making a dropdown menu, or
            displaying data from a database was far more satisfying than
            anything else.
          </p>
          <p>
            For that reason I chose to go with the Frontend elective where we
            explored Css and JavaScript in depth. We are at the point where we
            are learning React, and just for the fun of it I have designed my
            portfolio in React.
          </p>
          <p>
            I am now looking for an internship in Frontend development starting
            on the 22nd of August until the 28 of October.
          </p>
        </section>
      </article>
    </section>
    
  );
}
