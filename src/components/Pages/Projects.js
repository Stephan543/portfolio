import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Grid, IconButton, Paper, Chip, Card, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

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

  }
}));

export default function Projects() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [more, setMore] = React.useState(true);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleMore = () => {
    setMore(!more);
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
            <Button variant='contained' color="secondary" href={projects[activeStep].link} target="_blank" rel="noopener external noreferrer">
                View Open Source Code <GitHubIcon style={{paddingLeft: 5}}/>
            </Button>
          </Typography>
          <div  className={classes.chipList}>
            {
              projects[activeStep].tags.map(tag => {return(<Chip className={classes.chip} label={tag}/>)})
            }
          </div>
          <Card className={classes.card}>
            <CardContent>
            <div gutterBottom>
              <Typography variant='h6'>Project Summary:</Typography>
              {
                projects[activeStep].summary.map(x=> <Typography variant='body1' component='p'>{x}</Typography> )
              }
            </div>
            {
              more &&
              <div className={classes.newSection}>
                <Typography variant='h6'>Takeaways:</Typography>
                <Typography variant='body1' component='p'>{projects[activeStep].future}</Typography>
              </div>
            }
            </CardContent>
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