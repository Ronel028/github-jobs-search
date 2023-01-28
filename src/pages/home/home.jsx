import Search from "../../components/search/search";
import Title from "../../components/title/title";
import "./home.css";
const Home = () => {
  return (
    <>
      <header className="header">
        <Title />
        <div className="hero">
          <Search />
        </div>
      </header>
      <section className="job-list-section">
        <main className="job-list-container">
          <div className="job-input-container">
            <label htmlFor="fullTime" className="full-time">
              <input type="checkbox" name="fullTime" id="fullTime" />
              <div className="checkmark">
                <div className="check-bg">
                  <span className="material-icons">check</span>
                </div>
              </div>
              Full time
            </label>
            <div className="search-location">
              <h2>LOCATION</h2>
              <div className="location-input">
                <div className="location-input-container">
                  <span className="material-icons">public</span>
                  <input
                    type="text"
                    name="searchLocation"
                    className="searchLocation"
                    id="searchLocation"
                    placeholder="City, state, zip code or country"
                  />
                </div>
                <div className="place">
                  <label htmlFor="london" className="placeName radio">
                    <input type="radio" name="place" id="london" />
                    <div className="radioBtn"></div>
                    London
                  </label>
                  <label htmlFor="amsterdam" className="placeName radio">
                    <input type="radio" name="place" id="amsterdam" />
                    <div className="radioBtn"></div>
                    Amsterdam
                  </label>
                  <label htmlFor="newYork" className="placeName radio">
                    <input type="radio" name="place" id="newYork" />
                    <div className="radioBtn"></div>
                    New York
                  </label>
                  <label htmlFor="berlin" className="placeName radio">
                    <input type="radio" name="place" id="berlin" />
                    <div className="radioBtn"></div>
                    Berlin
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* jobs list */}
          <div className="jobs">
            <div className="job">
              <div className="company-logo">
                <img src="" alt="sample 1" />
              </div>
              <div className="job-description">
                <div className="job-title">
                  <p>Kasisto</p>
                  <h3>Front-End Software Engineer</h3>
                </div>
                <div className="job-type">
                  <div className="full-time">Full time</div>
                  <ul className="job-location">
                    <li>
                      <span className="material-icons">public</span>
                      New York
                    </li>
                    <li>
                      <span className="material-icons">access_time</span>5 days
                      ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="job">
              <div className="company-logo">
                <img src="" alt="sample 1" />
              </div>
              <div className="job-description">
                <div className="job-title">
                  <p>Lev</p>
                  <h3>Senior Engineer</h3>
                </div>
                <div className="job-type">
                  <div className="full-time">Full time</div>
                  <ul className="job-location">
                    <li>
                      <span className="material-icons">public</span>
                      NY or LA
                    </li>
                    <li>
                      <span className="material-icons">access_time</span>5 days
                      ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="job">
              <div className="company-logo">
                <img src="" alt="sample 1" />
              </div>
              <div className="job-description">
                <div className="job-title">
                  <p>Sesama</p>
                  <h3>Senior Engineer(back end)</h3>
                </div>
                <div className="job-type">
                  <div className="full-time">Full time</div>
                  <ul className="job-location">
                    <li>
                      <span className="material-icons">public</span>
                      New York, Berlin
                    </li>
                    <li>
                      <span className="material-icons">access_time</span>5 days
                      ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="job">
              <div className="company-logo">
                <img src="" alt="sample 1" />
              </div>
              <div className="job-description">
                <div className="job-title">
                  <p>New York University</p>
                  <h3>Technology Solutions Developer</h3>
                </div>
                <div className="job-type">
                  <div className="full-time">Full time</div>
                  <ul className="job-location">
                    <li>
                      <span className="material-icons">public</span>
                      New York
                    </li>
                    <li>
                      <span className="material-icons">access_time</span>5 days
                      ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="job">
              <div className="company-logo">
                <img src="" alt="sample 1" />
              </div>
              <div className="job-description">
                <div className="job-title">
                  <p>Paddle</p>
                  <h3> Senior Python Software Engineer</h3>
                </div>
                <div className="job-type">
                  <div className="full-time" style={{ border: "none" }}></div>
                  <ul className="job-location">
                    <li>
                      <span className="material-icons">public</span>
                      New York
                    </li>
                    <li>
                      <span className="material-icons">access_time</span>5 days
                      ago
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* jobs list */}
        </main>
      </section>
    </>
  );
};

export default Home;
