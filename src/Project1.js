
export default function Project1(props) {

  // console.log(props.setTheme)

  return (
    <>
        <div className="project-intro project-theme1">
          <article>
            <section>
              <h1><a className="white-text" href="http://">Carbon Tracker</a></h1>
              <h3>Calculate your Website's CO2 emissions</h3>
              <p>How can we measure the CO2 emissions of a website, but more importantly how can we reduce those emissions? Carbon Tracker is a web application prototype that takes a URL input from the user and calculates the CO2 emissions and performance of that Website.</p>
              <p>Our task as a group was to display the data in an easy to understand, impactful way, but also encourage the user/developer to take a greener approach.</p>
              <nav className="links">
                <a className="white-text" href="http://"><img src="/assets/icons/website.svg" alt="" /> Carbon Tracker</a>
                <a className="white-text" href="http://"><img src="/assets/icons/github.svg" alt="" /> GitHub repo</a>
              </nav>
            </section>
            <a href="http://"><img className="img-preview" src="/assets/images/carbontracker/carbon-tracker.svg" alt="" /></a>
          </article>
        </div>
    </>
  );
}