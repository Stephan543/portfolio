import React, { Component } from 'react';
import { MenuItems } from './MenuItems';

class Navbar extends Component {
    render(){
        return(
            <nav className="NavItems">
                <h1 className="navBar-Logo">React</h1>
                <div className="menu-icon">
                    
                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar