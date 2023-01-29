import "./search.css";
const Search = (props) => {
  return (
    <>
      <form className="input-field" onSubmit={props.searchJob}>
        <span className="material-icons">work_outline</span>
        <input
          type="text"
          name="search"
          className="search"
          id="search"
          placeholder="Title, companies, expertise or benefits"
          onChange={props.inputSearch}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
