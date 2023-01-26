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
    </>
  );
};

export default Home;
