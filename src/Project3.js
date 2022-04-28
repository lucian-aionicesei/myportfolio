import NavBar from "./NavBar";

export default function Project3() {
  return (
    <>
    <NavBar theme="project-theme3"/>
      <div className="project-intro project-theme3">
        <article>
          <section>
            <h1>
              <a className="dark-text" href="https://ngeorge07.github.io/SILFEN-website/" 
                target="_blank"
                rel="noreferrer noopener"
              >
                SILFEN Bags
              </a>
            </h1>
            <h3>Website and SoMe strategy</h3>
            <p>
              SILFEN is a Danish fashion brand, based in Copenhagen. Our task as
              a group was to develop a Social Media Content strategy and a
              landing page + product page for SILFEN's upcoming PROM collection.
            </p>
            <nav className="links">
              <a className="dark-text" href="https://ngeorge07.github.io/SILFEN-website/" 
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/assets/icons/website-dark.svg" alt="" /> SILFEN Bags
              </a>
              <a className="dark-text" href="https://github.com/ngeorge07/SILFEN-website" 
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/assets/icons/github-dark.svg" alt="" /> GitHub repo
              </a>
            </nav>
          </section>
          <a href="https://ngeorge07.github.io/SILFEN-website/" 
                target="_blank"
                rel="noreferrer noopener"
              >
            <img
              className="img-preview"
              src="/assets/images/silfen/silfen-bags.svg"
              alt=""
            />
          </a>
        </article>
      </div>
      <div className="tiles">
        <article className="project-theme3">
          <section className="white-text">
            <h1 className="theme2-line">Tools</h1>
            <p>Vanilla Js</p>
            <p>CSS</p>
            <p>Wordpress.org</p>
            <p>Git</p>
            <p>Figma</p>
          </section>
        </article>
        <article className="project-theme3">
          <section className="white-text">
            <h1 className="theme2-line">Project focus</h1>
            <p>
              We learned how to make design decisions taking a problem solving
              approach. We have followed "The Double Diamond" model to structure
              our workflow. We were introduced with the "Consumer Journey model"
              and worked closely to develop a design based on research.
            </p>
          </section>
        </article>
        <article className="project-theme3">
          <section className="white-text">
            <h1 className="theme2-line">Individual work</h1>
            <p>Design of the website</p>
            <p>
              Research: Desk research, UI Benchmark, Target Audience Interview,
              5 Second Test
            </p>
          </section>
        </article>
        <article className="project-theme3">
          <section className="white-text">
            <h1 className="theme2-line">Insights</h1>
            <p>
              We used WordPress.org database to store the information about the
              products on our website because it provides an easily accessible
              UI. Using JavaScript we made a query to an URL that returns a JSON
              file.
            </p>
            <p>
              In our database, we used a combination of WordPress built-in
              capabilities and custom Pods fields.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
