import React from 'react';
import { NavItems } from './nav_items';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar-items">
                <div className="search-icon">

                </div>
                <ul>
                    {NavItems.map(item, i) => {
                        return (
                            <li>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    }}
                </ul>
            </nav>
        )
    }
};

export default Navbar;