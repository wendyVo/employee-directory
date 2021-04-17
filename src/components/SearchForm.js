import React from "react";

function SearchForm(props) {
    return (
    <div className="input-group">
        <div className="form-outline">
            <input onChange={
                    props.handleInputChange
                }
                value={
                    props.value
                }
                name="search"
                type="text"
                className="form-control"
                placeholder="Search For an employee"
                id="search"/>
        </div>
        <button type="button" className="btn btn-primary"
            onClick={props.handleFormSubmit}>
            <i className="fa fa-search"></i>
        </button>
    </div>

    );
};

export default SearchForm;