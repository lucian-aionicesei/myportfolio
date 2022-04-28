import NavBar from "./NavBar";
export default function Project1(props) {

  return (
    <>
      <NavBar theme="project-theme1"/>
      <div className="project-intro project-theme1">
        <article>
          <section>
            <h1>
              <a className="white-text" href="https://carbon-tracker.netlify.app/" target="_blank" rel="noreferrer noopener">
                Carbon Tracker
              </a>
            </h1>
            <h3>Calculate your Website's CO2 emissions</h3>
            <p>
              How can we measure the CO2 emissions of a website, but more
              importantly how can we reduce those emissions? Carbon Tracker is a
              web application prototype that takes a URL input from the user and
              calculates the CO2 emissions and performance of that Website.
            </p>
            <p>
              Our task as a group was to display the data in an easy to
              understand, impactful way, but also encourage the user/developer
              to take a greener approach.
            </p>
            <nav className="links">
              <a className="white-text" href="https://carbon-tracker.netlify.app/" target="_blank" rel="noreferrer noopener">
                <img src="/assets/icons/website.svg" alt="" /> Carbon Tracker
              </a>
              <a className="white-text" href="https://github.com/lucian-aionicesei/carbon-tracker" target="_blank" rel="noreferrer noopener">
                <img src="/assets/icons/github.svg" alt="" /> GitHub repo
              </a>
            </nav>
          </section>
          <a href="https://carbon-tracker.netlify.app/" target="_blank" rel="noreferrer noopener">
            <img
              className="img-preview"
              src="/assets/images/carbontracker/carbon-tracker.svg"
              alt=""
            />
          </a>
        </article>
      </div>
      <div className="tiles">
        <article className="project-theme1">
          <section className="white-text">
            <h1 className="theme1-line">Tools</h1>
            <p>Vanilla Js</p>
            <p>SCSS</p>
            <p>Vite</p>
            <p>Git</p>
            <p>Figma</p>
          </section>
        </article>
        <article className="project-theme1">
          <section className="white-text">
            <h1 className="theme1-line">Project focus</h1>
            <p>
              The aim of the project was to get used with handling data from an
              Api, SASS and implementing form validation. We have been working
              together using Git, by creating different branches and working on
              different components of the website. This is the first project
              where we learned to work with Vite and to install NPM's, which
              proved o be very helpful in creating the charts on our website. We
              also got to use Sass, and implemented a folder structure based on
              specific components of the Website.
            </p>
          </section>
        </article>
        <article className="project-theme1">
          <section className="white-text">
            <h1 className="theme1-line">Tools</h1>
            <p>Handling data fromthe APIs</p>
            <p>Form Validation</p>
            <p>Design of the website</p>
          </section>
        </article>
        <article className="project-theme1">
          <section className="white-text">
            <h1 className="theme1-line">Insights</h1>
            <p>
              In order to calculate how green a website is, we used the Website
              Carbon API. Since performance and resources directly influence the
              energy consumption, we used the Google Page Speed Api. The Page
              Speed Api also assesses the potential savings for different areas
              on a website. That way we were able to simulate a new result of
              the CO2 emissions, with the optimized parameters.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
