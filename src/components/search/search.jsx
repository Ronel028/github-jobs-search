import "./search.css";
const Search = () => {
  return (
    <>
      <div className="input-field">
        <span className="material-icons">work_outline</span>
        <input
          type="text"
          name="search"
          className="search"
          id="search"
          placeholder="Title, companies, expertise or benefits"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
