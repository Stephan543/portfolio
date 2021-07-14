// import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
// import { Button } from '../Button'
// // import './Navbar.css'
import DarkModeToggle from '../../DarkModeToggle';

import stephanCV from '../../Static/Stephan_Iskander_Resume.pdf';

// React router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import About from "../Pages/About";
import {Experience} from "../Pages/Experience";
import {Skills} from "../Pages/Skills";
import {Projects} from "../Pages/Projects";

// // New Material ui dependencies
// import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// // import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

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

// class Navbar extends Component {
//     state = { clicked: false }

//     // Click Handle for mobile burger menu
//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }

//     render(){
//         return(
//             <Router>
//                 <nav className="NavbarItems" color='secondary'>
//                 {/* <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1> */}
//                 <h1 className="navbar-button">
//                     <DarkModeToggle />
//                 </h1>
//                 <div className="menu-icon" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//                 </div>
//                 <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
//                     {MenuItems.map((item, index) => {
//                         return(
//                             <li key={index}>
//                                 <a className={item.cName} href={item.url}>
//                                     {item.title}
//                                 </a>
//                             </li>
//                         )
//                     })}
//                 </ul>
//                 <a href={stephanCV} target="_blank" rel="noopener noreferrer">
//                     <Button>Download CV</Button>
//                 </a>
//                 </nav>

//                 {/* Look through switches routes and renders the first match; */}
//                 <Switch>
//                     <Route exact path="/" component={About} />
//                     <Route exact path="/Skills" component={Skills} />
//                     <Route exact path="/Experience" component={Experience} />
//                     <Route exact path="/Projects" component={Projects} />
//                 </Switch>
//             </Router>
//         )
//     }
// }

import React, { useState } from 'react'
import { 
    Box,
    Button, Menu, MenuItem, MenuList, useMediaQuery, useTheme
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';
import DrawerComponent from './DrawerComponent';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    tabsContainer: {
        marginLeft: 'auto',
    },
    menuButton: {   // Burger Respoinsive
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    downloadButton: {
        marginLeft: 'auto',
        color: '#fff',
        '&:hover': {
            background: '#fff',
            color: '#6568F4',
        },
    },
    downloadButtonResponsive: {  
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#fff',
        '&:hover': {
            background: '#fff',
            color: '#6568F4',
        },
    },
}));


const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [anchorEl, setAnchorEL] = useState(null);
    const [selectedTab, setselectedTab] = useState(0)

    const handleClick = (event) => {
        setAnchorEL(event.currentTarget);
    };

    const handleClose = () =>{
        setAnchorEL(null);
    };

    const handleChange = (event, newValue) => {
        setselectedTab(newValue)
    };



    // Breakpoints
    const [value, setValue] = useState(0);

    const handleClickTab = (e, newValue) => {
        setValue(newValue)
    };


    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


        return (
                <div className={classes.root}>
                    <AppBar color='primary' position="static">
                        <Toolbar>
                            <Typography>
                                <DarkModeToggle/>
                            </Typography>
                            
                            {/* <DrawerComponent/> */}
                            
                            {!isMobile && <Tabs className={classes.tabsContainer} onChange={handleChange} indicatorColor='secondary' value={selectedTab}>
                                {MenuItems.map((item, index) =>
                                    <Tab value={index} label={item.title}/>
                                )}
                            </Tabs>
                            }
                            
                            
                            <Button href={stephanCV} target="_blank" rel="noopener noreferrer" className={isMobile ? classes.downloadButtonResponsive: classes.downloadButton} color='secondary' variant='contained'>Download CV</Button>
                            
                            {isMobile &&
                                <DrawerComponent/>
                            }
                        
                        </Toolbar>
                    </AppBar>
                    
                    {selectedTab === 0 && <About />}
                    {selectedTab === 1 && <Projects />}
                    {selectedTab === 2 && <Skills />}
                    {selectedTab === 3 && <Experience />}
                    
                </div>
        );
}

export default Navbar