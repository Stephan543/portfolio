import React from 'react'
import { Drawer, IconButton, makeStyles, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { MenuItems } from './MenuItems'
import { useState } from 'react'

const DrawerComponent = () => {

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

    const classes = useStyles();

    return (
    <Drawer
        classes={{ paper: classes.drawerContainer }}
        open={openDrawer}
        onClose={toggleDrawer(false)}
        anchor='right'>
           <List>
               {MenuItems.map((item, index) => (
                    <ListItem onClick={() => setOpenDrawer(false)} key={item.title} divider button>
                        <ListItemIcon>
                                <ListItemText primary={item.title}/>
                        </ListItemIcon>
                    </ListItem>
               ))};
               
           </List>
    </Drawer>
    );
};

export default DrawerComponent;
