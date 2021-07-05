import React from 'react';

function Navlink(props) {
    return (
        <li className="nav-item">
            <a className="nav-link {props.classes}" href="{props.location}">{props.content}</a>
        </li>
    );
}

export default Navlink;