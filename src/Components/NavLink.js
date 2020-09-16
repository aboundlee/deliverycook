import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const NavLink = ({children, to}) => {

        let isActive = context.router.route.location.pathname === to;
        let className = isActive ? 'active' : '';

        return(
            <Link className={className} to={to}>
                {children}
            </Link>
        );
};


export default NavLink;
