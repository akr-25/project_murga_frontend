import React from "react";
import { Link } from "react-router-dom";

function MenuItem(props) {
  const { name, iconClassName, to, inactive } = props;
  return (
    <li>
      <Link className='menu-item' to={to}>
        <div className='menu-icon'>
          <i className={iconClassName} />
        </div>
        {!inactive && <span className='menu-text'>{name}</span>}
      </Link>
    </li>
  );
}

export default MenuItem;
