const SearchForm = props => (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Topic"
          id="search"
        />
        <br />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Start Year"
          id="search"
        />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="End Year"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
  
  export default SearchForm;