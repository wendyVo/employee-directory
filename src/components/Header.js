import React from "react";
import "../css/style.css"

function Header() {
    return (
<div className="jumbotron jumbotron-fluid bg-info">
    <div className="container text-center text-white">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Use the search box to find an employee or sort by Name, Phone or Location  </p>
    </div>
</div>
    )
}

export default Header;