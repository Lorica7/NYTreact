import React from "react";

const SearchForm = props => (

<div className="card">
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.query}
                        name="search"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Topic"
                        id="search"
                    />
                    <br />
                    <input
                        onChange={props.handleInputChange}
                        value={props.query1}
                        name="search"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Start Year"
                        id="search"
                    />
                    <input
                        onChange={props.handleInputChange}
                        value={props.query2}
                        name="search"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="End Year"
                        id="search"
                    />
                    <button
                        onClick={props.handleFormSubmit}
                        className="btn btn-info">
                        Search
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default SearchForm;