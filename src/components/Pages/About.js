import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Pic from './../../Static/Headshot.PNG';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(22),
      height: theme.spacing(22),
    },
  }));

//   function ImageAvatar() {

//     return(
//         <div className={classes.root}>
//             <Avatar alt="Remy Sharp" src="../../Static/Headshot.PNG"></Avatar>
//         </div>
//     )
//   }

export function About(){
    const classes = useStyles();

    return(

        <div className={classes.root}>
            <Avatar alt="Stephan Iskander" src={Pic} className={classes.large}></Avatar>
        </div>
        );
}