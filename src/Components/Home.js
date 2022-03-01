import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import SignUp from '../Components/SignUp';
import SlideShow from '../Components/SlideShow';
import {
  Route,
  Link
} from "react-router-dom";

export default function Home() {
  const useStyles = makeStyles((theme) => ({
    alignCenter: {
      textAlign: 'center',
      paddingTop: theme.spacing(5),
    },
    featureImage: {
      // backgroundImage: `url(${"https://source.unsplash.com/random"})`,
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      backgroundColor:'#b1b1e2',
      opacity: '1',
      color: 'white',
      fontWeight: '800',
      paddingTop:'30'
    },

  }));
  const classes = useStyles();
  return (
    <>
    <SlideShow/>
      <Box
        className={classes.featureImage}
      >
        <Container maxWidth="sm">
          <Typography
            component="h3"
            variant="h4"
            spacing={2}
            align="center"
            padding={3}
          > 
            Register Now
          </Typography>
          <Typography
            component="p"
            spacing={2}
            align="center"
            paddingBottom={3}
          > 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, maiores excepturi beatae, odit numquam soluta doloribus
           quidem rerum consequuntur vitae architecto aut molestias officia in, est accusamus iure tempora dolor.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            color="primary"
          >
            <Link to="/signup/" style={{textDecoration:'none'}}>
              <Button variant="contained" spacing={3}>Register Now</Button>
            </Link>
          </Stack>
          <br/>
        </Container>
      </Box>
      <Container>
          <Route path="/signup/">
            <SignUp/>
          </Route>
          {/* <OwlCarousal /> */}
          

      </Container>


    </>
  )
}
