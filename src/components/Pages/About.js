import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Pic from './../../Static/Headshot.PNG';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  }));

//   function ImageAvatar() {

//     return(
//         <div className={classes.root}>
//             <Avatar alt="Remy Sharp" src="../../Static/Headshot.PNG"></Avatar>
//         </div>
//     )
//   }

const About = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Avatar alt="Stephan Iskander" src={Pic} className={classes.large}></Avatar>
            Hello
        </div>
        );
}

export default About;