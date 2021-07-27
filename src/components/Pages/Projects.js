import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Grid, Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';

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
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
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
}));

export default function Projects() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
    <div className={classes.layout}>
      <Paper style={{minHeight: 400}} elevation={3}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{projects[activeStep].title}</Typography>
        </Paper>
        <img
          className={classes.img}
          src={imgArr[activeStep]}
          alt='img not found'
        />
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