import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Cards from '../Components/Cards.js';
import Home from '../Components/Home.js';
import CardDetails from '../Components/CardDetails';
import Login from '../Components/Login.js';
import Logout from '../Components/Logout.js';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import PostAd from './PostAd.js';

function Appbar() {
    const useStyles = makeStyles((theme) => ({
        navlinks: {
            marginLeft: theme.spacing(90),
            display: "flex",
          },
         logo: {
            flexGrow: "1",
            cursor: "pointer",
          },
          link: {
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
            marginLeft: theme.spacing(10),
            "&:hover": {
              color: "blue",
              textDecoration: "none",
              borderBottom: "1px solid white"
            },
          },
        
      }));
      const classes = useStyles();
    return (
        <Router>
        <AppBar position="relative">
        <Toolbar>
          {/* <AcUnitIcon/> */}
          <Typography variant="h6" color="inherit" noWrap>
            PNRA Ads
          </Typography>
          <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>Home</Link>
          <Link to="/cards" className={classes.link}>Ads</Link>

            
            <Link to="/postad" className={classes.link}>Post Ad</Link>

            
            <Link to={ ! getToken() ? '/login' : '/logout'  }  className={classes.link}>
              
              { ! getToken() ? 'Login' : 'Logout'  }
              
            </Link>


          </div>
        </Toolbar>
      </AppBar>
            <Route path="/">
                <Home />
            </Route>
            <Route  path="/cards/">
                <Cards/>
            </Route>
            <Route  path="/card-details/:id">
                <CardDetails/>
            </Route>
            <Route  path="/login/">
                <Login/>
            </Route>
            <Route  path="/postad/">
                <PostAd/>
            </Route>
            <Route  path="/logout/">
                <Logout/>
            </Route>
           

      </Router>
      
    )
}

export default Appbar
function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
}