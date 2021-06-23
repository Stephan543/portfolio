import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button'
import './Navbar.css'
import DarkModeToggle from '../../DarkModeToggle';

// New Material ui dependencies
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// const useStyles = makeStyles ((theme) => ({
//     root: {
//         flexGrow: 1
//     },
//     menuButton: {
//         marginRight: theme.spacing(2)
//     },
//     title: {
//         flexGrow: 1
//     }
// }));

// export default function ButtonAppBar() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <AppBar position="fixed">
//                 <Toolbar align="left">  
//                     <Typography variant="h6" align="left" className={classes.title}>

//                     <ul className="nav-menu" align="left">
//                         {MenuItems.map((item, index) => {
//                             return(
//                                 <li key={index}>
//                                     <a className={item.cName} href={item.url}>
//                                         {item.title}
//                                     </a>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//                     </Typography>
//                     <IconButton
//                         edge="start"
//                         classname={classes.menuButton}
//                         color="inherit"
//                         aria-label="menu"
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     {/* <Button color="inherit">Test</Button> */}
//                 </Toolbar>
//                 </AppBar>
//         </div>
//     )
// }
class Navbar extends Component {
    state = { clicked: false }

    // Click Handle for mobile burger menu
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="NavbarItems">
                {/* <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1> */}
                <h1 className="navbar-button">
                    <DarkModeToggle />
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
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
                <Button>Download CV</Button>
            </nav>
        )
    }
}

export default Navbar