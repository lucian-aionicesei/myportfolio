import NavBar from "./NavBar";

export default function Project5() {
    return (
      <>
      <NavBar theme="project-theme5"/>
        <div className="project-intro project-theme5">
          <article>
            <section>
              <h1><a className="dark-text" href="https://asgaard-forked.netlify.app/" target="_blank"
                rel="noreferrer noopener">Asgaard Fest</a></h1>
              <h3>Ticket purchase app</h3>
              <p>Asgard Fest is the concert with the most legendary bands. On the concert’s "official" website, visitors can check out the line-up and the schedule, purchase tickets and book camping accommodation.</p>
              <p>For the final exam of 3rd semester, everything we were given was two APIs: one with the concert’s lineup and information about the bands, and another one with the band schedule. We needed to come up with a design to display this information in the best way possible and create an intuitive purchasing flow for the tickets and for booking the accommodation.</p>
              <nav className="links">
                <a className="dark-text" href="https://asgaard-forked.netlify.app/" target="_blank"
                rel="noreferrer noopener"><img src="/assets/icons/website-dark.svg" alt="" /> Agaard Fest</a>
                <a className="dark-text" href="https://github.com/lucian-aionicesei/asgaard-forked" target="_blank"
                rel="noreferrer noopener"><img src="/assets/icons/github-dark.svg" alt="" /> GitHub repo</a>
              </nav>
            </section>
            <a href="https://asgaard-forked.netlify.app/" target="_blank"
                rel="noreferrer noopener"><img className="img-preview" src="/assets/images/asgaard/asgaard_fest.png" alt="" /></a>
          </article>
        </div>
        <div className="tiles">
        <article className="project-theme5">
          <section className="white-text">
            <h1 className="theme3-line">Tools</h1>
            <p>React</p>
            <p>Tailwind</p>
            <p>Git</p>
            <p>Strapi (database)</p>
            <p>Adobe XD</p>
          </section>
        </article>
        <article className="project-theme5">
          <section className="white-text">
            <h1 className="theme3-line">Project focus</h1>
            <p>To apply the knowledge gained throughout the 3rd semester, frontend elective.</p>
            <p>To get accustomed with a JS framework (React) and implement a fully functional user journey.</p>
          </section>
        </article>
        <article className="project-theme5">
          <section className="white-text">
            <h1 className="theme3-line">Individual work</h1>
            <p>UI Design (for tickets purchasing flow / booking flow)</p>
            <p>Coding (of tickets purchasing flow / booking flow, header and burger menu)</p>
            <p>Deployment frontend & backend</p>
            <p>Setting up react routers</p>
          </section>
        </article>
        <article className="project-theme5">
          <section className="white-text">
            <h1 className="theme3-line">Insights</h1>
            <p>We used React-router-dom npm package in order to render the different components based on the url path.</p>
            <p>Tailwind came in as a nice addition to our project. We were satisfied with the way of implementing styling with classes directly in the html content.</p>
          </section>
        </article>
      </div>
    </>
    );
  }