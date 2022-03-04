import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import SignUp from '../Components/SignUp';
import SlideShow from '../Components/SlideShow';
import UploadFile from '../Components/UploadFile';
import Fab from '@mui/material/Fab';
import AddIcon from '@material-ui/icons/Add';



import {
  Route,
  Link
} from "react-router-dom";

export default function Home() {
  const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
  };
  

  const useStyles = makeStyles((theme) => ({
    alignCenter: {
      textAlign: 'center',
      paddingTop: theme.spacing(5),
    },
    // featureImage: {
    //   backgroundImage: 'url(${"https://source.unsplash.com/random"})',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: 'cover',
    //   backgroundColor:'#b1b1e2',
    //   opacity: '1',
    //   color: 'white',
    //   fontWeight: '800',
    //   paddingTop:'30'
    // },

  }));
  const classes = useStyles();
  return (
    <>
    <SlideShow/>
      
      <Container>

          {/* <Route path="/signup/">
            <SignUp/>
          </Route> */}
          {/* <SignUp/> */}
          
          
          
          <Link to='/signup/'>
          <Fab sx={fabStyle} aria-label="Add" color="primary">
            <AddIcon />
          </Fab>
          </Link>

          {/* <OwlCarousal /> */}
          <UploadFile/>
          

      </Container>


    </>
  )
}
