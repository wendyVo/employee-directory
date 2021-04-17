import React from "react";

function EmployeeCard(props) {
    return (
            <tr>
                <th scope="col"> <img alt={props.name} src={props.picture} /></th>
                <th scope="col">{props.name}</th>
                <th scope="col">{props.phone}</th>
                <th scope="col">{props.email}</th>
                <th scope="col">{props.dob}</th>
                <th scope="col">{props.location}</th>
            </tr>
    );
}

export default EmployeeCard;