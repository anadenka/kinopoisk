import React from "react";
import { Link } from "react-router-dom";


const LinkItem = ({text, icon, href}) => (
    <Link to={href} className='headerMenuLink'>
        <i className={`${icon} icons`}></i>
        {text}
    </Link>
)

export default LinkItem