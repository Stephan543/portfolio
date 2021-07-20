import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Pic from './../../Static/Headshot.PNG';
import WaveBorder from '../Wave.js';
import {Container, Paper, Typography} from '@material-ui/core'

import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.secondary.main,
      
      // display: 'flex',
      // justifyContent: 'center',
      // '& > *': {
      //   margin: theme.spacing(1),
      // },
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        paddingBottom: theme.spacing(2)*2, 
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    heroContent: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(8, 0, 0),
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      }
    },
    titleBlock:{
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
    waveBorder: {
      paddingTop: theme.spacing(4),
    },
  }));


const About = (props) => {
    const classes = useStyles();

    return(
      <>
        <main className={classes.root}>

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component='h1' variant='h2' align='left' color='textPrimary' gutterBottom>
              Welcome!
            </Typography>
            <Typography variant="h5" align="left" color="textSecondary" style={{minHeight: '15vh'}} paragraph>
              My refined programming portfolio.
            </Typography>
          </Container>
        <WaveBorder upperColor='inherit' lowerColor='#3acbf7' animationNegativeDelay={1} className={classes.waveBorder}/>
        </div>

        <div className={classes.layout}>
          <Paper className={classes.paper}>

              <div className={classes.titleBlock}>
                <Avatar alt="Stephan Iskander" src={Pic} className={classes.avatar}/>
              </div>
              <Typography variant="h5" color='textPrimary' align="center">
              Stephan Iskander
              </Typography>
              <Typography variant="subtitle1" color='textSecondary' align="center">
              Full-Stack | Web-App | Developer
              </Typography>

              <div className={classes.titleBlock}>
                <IconButton href='https://github.com/stephan543' target="_blank" rel="noopener external noreferrer">
                  <GitHubIcon />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/stephaniskander/' target='_blank' rel="noopener external noreferrer">
                  <LinkedInIcon />
                </IconButton>
                <IconButton href="mailto:stephan.iskander@gmail.com">
                  <EmailIcon />
                </IconButton>
              </div>
              <Typography variant="subtitle1" color='textPrimary' align="left">
              Hi! I'm Stephan, an outgoing and personable web application developer. One that is self taught and loves collaborating to build really useful tools. I was formally trained and employed as an environmental engineering consultant before I made the deep dive into programming (Check out my Experience page!). If you'd like to connect or chat, send a quick intro email!
              </Typography>
          </Paper>

        </div>

        </main>
      </> 
        );
}

export default About;