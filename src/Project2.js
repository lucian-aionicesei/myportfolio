import NavBar from "./NavBar";

export default function Project2() {
  return (
    <>
      <NavBar theme="project-theme2" />
      <div className="project-intro project-theme2">
        <article>
          <section>
            <h1>
              <a
                className="dark-text"
                href="https://ngeorge07.github.io/sem2-exam-AKVA/index.html"
                target="_blank"
                rel="noreferrer noopener"
              >
                AKVA Jewellery
              </a>
            </h1>
            <h3>Website ad SoMe strategy</h3>
            <p>
              AKVA is a jewelry brand based in Copenhagen, that make
              high-quality jewelry from recycled precious metals and Fair Trade
              certified diamonds. Our task as a group was to create a digital
              solution that increases the brand awareness and online jewelry
              sales.
            </p>
            <p>
              Our solution was to redesign AKVA’s website to display information
              about their values in a more visual way, relying on images and
              infographics more than text. The information takes focus on
              ethical transparency and the brand’s effort to be conscious about
              their production process.
            </p>
            <nav className="links">
              <a
                className="dark-text"
                href="https://ngeorge07.github.io/sem2-exam-AKVA/index.html"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/assets/icons/website-dark.svg" alt="" /> AKVA
                Jewellery
              </a>
              <a
                className="dark-text"
                href="https://github.com/ngeorge07/sem2-exam-AKVA"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/assets/icons/github-dark.svg" alt="" /> GitHub repo
              </a>
            </nav>
          </section>
          <a
            href="https://ngeorge07.github.io/sem2-exam-AKVA/index.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="img-preview"
              src="/assets/images/akva/akva-jewellery.svg"
              alt=""
            />
          </a>
        </article>
      </div>
      <div className="tiles">
        <article className="project-theme2">
          <section className="white-text">
            <h1 className="theme3-line">Tools</h1>
            <p>Vanilla Js</p>
            <p>CSS</p>
            <p>RestDb</p>
            <p>Git</p>
            <p>Insomnia</p>
            <p>Adobe XD</p>
          </section>
        </article>
        <article className="project-theme2">
          <section className="white-text">
            <h1 className="theme3-line">Project focus</h1>
            <p>
              Website related, the aim of the project was to make design
              decisions based on research, get used with manipulating data from
              a database (RestDb), implement JavaScript libraries and working
              together using Git.
            </p>
          </section>
        </article>
        <article className="project-theme2">
          <section className="white-text">
            <h1 className="theme3-line">Individual work</h1>
            <p>Consciousness page</p>
            <p>Responsive header</p>
            <p>Design of the website</p>
          </section>
        </article>
        <article className="project-theme2">
          <section className="white-text">
            <h1 className="theme3-line">Insights</h1>
            <p>
              We used JavaScript to dynamically fetch and display the data from
              the database. For displaying charts on the Consciousness page, we
              used APEX Charts library.
            </p>
            <p>
              To measure our SEO and overall performance we used Lighthouse in
              Chrome's Dev Tools. We compressed our assets and converted them
              into .webp files for a better user experience.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
