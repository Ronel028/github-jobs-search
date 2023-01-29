import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../../components/search/search";
import Title from "../../components/title/title";
import "./home.css";
const Home = () => {
  const [searchData, setSearchData] = useState("");
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const getJobList = async () => {
      const job = await axios.get("/job");
      setJobData(job.data.jobs_results);
    };
    getJobList();
  }, []);

  // event for submit search data
  const searchJOb = async (e) => {
    e.preventDefault();
    console.log(searchData);
    const jobList = await axios.get(`/job/api?job=${searchData}`);
    setJobData(jobList.data.jobs_results);
  };

  // change function for search job
  const inputSearch = (e) => {
    setSearchData(e.target.value);
  };

  console.log(jobData);

  return (
    <>
      <header className="header">
        <Title />
        <div className="hero">
          <Search searchJob={searchJOb} inputSearch={inputSearch} />
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
            {jobData.map((job) => {
              return (
                <div className="job" key={job.job_id}>
                  <div className="company-logo">
                    {job.thumbnail ? (
                      <img src={job.thumbnail} alt="sample 1" />
                    ) : (
                      <div className="not-found-image">not found</div>
                    )}
                  </div>
                  <div className="job-description">
                    <div className="job-title">
                      <p>{job.company_name}</p>
                      <h3>{job.title}</h3>
                    </div>
                    <div className="job-type">
                      <div
                        className="full-time"
                        style={{
                          border: job.detected_extensions.schedule_type
                            ? ""
                            : "none",
                        }}
                      >
                        {job.detected_extensions.schedule_type}
                      </div>
                      <ul className="job-location">
                        <li>
                          <span className="material-icons">public</span>
                          {job.location}
                        </li>
                        <li>
                          <span className="material-icons">access_time</span>
                          {job.detected_extensions.posted_at}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* jobs list */}
        </main>
      </section>
    </>
  );
};

export default Home;
