import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { IconButton, Paper, Chip, Card, CardContent, CardActions } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import projects from '../../Static/projects.json';
import img0 from '../../Static/photos/local-library.jpg';
import img1 from "../../Static/photos/time-picker.JPG";
import img2 from "../../Static/photos/this-website.JPG";
import img3 from "../../Static/photos/recipe-website.JPG";

const imgArr = [
  img0,
  img1,
  img2,
  img3
]

const useStyles = makeStyles((theme) => ({
  stepper: {
    maxWidth: 'sm',
    flexGrow: 1,

  },
  layout: {
    width: 'auto',
    marginTop: theme.spacing(2)*4,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginTop: theme.spacing(2)*5,
      paddingBottom: theme.spacing(2)*2, 
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  img: {
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    height: 'auto',
  },
  header: {
    background: theme.palette.primary.main,
    color: "#fff",
    padding: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  newSection: {
    paddingTop: theme.spacing(4),
  },
  chipList: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  chip:{
    margin: theme.spacing(0.5),
  },
  card: {

  },
  expand:{
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function Projects() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0); // State for projects JSON file
  const [expanded, setExpanded] = React.useState(false); //

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <>
    <div className={classes.layout}>
      <Paper elevation={24}>
        <Paper square elevation={0} className={classes.header}>
          <Typography variant='h4' align='center'>{projects[activeStep].title}</Typography>
        </Paper>
        <img
          className={classes.img}
          src={imgArr[activeStep]}
          alt='img not found'
        />
        <div className={classes.content}>
          <Typography variant='h6' align='center'>
            <Button variant='contained' color="secondary"  startIcon={<GitHubIcon/>} href={projects[activeStep].link} target="_blank" rel="noopener external noreferrer">
                View Open Source Code 
            </Button>
          </Typography>
          <div  className={classes.chipList}>
            {
              projects[activeStep].tags.map(tag => {return(<Chip key={tag} className={classes.chip} label={tag}/>)})
            }
          </div>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography paragraph variant='h6'>Project Summary:</Typography>
              {
                projects[activeStep].summary.map(x => <Typography key={x} variant='body2' component='p' paragraph>{x}</Typography> )
              }
              {
                expanded &&
                <>
                  <Typography paragraph variant='h6'>Future:</Typography>
                  {
                  projects[activeStep].future.map(x => <Typography key={x} variant='body2' component='p' paragraph>{x}</Typography> )
                  }       
                </>  
              }
            </CardContent>
            <CardActions>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })} // Conditional styling depended on state
                onClick={handleExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
        <MobileStepper
          variant="dots"
          steps={4}
          position="static"
          activeStep={activeStep}
          className={classes.stepper}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </Paper>
    </div>  
    </>
  );
}