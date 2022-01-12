import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';
import SignUp from '../Components/SignUp';

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
      backgroundImage: `url(${"https://source.unsplash.com/random"})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity: '1',
      color: 'white',
      fontWeight: '800',
    },

  }));
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }
        }
        className={classes.featureImage}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Welcome
          </Typography>
          <Typography variant="h3" align="center" fontWeight="bold"

          >
            Learning React with Material UI
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
            color="primary"
          >
            <Link to="/signup/" style={{textDecoration:'none'}}>
              <Button variant="contained">Contact Us</Button>
            </Link>

          </Stack>
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
