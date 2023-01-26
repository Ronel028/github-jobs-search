import Search from "../../components/search/search";
import "./home.css";
const Home = () => {
  return (
    <>
      <header className="header">
        <div className="title">
          <h3>
            Github <span>Jobs</span>
          </h3>
        </div>
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
                  <span class="material-icons">check</span>
                </div>
              </div>
              Full time
            </label>
            <div className="search-location">
              <h2>LOCATION</h2>
              <div>
                <div className="location-input-container">
                  <span class="material-icons">public</span>
                  <input
                    type="text"
                    name="searchLocation"
                    id="searchLocation"
                    placeholder="City, state, zip code or country"
                  />
                </div>
                <div className="place">
                  <div className="london">
                    <input type="radio" name="place" id="london" />
                    <label htmlFor="london">London</label>
                  </div>
                  <div className="amsterdam">
                    <input type="radio" name="place" id="amsterdam" />
                    <label htmlFor="amsterdam">Amsterdam</label>
                  </div>
                  <div className="new-york">
                    <input type="radio" name="place" id="new-york" />
                    <label htmlFor="new-york">New York</label>
                  </div>
                  <div className="berlin">
                    <input type="radio" name="place" id="berlin" />
                    <label htmlFor="berlin">Berlin</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </main>
      </section>
    </>
  );
};

export default Home;
