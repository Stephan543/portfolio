import { MenuItems } from './MenuItems';

import React, { useState } from 'react'
import { Button, useMediaQuery, useTheme } from '@material-ui/core'

import { Drawer, IconButton, makeStyles, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu"

import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';
import { withRouter } from 'react-router';

import About from "../Pages/About";
import {Experience} from "../Pages/Experience";
import {Skills} from "../Pages/Skills";
import {Projects} from "../Pages/Projects";
import DarkModeToggle from '../../DarkModeToggle';

import stephanCV from '../../Static/Stephan_Iskander_Resume.pdf';


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


const Navbar = props => {
    
    // Theming 
    const classes = useStyles();
    const theme = useTheme();    

    // Getting react router nested obj
    const { match, history } = props;
    const { params } = match; 
    const { page } = params;

    // The following objects are maps that allow the path lookup for the router and Tab function to work together
    const tabNameToIndex = {
        0: "about",
        1: "projects",
        2: "skills",
        3: "experience"
    }

    const indexToTabName = {
        "about" : 0,
        "projects" : 1,
        "skills" : 2, 
        "experience" : 3
    }

    // State for menu tab indicies
    const [selectedTab, setselectedTab] = useState(indexToTabName[page]);

    // Drawer State for Mobile
    const [openDrawer, setOpenDrawer] = useState(false);

    // Event handler for switching through tabs and updating the index value
    const handleChange = (event, newValue) => {
        history.push(`/${tabNameToIndex[newValue]}`);
        setselectedTab(newValue);
    };

    // Drawer Toggle function taken from material ui's docs, allows user to tab through
    const toggleDrawer = (open) => (event) => {
        if (event.type ==='keydown' && (event.key === 'Tab' || event.key === 'Shift')){
            return;
        }
        
        setOpenDrawer(open);
    }

    // Mobile Query Check for anything less than small screens
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Mobile menue event handler
    const routeItem = (path, newValue) => {
        history.push(path);
        setOpenDrawer(false);
        setselectedTab(newValue);
    };

        return (
                <div className={classes.root}>
                    <AppBar color='primary' position="static">
                        <Toolbar>
                            <Typography>
                                <DarkModeToggle/>
                            </Typography>                            

                            {/* Desktop View */}
                            {!isMobile && <Tabs className={classes.tabsContainer} onChange={handleChange} indicatorColor='secondary' value={selectedTab}>
                                {MenuItems.map((item, index) =>
                                    <Tab value={index} key={index} label={item.title}/>
                                )}
                            </Tabs>
                            }
                            
                            <Button href={stephanCV} target="_blank" rel="noopener noreferrer" className={isMobile ? classes.downloadButtonResponsive: classes.downloadButton} color='secondary' variant='contained'>Download CV</Button>
                            
                            {/* Mobile View */}
                            {isMobile &&
                                <>
                                    <Drawer
                                    open={openDrawer}
                                    onClose={toggleDrawer(false)}
                                    anchor='right'>
                                        <List>
                                            {MenuItems.map((item, index) => (
                                            <ListItem onClick={() => routeItem(item.url, index)} key={index} divider button>
                                                <ListItemIcon>
                                                        <ListItemText key={index}primary={item.title}/>
                                                </ListItemIcon>
                                            </ListItem>
                                            ))};
                                        </List>
                                    </Drawer>
                                    <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
                                        <MenuIcon />
                                    </IconButton>
                                </>
                            }
                        
                        </Toolbar>
                    </AppBar>
                    
                    {/* State checking for tab number (Both for mobile and regular screens) */}
                    {selectedTab === 0 && <About />}
                    {selectedTab === 1 && <Projects />}
                    {selectedTab === 2 && <Skills />}
                    {selectedTab === 3 && <Experience />}
                    
                </div>
        );
}

export default withRouter(Navbar)