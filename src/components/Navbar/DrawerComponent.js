import React from 'react';
import { Drawer, IconButton, makeStyles, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { MenuItems } from './MenuItems';
import { useState } from 'react';
import MenuIcon from "@material-ui/icons/Menu"
import { withRouter } from 'react-router';

import About from "../Pages/About";
import {Experience} from "../Pages/Experience";
import {Skills} from "../Pages/Skills";
import {Projects} from "../Pages/Projects";
import { FaLess } from 'react-icons/fa';

const DrawerComponent = props => {
    const { history } = props;
    const useStyles = makeStyles(theme => ({
        drawerContainer: {},
    }))
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type ==='keydown' && (event.key === 'Tab' || event.key == 'Shift')){
            return;
        }

        setOpenDrawer(open);
    }

    const routeItem = (path) => {
        history.push(path);
        setOpenDrawer(false);
    };

    const classes = useStyles();

    return (
        <>
            <Drawer
                // classes={{ paper: classes.drawerContainer }}
                open={openDrawer}
                onClose={toggleDrawer(false)}
                anchor='right'>
                <List>
                    {MenuItems.map((item, index) => (
                            <ListItem onClick={() => routeItem(item.url)} key={item.title} divider button>
                                <ListItemIcon>
                                        <ListItemText primary={item.title}/>
                                </ListItemIcon>
                            </ListItem>
                    ))};
                </List>
            </Drawer>
            <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
};

export default withRouter(DrawerComponent);
